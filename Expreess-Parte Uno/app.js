var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hola pajuos');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['Libia', 'Alexander', 'Ana', 'Angelina'])
})


app.get('/api/usuarios/:id', (req, res, next) => {
    res.end(req.params.id);
});

app.get('/api/usuarios/:year/:mes', (req, res) => {
    res.end(req.params);
});



const port = process.env.PORT || 3000; // esto es para cambiar el puerto
app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}.`);
})






// peticion
// app.post(); // envio de datos
// app.put(); // actualizacion
// app.delete(); // eliminacion