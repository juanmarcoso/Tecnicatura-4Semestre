import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

export const pool = new Pool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

pool.on("connect", () => {
    console.log("Conectado a la base de datos");
});