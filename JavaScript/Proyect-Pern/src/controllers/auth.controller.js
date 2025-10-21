import {pool} from "../db.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";

export const signin = async (req, res) => {
  
  const {email, password} = req.body;
  const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
  
  if (result.rowCount === 0) {
    return res.status(400).json({message: "El usuario no existe"});
  }

  const validPassword = bcrypt.compareSync(password, result.rows[0].password);
  if (!validPassword) {
    return res.status(400).json({message: "Contraseña incorrecta"});
  }

  const token = await createAccessToken({id: result.rows[0].id});
      res.cookie("token", token, {
        httpOnly: true,
        SameSite: "none",
        maxAge: 60 * 60 * 24 * 1000,});

      return res.json(result.rows[0]);

};

export const signup = async(req, res, next) => {

  const {name, email, password} = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password,10);    
    const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, hashedPassword]);

    const token = await createAccessToken({id: result.rows[0].id}); // Puedo aqui hacer que guarde lo que quiera, en este caso vamos a decirle que me guarde el id
    // return res.json(result.rows[0])
    res.cookie("token", token, {
      httpOnly: true,
      SameSite: "none",
      maxAge: 60 * 60 * 24 * 1000,
    }); // maxAge seteado en un dia
    return res.json(result.rows[0]);
  } catch (error) {
    // res.send("Falló creación de usuario") // si dejo esta respuesta no se ejecuta el if
    if (error.code === "23505"){
      return res.status(400).json({message: "El correo ya esta registrado"});
    }
    next(error);
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({message: "Sesión cerrada"});
};

export const profile = async (req, res) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [req.userId]);
  return res.json(result.rows[0]);
};
