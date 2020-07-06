#practica mysql

Crear BASE DE DATOS

Crear tabla BANDAS  
id / interger / PK not null auto-incrementable
nombre / varchar / not null
integrantes / interger / not null
fecha_inicio / date / not null
fecha_separacion / date / not null
pais/ varchar / not null

Crear tabla CANCIONES  
id / interger / PK not null auto-incrementable
nombre / varchar / not null
duracion / interger / not null
album / interger / not null
banda / interger / not null
fecha_publicacion / date / not null

Crear tabla ALBUMS
id / interger / PK not null auto-incrementable
nombre / varchar / not null
banda / interger / not null
fecha_publicacion / date / not null

Insertar datos a las tablas creadas
-Crear registros con datos consistentes para poder utilizarlos a futuro.
-Insertar 2 bandas, 2 canciones de cada una y 1 álbum de cada banda.

Ejecutar distintos querys.
- Obtener todas las bandas.
- Obtener todas las bandas de tu país.
- Obtener una banda solista.
- Obtener todas las canciones publicadas después del 2015.
- Obtener todas las canciones que duren más de 3 minutos.
- Obtener todos los álbumes.