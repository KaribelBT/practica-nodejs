# acamibank

proyecto con html, bootstrap, javascript, node js, express, JwT, mysql y sequelize

/*HOME BANKING PARTE I 
Crear un portal permita a los usuarios registrarse e ingresar
bajo usuario y contraseña.
El portal debe tener una sección de administración asignar
dinero a cada una de las cuentas.
Los usuarios deben tener la posibilidad de hacer
transferencias entre ellos.*/

/*TAREAS Backend
Crear servidor
    -Incorporar librerias
        express
        body-parser
    -Crear requests y responses
        POST
            -Boton login


Crear tipo

NOTAS
Debe tener:
    index.html 
        -Ingresar con usuario y contraseña
        -Boton login: 
            Con un fetch se hace un POST con los datos ingresados, que luego se comparan.
            Si son correctos, tiene que devolver un 200 y permitir ingresar a main.html,
            también guardar en session storage que esta loggeado.
            Si son incorrectos, tiene que devolver 401 y mostrar un mensaje que diga 
            "ha ingresado los datos incorrectos".
        -Boton de registro (va a register.html)
        Si el usuario ya esta loggeado, que se acuerde con el local storage?
        Es relevante esta parte para un banco? o solo que se acuerde el usuario?
        
    register.html
        -Nombre, apellido, mail, usuario, contraseña (se agrega boton de repetir contraseña?)
        -Boton enviar:
            Fetch POST
                200: ok
                422: faltan datos
                400: faltan datos
        -Boton cancelar
            Vuelve a index.html

    main.html
        -Bienvenido!
        -Datos de cuentas 1, 2 y 3: saldos
        -Boton Transferir
            Va a transfer.html
        -Boton cerrar sesion
            Vuelve a index.html

    transfer.html
        -El usuario tiene que poder transferir entre sus propias cuentas, y a 
        las cuentas de terceros
        -Cuenta Origen (elegir o ingresar?)
        -Cuenta detino (ingresar)
        -Importe a transferir
        -Boton Confirmar 
            Lleva a un div con el comprobante con time stamp.
            Botones hacer otra transferencia
            Boton volver
                Vuelve a main.html loggeado
        -Boton cancelar (borra todos los campos o vuelve para atras?)
*/

/*HOME BANKING PARTE II
Objetivo
Almacenar toda la información de nuestro proyecto en una base de datos para que nuestro desarrollo sea persistente.

Planificación
Tienen 15 minutos para planificar el diseño de su base de datos.
Su modelo de base de datos debe soportar todas las acciones realizadas por los usuarios y también por los administradores

Conexión
Conectar su back-end con la base de datos.

End Points
Reemplazar cada uno de los end points para que trabajen con su base de datos.

Privilegios
No olvides verificar que solamente los usuarios que tengan el permiso correspondiente pueda realizar acciones de administración.*/
