import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
    
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'No autorizado' });
    }

    jwt.verify(token, 'xyr123', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.userId = decoded.id;
        next();
    });
}