-- Query para crear la tabla tareas
CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) UNIQUE NOT NULL, 
    descripcion TEXT
)

-- Vamos a crear una columna para referenciar que usuario creo cierta tarea
ALTER TABLE tareas ADD COLUMN usuario_id INTEGER REFERENCES usuarios(id);

-- Query para crear la tabla usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

-- Vamos a agregar una columna a usuarios para insertar gravatar. 
-- Para mas info de gravatar: https://es.gravatar.com
ALTER TABLE usuarios ADD COLUMN gravatar VARCHAR(250);

ALTER TABLE usuarios ADD COLUMN fecha_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;