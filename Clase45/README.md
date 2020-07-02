# RESTful API

CONSIGNA EJERCICIO

Crear una RESTful API para Autores
Objetivo
- Crear una RESTful API que nos permita gestionar autores y sus libros

Rutas / Acciones
/autores
- GET: devuelve todos los autores
- POST: crea un nuevo autor
/autores/:id
- GET: devuelve el autor con el id indicado
- DELETE: elimina el autor con el id indicado
- PUT: modifica el autor con el id indicado

Rutas / Libros
/autores/:id/libros
- GET: devuelve todos los libros de un autor
- POST: agrega un nuevo libro al autor
/autores/:id/libros/:idLibro
- GET: devuelve el libro con el id indicado del autor
- PUT: modifica el libro con el id indicado del autor
- DELETE: eliminar el libro con el id indicado del autor

Validaciones — Autores
GET /autores
- Devuelve la lista de autores si hay alguno o un array vacío
POST /autores
- Si ya existe un autor con mismo nombre y apellido, devuelve 409
- De lo contrario agrega el nuevo autor y devuelve 201 con el JSON correspondiente al autor
GET /autores/:id
- Si el autor no existe devuelve 404
- De lo contrario devuelve 200 con el autor correspondiente
PUT /autores/:id
- Si el autor no existe devuelve 404
- De lo contrario modifica el autor y devuelve 200 con el autor correspondiente
DELETE /autores/:id
- Si el autor no existe devuelve 404
- De lo contrario elimina el autor y devuelve 204

Validaciones — Libros
GET /autores/:id/libros
- Si el autor no existe devuelve 404
- si el autor no tiene ningún libro devuelve 200 con un array vacío
- Caso contrario devuelve 200 con la lista de libros del autor
POST /autores/:id/libros
- Si el autor no existe devuelve 404
- De lo contrario agrega el libro al autor y devuelve 201 con el libro agregado
GET /autores/:id/libros/:idLibro
- Si el autor no existe devuelve 404
- si el libro no existe devuelve 404
- Caso contrario devuelve 200 con el libro correspondiente
PUT /autores/:id/libros/:idLibro
- Si el autor no existe devuelve 404
- Si el libro no existe devuelve 404
- De lo contrario modifica el libro y devuelve 200 con el libro modificado
DELETE /autores/:id/libros/:idLibro
- Si el autor no existe devuelve 404
- Si el libro no existe devuelve 404
- De lo contrario elimina el libro y devuelve 204

