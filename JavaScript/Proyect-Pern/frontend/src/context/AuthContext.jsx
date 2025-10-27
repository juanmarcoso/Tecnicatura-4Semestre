import { createContext, useContext, useState } from "react";
import axios from "axios";

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

    const signup = async (data) => {
        // console.log("Intentando registrar usuario:"); // <-- Debug1
        try {
            //console.log("Enviando peticion a API..."); // <-- Debug2
            const res = await axios.post("http://localhost:3000/api/signup", data, {
                withCredentials: true,
            });
            //console.log("Petición a API completada. Respuesta:", res); // <-- DEBUG 3

            //console.log("Actualizando estado: setUser y setIsAuthenticated"); // <-- DEBUG 4
            // 1. Guardamos los datos del usuario que devuelve el backend
            setUser(res.data);
            // 2. Ponemos el estado de autenticación en 'true'
            setIsAuthenticated(true);
            // 3. Limpiamos errores si el registro fue exitoso
            setErrors(null);
            
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
            setIsAuthenticated(false);
            setUser(null);
        }
    }

    return <AuthContext.Provider value={{
        user, 
        isAuthenticated,
        errors,
        signup,
        }}>
        {children}
    </AuthContext.Provider>

}