# practica-nodejs

Practicas de express, body-parser, filesystem, moment en nodejs

Crear el proyecto y configurar el servidor
Objetivos
- Crear la carpeta del proyecto e inicializar node
- Configurar el servidor para comenzar a escuchar requests
Tips
- mkdir - require(‘express’)
- npm init - express()
- npm i express - server.listen()
- node server
Agregar body-parser y configurar rutas
Objetivos
- Agregar y configurar body-parser
- Agregar las siguientes rutas
- POST /contacto
- GET /demo

Agregar middlewares
Objetivos
-Agregar un middleware que genere un log por cada ruta ejecutada. El log debe verse de la siguiente forma:
{Verbo} - {ruta} - {query strings} - {body} 
POST - /contact - null - {nombre: ‘pedro’...}
GET - /demo - {version: 1} - null

Ruta POST/contacto
Objetivos
- Agregar un middleware que verifique nombre, apellido y email contengan algún valor. Devolver status code 400 si algun dato es invalido
- Agregar un middleware que valide que el contacto no exista en el array de contactos. Devolver status code 409 si el contacto ya existe

Ruta GET/demo
Objetivos
- Agregar un middleware que verifique que exista un query string version.
- Query string version debe ser un valor mayor a 5, de lo contrario devolver un status code 422.

Agregar manejo de errores
Objetivos
- Agregar un middleware para validar los errores genéricos
- El status code a retornar es 500, el mensaje de error debe ser “Se ha producido un error inesperado”.
- Generar un log para mostrar por consola el error original