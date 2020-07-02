MY SQL

/*CREAR TABLAS*/

CREATE TABLE bandas(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR (60)  NOT NULL,
    integrantes INT NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_separacion date,
    pais VARCHAR (60)  NOT NULL,
)

CREATE TABLE albumes(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre_album VARCHAR (60)  NOT NULL,
    duracion INT NOT NULL,
    banda INT NOT NULL,
    fecha_publicacion DATE NOT NULL
)

CREATE TABLE canciones(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR (60)  NOT NULL,
    duracion INT NOT NULL,
    album INT NOT NULL,
    banda INT NOT NULL,
    fecha_publicacion DATE NOT NULL
)

/*INSERTAR DATOS*/

INSERT INTO bandas
VALUES (1, 'MAGO DE OZ', 9, '1988-01-01', NULL, 'ESPAÑA')

INSERT INTO bandas
VALUES (2, '3 DOORS DOWN', 5, '1996-01-01', NULL, 'ESTADOS UNIDOS')

INSERT INTO albumes
VALUES (1, 'GAIA III', 2, 1, '2010-04-06')

INSERT INTO albumes
VALUES (2, 'THE BETTER LIFE', 2, 2, '2000-02-08')


