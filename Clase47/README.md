# practica-jwt

Practica de JSON WEB TOKEN

1. Crear una API
Crear una API que contenga un método para agregar usuarios.
Cada usuario debe tener la siguiente información:
ID
Nombre
Apellido
Email
Contraseña
Almacenar cada usuario en un array.

2. Editar la información
Crear un nuevo método que permita editar la información previamente almacenada.
Encontrar el usuario a editar a través de su email.

3. Agregar una nueva propiedad
Generar un nuevo método que permita agregar una nueva propiedad a nuestro usuarios.
La nueva propiedad es:
es_admin (true / false)
Si la propiedad no existe para un usuario, crearla.
Si la propiedad existe para un usuario, editarla.

4. Log in
Generar un nuevo método que permita loguear un usuario validando su contraseña.
Crear el JWT.

5. Acceso específico
Generar un último método que liste todos los usuarios que hay en nuestro array.
Solo usuarios administradores pueden acceder a este método.
