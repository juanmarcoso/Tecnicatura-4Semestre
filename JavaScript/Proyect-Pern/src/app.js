import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Bienvenidos a mi proyecto de Facultad!');
});

app.get('/test', (req, res) => {
    throw new Error('Error generado por el usuario');
  res.send('Nueva ruta de prueba');
});

// Middleware para manejo de errores: Aqui vamos a manejar un mensaje de salida diferente
// app.use((err, req, res, next) => {
//     res.status(500).send('Ocurrió un error en el servidor');
// });

// Middleware de manejo de errores: Aqui vamos a manejar un mensaje de salida en formato JSON
app.use((err, req, res, next) => {
    res.status(500).json({ 
        status: 'error',
        message: err.message 
    });
});

export default app;