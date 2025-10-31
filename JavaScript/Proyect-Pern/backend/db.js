import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });

export const pool = new Pool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

});

// Función para verificar la conexión al iniciar la aplicación
const checkConnection = async () => {
    try {
        // Pide un cliente al pool y lo libera inmediatamente.
        // Si esto no lanza un error, la conexión funciona.
        const client = await pool.connect();
        console.log("✅ Conexión a la base de datos exitosa.");
        client.release(); // Devuelve el cliente al pool
    } catch (err) {
        console.error("❌ Error al conectar con la base de datos:", err.stack);
        // Si no se puede conectar, es mejor terminar el proceso.
        process.exit(1);
    }
};

// Llama a la función para que se ejecute al cargar este archivo
checkConnection();