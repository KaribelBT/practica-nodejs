const express = require("express");
const server = express();
const port = 3001; 
const bodyParser = require('body-parser');
const fs = require('fs');

let contactos = [];

server.use(bodyParser.json());

//funcion para agregar log
const agregarLog = (req, res, next) =>{
    const data = `${req.method} - ${req.path} - ${JSON.stringify(req.query)} - ${JSON.stringify(req.body)} /n`
    fs.appendFileSync('accsess_log.log', data);
    next()
}

//middleware general para agregar log
server.use(agregarLog);

//funcion para usar como middleware valida contactos
const validarContacto = (req, res, next) =>{
    if (!req.body.nombre || !req.body.apellido || !req.body.email) {
        res.status(400).send({ error: 'Faltan datos' });
    }
    const { nombre, apellido, email } = req.body
    const exist = contactos.find(c => c.nombre === nombre && c.apellido === apellido && c.email === email)
    if (exist) return res.status(409).json({ error: `Ya existe el contacto ${nombre} asociado a este email ${email}` })
    else{
        next();
    }
}

//post para subir contactos
server.post('/contacto', validarContacto, (req, res) =>{
    let {nombre, apellido, email} = req.body
    contactos.push({nombre, apellido, email})
    res.status(200).json({status:"ok",message:"Contacto añadido satisfactoriamente"});
})

//funcion para usar como middleware valida version
const validarVersion = (req, res, next) =>{
    console.log(req.query)
    if(req.query.version && req.query.version>5){
        next()
    }else{
        res.status(422).json({ error: "Su version no es compatible"})
    }
         
}

//listar contactos
server.get('/demo', validarVersion, (req, res)=>{
    res.status(200).json(contactos);
})

//middleware general para manejo de errores
server.use ((err, req, res, next) =>{
    if (!err) return next();
    res.status(500).json({error: 'Se ha producido un error inesperado'})
    console.error(err);
})

//inicia server
server.listen(port, () => {
    console.log('Server listening on port', port)
});