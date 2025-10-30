import { createContext, useContext, useState } from "react";
import Cookie from "js-cookie"
import { useEffect } from 'react' 
import axios from "../api/axios.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider")
    }
    return context;
}

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState(null); // Mejor un array para los errores
    const [loading, setLoading] = useState(true);

    const signin = async (data) => {
        try {
            const res = await axios.post("/signin", data);
                setUser(res.data);
                setIsAuthenticated(true);
                setErrors(null);
                setLoading(false); // <-- Añadimos (éxito)
                console.log("Usuario logueado:", res.data);
        } catch (error) {
            console.error("Error en el inicio de sesion:", error);
            if (error.response && Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            } else if (error.response) {
                setErrors([error.response.data.message || 'Error en el inicio de sesion']);
            } else {
                setErrors([error.message || 'Error desconocido']);
            }
            // setErrors([error.response.data.message]);
            setLoading(false); // <-- Añadimos (error)
            setIsAuthenticated(false);
            setUser(null);
        }
    }

    const signup = async (data) => {
        // console.log("Intentando registrar usuario:"); // <-- Debug1
        try {
            //console.log("Enviando peticion a API..."); // <-- Debug2
            const res = await axios.post("/signup", data)
            //console.log("Petición a API completada. Respuesta:", res); // <-- DEBUG 3

            //console.log("Actualizando estado: setUser y setIsAuthenticated"); // <-- DEBUG 4
            // 1. Guardamos los datos del usuario que devuelve el backend
            setUser(res.data);
            // 2. Ponemos el estado de autenticación en 'true'
            setIsAuthenticated(true);
            // 3. Limpiamos errores si el registro fue exitoso
            setErrors(null);
            setLoading(false); // <-- Añadimos (éxito)
            
            console.log("Usuario registrado:", res.data);

        } catch (error) {
            console.error("Error en el registro:", error.response?.data || error.message);
            // 4. Si hay un error (ej: email duplicado), lo guardamos en el estado
            if (error.response && Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            } else if (error.response) {
                setErrors([error.response.data.message || 'Error en el registro']);
            } else {
                setErrors([error.message || 'Error desconocido']);
            }
            setLoading(false); // <-- Añadimos (error)
            setIsAuthenticated(false);
            setUser(null);
        }
    }

    useEffect(() => {
        // Ya no comprobamos Cookie.get("token"), era incorrecto.
        // Simplemente intentamos pedir el perfil.
        // El navegador enviará la cookie httpOnly automáticamente.

        axios.get("/profile")
        .then((res) => {
            // Éxito: La cookie era válida
            setUser(res.data);
            setIsAuthenticated(true);
            setLoading(false); 
        }).catch((err) => {
            // Falla: No había cookie o era inválida
            console.log("Error de verificación (esto es normal si no estás logueado):", err);
            setUser(null);
            setIsAuthenticated(false);
            setLoading(false);
        })
    }, []) // El array vacío asegura que solo se ejecute 1 vez al cargar



    return <AuthContext.Provider value={{
        user, 
        isAuthenticated,
        errors,
        loading,
        signup,
        signin,
        setUser,
        }}>
        {children}
    </AuthContext.Provider>

}