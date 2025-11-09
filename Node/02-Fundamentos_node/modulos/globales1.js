let i = 0
let intervalo = setInterval(() => {  
  if (i === 3) {  
    clearInterval(intervalo); // Detiene el intervalo después de 3 ejecuciones
  } else {
    console.log("Intervalo en módulo global1.js " + i);
    i++;
  }
}, 1000);

setImmediate(() => {
    console.log("Saludo inmediato")
})

// require();

// console.log(process)
console.log(__dirname)