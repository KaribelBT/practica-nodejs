const express = require("express") // importamos la librería de express
const app = express() // ejecutamos nuestro servidor
const port = 3000 // numero de puerto
const bodyParser = require('body-parser')
let autoresLibros = require('./models/autoresLibros.js');
let miAutor = new autoresLibros.AutoresLibros()
app.use(bodyParser.json());

/****AUTORES*****/

// crear autor
app.post('/autores', miAutor.autorExist, (req, res) => {    
    miAutor.create(req.body.nombre, req.body.apellido, req.body.fechaDeNacimiento, req.body.libros)
    res.status(201).json('Autor creado satisfactoriamiente')    
});

//listado de autores
app.get('/autores', (req, res) => {
    res.status(200).json(miAutor.list()) 
})

//buscar autor por id
app.get('/autores/:id', miAutor.autorNotFound, (req, res) => {
    res.status(200).json(miAutor.get(req.params.id)) 
})

//buscar autor por id y updatea
app.put('/autores/:id', miAutor.autorNotFound, (req, res) => {
    miAutor.update(req.params.id, req.body.nombre, req.body.apellido, req.body.fechaDeNacimiento, req.body.libros)
    res.status(200).json('Autor modificado satisfactoriamiente')  
})

//delete de autores by id
app.delete('/autores/:id', miAutor.autorNotFound, (req, res) => {
    miAutor.delete(req.params.id)
    res.status(204).json()  
})

/****LIBROS*****/

// crear libro por id de autor
app.post('/autores/:id/libros', miAutor.autorNotFound, (req, res) => {
    miAutor.createLibros(req.params.id , req.body.titulo, req.body.descripcion, req.body.anioPublicacion)
    res.status(201).json('Libro creado satisfactoriamiente')    
});

//listado de libros por id de autor
app.get('/autores/:id/libros', miAutor.autorNotFound, (req, res) => {
    res.status(200).json(miAutor.listLibros(req.params.id)) 
})

//buscar libro por id desde id del autor
app.get('/autores/:id/libros/:idLibro', miAutor.autorNotFound, miAutor.libroNotFound, (req, res) => {
    res.status(200).json(miAutor.getLibros(req.params.id, req.params.idLibro)) 
})

//update por id de libro desde id del autor
app.put('/autores/:id/libros/:idLibro', miAutor.autorNotFound, miAutor.libroNotFound, (req, res) => {
    miAutor.updateLibros(req.params.id, req.params.idLibro, req.body.titulo, req.body.descripcion, req.body.anioPublicacion)
    res.status(200).json('Libro modificado satisfactoriamiente')  
})

//delete por id de libro desde id del autor
app.delete('/autores/:id/libros/:idLibro', miAutor.autorNotFound, miAutor.libroNotFound,(req, res) => {
    miAutor.deleteLibros(req.params.id, req.params.idLibro)
    res.status(204).json()
})

/*****************inicia servidor***************/
app.listen(port, () => {
    console.log('Server listening on port', port)
});
