class Canciones {
    create(sql, nombre, duracion, album, banda, fecha_publicacion) {
        let resp = sql.query(
            `INSERT INTO canciones nombre, duracion, album, banda, fecha_publicacion) 
            VALUES (:nombre, :duracion, :album, :banda, :fecha_publicacion)`,
            {
                replacements: {
                    nombre,
                    duracion,
                    album,
                    banda,
                    fecha_publicacion
                }
            });
        return resp
    };
    list(sql) {
        let resp = sql.query(
            'SELECT * FROM canciones', {
            type: sql.QueryTypes.SELECT,
        })
        return resp;
    };
    getId(sql, id) {
        let resp = sql.query(
            `SELECT * FROM canciones 
            WHERE id = :id`, {
            replacements: {
                id
            },
            type: sql.QueryTypes.SELECT,
        });
        return resp;
    };
    getName(sql, nombre) {
        let resp = sql.query(
            `SELECT * FROM canciones 
            WHERE nombre = :nombre`, {
            replacements: {
                nombre
            },
            type: sql.QueryTypes.SELECT,
        });
        return resp;
    };
    update(sql, id, nombre, duracion, album, banda, fecha_publicacion) {
        let resp = sql.query(
            `UPDATE canciones
            SET nombre = :nombre, duracion = :duracion, album = :album, banda = :banda, fecha_publicacion = :fecha_publicacion
            WHERE id = :id`, {
            replacements: {
                id,
                nombre,
                duracion,
                album,
                banda,
                fecha_publicacion
            },
            type: sql.QueryTypes.UPDATE
        });
        return resp
    };
    delete(sql, id) {
        let resp = sql.query(
            `DELETE FROM canciones
            WHERE id = :id`, {
            replacements: {
                id,
            },
            type: sql.QueryTypes.DELETE
        });
        return resp
    };
};

module.exports = { Canciones }