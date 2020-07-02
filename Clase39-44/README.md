# practica-nodejs

Practicas de express, body-parser, filesystem, moment en nodejs

CONSIGNA CLASE39

Recuerdan esta actividad?
Vamos a crear nuestras entidades. ● En ésta oportunidad no vamos a tocar nada del Front. ● Pensemos que clases, objetos y métodos vamos a utilizar. ● Pueden crearlas usando papel y lápiz, alguna herramienta ó creando las clases en javascript.
CONSIGNA CLASE41 Practica 1 Crear un archivo app.js que importe un módulo llamado calculator.js Practica 2 Nuestro módulo debe tener la posibilidad de sumar, restar, multiplicar y dividir Práctica 2.a Crea un script que utilice la librería de File System y tenga las siguientesfuncionalidades:

Crear un archivo de texto
Inserte un texto placeholder
Guardar archivo Práctica 2.b Crear un segundo script que:
Lea el archivo generado
Pase todo su contenido a mayúsculas
Guarde el archivo Pracica 3 Realizar cualquier operación desde app.js

CONSIGNA CLASE42

Imagen aleatoria: A través de la librería cool-images, muestra por consola una imagen aleatoria.
Más imágenes Cool-images nos provee un método para obtener la cantidad de imágenes que deseemos. Buscar el método en la documentación y utilizarlo para obtener 10 imágenes. Mostrar la URL de cada imagen utilizando foreach

Log file Cada ejecución del último script debe guardarse en un archivo llamado log.txt El formato de log debe ser el siguiente: Año/Mes/Día Hora:Minuto:segundo Url 1 Url 2 Url 3 Año/Mes/Día Hora:Minuto:segundo Url 1 Instalar librería moment js para el formato de fecha y hora.

CONSIGNA CLASE43 

Crear el proyecto y configurar el servidor Objetivo

Crear la carpeta del proyecto e inicializar node

Configurar el servidor para comenzar a escuchar requests Tips
mkdir
npm init
npm i express
require(‘express’)
express()
server.listen()
node server Crear GET Alumnos por comisión Objetivo

Crear ruta GET /acamica/comision/alumnos
comisión puede ser ‘dwfs’, ‘dwa’, ‘bigdata’
Reciba un query string parameter nombre que sirva para filtrar los alumnos con ese nombre
Retorna una lista de alumnos correspondientes a la comisión, si se incluyó nombre como query string solo retornar los alumnos con ese nombre Crear GET Alumnos por comisión por id Objetivo

Crear ruta GET /acamica/comision/alumnos/1
comisión puede ser ‘dwfs’, ‘dwa’, ‘bigdata’
id es el id del alumno
Devolver el alumno de la comisión indicada con ese id
Si el alumno no existe, devolver 404 Crear DELETE Alumnos por comisión por id Objetivo

Crear ruta DELETE /acamica/comision/alumnos/1
comisión puede ser ‘dwfs’, ‘dwa’, ‘bigdata’
id es el id del alumno
Eliminar el alumno de la comisión indicada con ese id
Si el alumno no existe devolver 404

CONSIGNA CLASE44

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
