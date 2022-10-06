//invocando a expres
const express = require("express");

//importar nuestra base de datos

const conectarDB = require('./config/db');

//creamos nuestro servidor
const app = express();

//madlede

app.use(express.json());

conectarDB()

//rutas principal

app.use("/api/products", require("./routers/Product"));


//escucahando nuestro servidor

app.listen(4000, () => {
  console.log("hola");
});
