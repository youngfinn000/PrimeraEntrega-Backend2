# Primera Entrega

Este proyecto es una aplicación de autenticación y gestión de usuarios utilizando Node.js, Express, MongoDB y Passport.js.

## Requisitos

- Node.js
- MongoDB

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd primera-entrega
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Configuración

1. Crea un archivo [.env](http://_vscodecontentref_/0) en el directorio [db](http://_vscodecontentref_/1) con el siguiente contenido:
    ```env
    JWT_SECRET=your_jwt_secret
    MONGODB_URI=mongodb://localhost:27017/ecommerce
    ```

## Estructura del Proyecto

- [config](http://_vscodecontentref_/2)
  - [jwt.js](http://_vscodecontentref_/3): Configuración de estrategias de autenticación JWT para Passport.js.
  - [passport.js](http://_vscodecontentref_/4): Función para inicializar estrategias de Passport.js.

- [db](http://_vscodecontentref_/5)
  - [.env](http://_vscodecontentref_/6): Archivo de configuración de variables de entorno.
  - [mongo.js](http://_vscodecontentref_/7): Conexión a la base de datos MongoDB.

- [models](http://_vscodecontentref_/8)
  - [user.js](http://_vscodecontentref_/9): Modelo de usuario utilizando Mongoose.

- [routes](http://_vscodecontentref_/10)
  - [auth.js](http://_vscodecontentref_/11): Rutas de autenticación (login y obtener usuario actual).

- [services](http://_vscodecontentref_/12)
  - [userServices.js](http://_vscodecontentref_/13): Servicios relacionados con los usuarios (registro, login, obtención de usuarios por email o ID).

- [server.js](http://_vscodecontentref_/14): Archivo principal del servidor Express.

## Uso

1. Inicia el servidor:
    ```sh
    npm start
    ```
2. El servidor estará corriendo en `http://localhost:8080`.

## Endpoints

- `POST /auth/login`: Inicia sesión con email y contraseña.
- `GET /auth/current`: Obtiene el usuario actual autenticado.

## Dependencias

- [bcrypt](http://_vscodecontentref_/15): Para el hash de contraseñas.
- [cookie-parser](http://_vscodecontentref_/16): Para parsear cookies.
- [express](http://_vscodecontentref_/17): Framework web para Node.js.
- `jsonwebtoken`: Para generar y verificar tokens JWT.
- [mongoose](http://_vscodecontentref_/18): ODM para MongoDB.
- [passport](http://_vscodecontentref_/19): Middleware de autenticación.
- [passport-jwt](http://_vscodecontentref_/20): Estrategia JWT para Passport.js.

## Licencia

ISC