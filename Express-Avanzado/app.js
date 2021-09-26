const debug = require('debug')('app:inicio');
//const dbDebug = require('debug')('app:db');

const usuarios = require('./routes/usuarios');
const express = require('express');
const config = require('config');
//const logger = require('./logger');
const morgan = require('morgan');
//const Joi = require('@hapi/joi');
const app = express();

app.use(express.json());//body 
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/api/usuarios', usuarios);

//Configuación de entornos
console.log('Aplicación: ' + config.get('nombre'));
console.log('BD server: ' + config.get('configDB.host'));

//Uso de middleware de tercero - Morgan
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //console.log('Morgan habilitado...')
    debug('Morgan esta habilitado.');
}

//Trabajos con la base de datos
debug('Conenctando con la bd...');

//app.use(logger);
// app.use(function(req, res, next){
//     console.log('Autenticando....');
//     next();
// })

app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
})


