class artist{
    constructor(nombre, foto, discos, descripcion){
        this.nombre = nombre;
        this.foto = foto;
        this.discos = discos;
        this.descripcion = descripcion;
    }
}

new artista(nombre:"Enrique Bunbury", foto:"enrique.jpg", discos:[...], descripcion:"descripcion");

api.com/artista
{nombre, foto, discos, descripcion}

//otra forma de hacerlo:

Artista{
    foto,
    nombre
}
Banda{
    nombre
}
Integrante{
    artista,
    banda
}
Artista = {Cerati, foto}

api.com/artistas
{
    nombre: 'ceratti',
    foto: 'perfil.jpg'
}
api.com/bandas
{
    nombre: 'Divididos'
}
api.integrantes?banda=divididos
{
    banda: 'Divididos',
    artista: {
        nombre: 'Ceratti',
        foto: 'perfil.jpg'
    }
}