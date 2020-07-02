const id = new mongoose.Schema({ id: mongoose.ObjectId });

const Inmueble = mongoose.model('inmuebles', { 
    id, 
    tipoOperacion: String,
    tipoInmueble: String,
    direccion: String, 
    fotos: [{ type: String }],
    ambientes: Number,
    metrosCuadrados: Number,
    descripcion: String,
    datosPropietario: { nombre: String, apellido: String, email: String }
});

module.exports = { Inmueble }