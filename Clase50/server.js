const express = require('express');
const server = express();
const port = 3000;
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/bandas');
const canciones = require('./models/canciones.js');
let miCancion = new canciones.Canciones();
server.use(bodyParser.json());

//inicia servidor
server.listen(port, () => {
    console.log('Servidor Iniciado');
});

//crea cancion
server.post('/canciones', async (req, res) => {
    const { nombre, duracion, album, banda, fecha_publicacion } = req.body;
    let create = await miCancion.create(sequelize, nombre, duracion, album, banda, fecha_publicacion);
    if (create.length > 0) {
        let cancion = await miCancion.get(sequelize, create[0]);
        cancion = cancion[0]
        res.status(201).json({
            id: cancion.id,
            nombre: cancion.nombre,
            duracion: cancion.durancion,
            album: cancion.album,
            banda: cancion.banda,
            fecha_publicacion: cancion.fecha_publicacion
        });
    } else {
        res.status(400).json({ error: 'Bad Request, invalid or missing input' });
    }
});

//lista todas las canciones
server.get('/canciones', async (req, res) => {
    let cancionesList = await miCancion.list(sequelize);
    res.status(200).json(cancionesList);
});

//obtiene cancion por id
server.get('/canciones/:id', async (req, res) => {
    let cancion = await miCancion.getId(sequelize, req.params.id);
    if (cancion.length > 0) {
        cancion = cancion[0];
        res.status(200).json({
            id: cancion.id,
            nombre: cancion.nombre,
            duracion: cancion.durancion,
            album: cancion.album,
            banda: cancion.banda,
            fecha_publicacion: cancion.fecha_publicacion
        });
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
});

//obtiene cancion por nombre
server.get('/canciones/:nombre', async (req, res) => {
    let cancion = await miCancion.getName(sequelize, req.params.nombre);
    if (cancion.length > 0) {
        cancion = cancion[0];
        res.status(200).json({
            id: cancion.id,
            nombre: cancion.nombre,
            duracion: cancion.durancion,
            album: cancion.album,
            banda: cancion.banda,
            fecha_publicacion: cancion.fecha_publicacion
        });
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
});

//modifica cancion por id
server.put('/canciones/:id', async (req, res) => {
    const { nombre, duracion, album, banda, fecha_publicacion } = req.body;
    let cancion = await miCancion.getId(sequelize, req.params.id);
    if (cancion.length > 0) {
        cancion = cancion[0];
        try {
            await miCancion.update(sequelize, req.params.id, nombre, duracion, album, banda, fecha_publicacion);
            let cancionUpdated = await myUser.getId(sequelize, req.params.id);
            cancionUpdated = cancionUpdated[0];
            res.status(200).json({
                id: cancionUpdated.id,
                nombre: cancionUpdated.nombre,
                duracion: cancionUpdated.durancion,
                album: cancionUpdated.album,
                banda: cancionUpdated.banda,
                fecha_publicacion: cancionUpdated.fecha_publicacion
            });
        } catch {
            res.status(400).json({ error: 'Bad Request, invalid or missing input' })
        };
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
});

//elimina cancion por id
server.put('/canciones/:id', async (req, res) => {
    let cancion = await miCancion.getId(sequelize, req.params.id);
    if (cancion.length > 0) {
        cancion = cancion[0];
        await miCancion.delete(sequelize, req.params.id);
        res.status(200).json({ message: 'Success' });
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
});
