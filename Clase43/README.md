# practica-nodejs

Practicas de express, body-parser, filesystem, moment en nodejs

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