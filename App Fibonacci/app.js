// Serie de Fibonacci
// 1 1 2 3 5 8 13 21 34

const serie = require('./serie');

let argv = process.argv;
let valor = argv[2].split('=')[1];
//console.log(valor)

let cantidad = valor;

serie.crearSerie()
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje));