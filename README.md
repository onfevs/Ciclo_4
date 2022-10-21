# Ciclo_4

## Iniciar 
-Primero se instala el npm install express-generator -generator
-Se crea una carpeta donde se va almacenar el proyecto de
-Se crea express proyecto_back en el cmd 
-Se ingresa a la nueva carpeta creada
-Se instala el npm install
-Se inicializa el npm start
Servidor cargado localhost:3000

En visual en una terminal dentro de la carpeta back se inicia un nuevo terminal y se instala mongoose una dependencia:

-npm install mongoose

En el proyecto back, se crea una carpeta config

- Se almacenaran las credenciales para conectar con mongoose
- Si al declarar el localhost tira error cambiarlo por 0.0.0.0 con esto se soluciona el error y deja enviar parametros desde Postman
- Se agregan las variables en la app.js

Se instala nodemon global

- npm instal -g nodemon para no inicializar cada vez el servidor.
- Se cambia en el package.json de node a nodemon.

- Se crea carpeta models
- Archivo con el nombre.model.js
- Se crean los archivos y modelos con mongoose
  
- Se crea el controlador (controllers)
- Archivo nombre.controller.js
- Estas son las funciones del crud - Create - Read - Update - Delete
  
- Se crea un archivo en la carpeta Routes
- nombre.router.js
- Se agregan las variables en el app.js

- npx create-react-app my-app (para crear un proyecto y cargue los archivos bases).
- npm start siempre para cargar el servidor local.
- this.props es para modificar elementos.

- Se prueban los metodos por medio de postman y se verifica la creacion de la base de datos en mongoDB

# Errores
- Cuando no conecte Mongo, se debe hacer inicio + r, buscar servicios, buscar mongo, e iniciarlizarlo. Ya con esto conecta la base
![image](https://user-images.githubusercontent.com/29380120/197049185-da7afbaf-8153-48e8-9ab3-c990892f0d43.png)

- Si te sigue dando error ve a la dabtabase.js y cambia el localhost por 0.0.0.0 con esto ya se soluciona el error de conexion entre mongo y postman

![photo_2022-10-21_15-47-45](https://user-images.githubusercontent.com/29380120/197287026-1c266641-084d-4a4c-99df-b0afc4302e91.jpg)

Solo cambia esta linea por el 0.0.0.0 como mencione antes y ya se te resuelve el inconveniente.

![photo_2022-10-21_15-47-49](https://user-images.githubusercontent.com/29380120/197287050-697a21b2-4cba-4678-9732-f01e2e64e07b.jpg)
