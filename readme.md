# Proyecto de Servicio de Autenticación en Node.js

Este proyecto es un servicio de autenticación básica en Node.js que permite el registro y la autenticación de usuarios. Utiliza PostgreSQL como base de datos y está construido utilizando el framework Express.js y el ORM Sequelize.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta el comando `npm install` para instalar todas las dependencias del proyecto.

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto.
2. Agrega las siguientes variables de entorno en el archivo `.env`:

        DB_HOST=host_de_tu_base_de_datos
        DB_PORT=puerto_de_tu_base_de_datos
        DB_NAME=nombre_de_tu_base_de_datos
        DB_USER=usuario_de_tu_base_de_datos
        DB_PASSWORD=contraseña_de_tu_base_de_datos
        JWT_SECRET=secreto_para_generar_el_token_JWT


3. Asegúrate de tener PostgreSQL instalado y configurado en tu máquina local. Crea una base de datos con el nombre especificado en `DB_NAME` en el archivo `.env`.

## Migraciones de la base de datos

1. Ejecuta el comando `npx sequelize-cli db:migrate --url "postgres://usuario:contraseña@host:puerto/nombre_de_base_de_datos"` para ejecutar las migraciones y crear las tablas en la base de datos.

## Uso

1. Ejecuta el comando `npm start` para iniciar el servidor.
2. Accede a la API en `http://localhost:3000`.

## Endpoints

- `POST /register`: Permite registrar un nuevo usuario. Debes enviar los datos del usuario en el cuerpo de la solicitud (nombre de usuario, correo electrónico y contraseña).

- `POST /login`: Permite autenticar a un usuario. Debes enviar las credenciales del usuario (nombre de usuario y contraseña) en el cuerpo de la solicitud. Si las credenciales son válidas, recibirás un token JWT que deberás incluir en las solicitudes posteriores como encabezado `Authorization Bearer`.

- `GET /welcome`: Ruta protegida que requiere un token JWT válido. Devuelve un mensaje de bienvenida al usuario autenticado.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una rama con una descripción clara de la función o corrección que deseas agregar.
3. Realiza los cambios en tu rama y realiza un commit con un mensaje descriptivo.
4. Envía un pull request explicando tus cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Puedes ver más detalles en el archivo [LICENSE](LICENSE).

## Autor

Este proyecto fue desarrollado por [Jorge Ivan Carrillo](https://github.com/Jorge-Ivan).
