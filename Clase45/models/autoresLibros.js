let = arrayAutores = [];
let = arrayLibros = [];

class AutoresLibros {
    incrementId() {
        return arrayAutores.length + 1;
    };
    list() {
        return arrayAutores;
    };
    get(id) {
        return arrayAutores.find(autor => autor.id == id);
    };
    create(nombre, apellido, fechaDeNacimiento) {
        let objAutores = {
            id: this.incrementId(),
            nombre: nombre,
            apellido: apellido,
            fechaDeNacimiento: fechaDeNacimiento,
            libros: []
        };
        arrayAutores.push(objAutores);
    };
    delete(id) {
        let autorSeleccionado = this.get(id);
        arrayAutores.splice(autorSeleccionado.id-1);
    };
    update(id, nombre, apellido, fechaDeNacimiento,) {
        let autorSeleccionado = this.get(id);
        autorSeleccionado.nombre = nombre;
        autorSeleccionado.apellido = apellido;
        autorSeleccionado.fechaDeNacimiento = fechaDeNacimiento;
        autorSeleccionado.libros = [];        
    };
    incrementIdLibro() {
        return arrayLibros.length + 1;
    };
    listLibros() {
        return arrayLibros;
    };
    getLibros(id, idLibro){
        this.get(id);
        return arrayLibros.find(libro => libro.idLibro == idLibro);
    };
    createLibros(id, titulo, descripcion, anioPublicacion){
        let autorSeleccionado = this.get(id);
        let objLibros = {
            idLibro: this.incrementIdLibro(),
            titulo: titulo,
            descripcion: descripcion,
            anioPublicacion: anioPublicacion
        }
        arrayLibros.push(objLibros);
        autorSeleccionado.libros = arrayLibros
    }
    updateLibros(id, idLibro, titulo, descripcion, anioPublicacion){
        let autorSeleccionado = arrayAutores.find(autor => autor.id == id)
        let libroSeleccionado = autorSeleccionado.libros.find(libro => libro.idLibro == idLibro);
        libroSeleccionado.titulo = titulo;
        libroSeleccionado.descripcion = descripcion;
        libroSeleccionado.anioPublicacion = anioPublicacion;
    }
    deleteLibros(id, idLibro){
        let autorSeleccionado = arrayAutores.find(autor => autor.id == id)
        let libroSeleccionado = autorSeleccionado.libros.find(libro => libro.idLibro == idLibro);
        autorSeleccionado.libros.splice(libroSeleccionado.idLibro-1);
    }   
    autorNotFound = (req, res, next) => {
        const { id } = req.params;
        const exist = this.get(id);
        if (!exist) return res.status(404).json({ error: `El autor con el id ${id} no existe` });
        else{ next() };
    };
    autorExist = (req, res, next) => {
        const { nombre, apellido } = req.body;
        const exist = arrayAutores.find(a => a.nombre === nombre && a.apellido === apellido);
        if (exist) return res.status(409).json({ error: `Ya existe el autor ${nombre} ${apellido}` })
        else{ next() };
    };
    libroNotFound = (req, res, next) => {
        const { id } = req.params;
        const { idLibro } = req.params;
        const exist = this.getLibros(id, idLibro);
        if (!exist) return res.status(404).json({ error: `El libro con el id ${id} no existe` });
        else{ next() };
    };
}

module.exports = { 
    arrayAutores,
    arrayLibros,
    AutoresLibros }