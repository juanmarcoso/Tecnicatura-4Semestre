let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es: ' + web)

console.log('Ultima parte');
console.log('Fin del programa');

// Instalamos NODEMON para poder ver en tiempo real la ejecucion