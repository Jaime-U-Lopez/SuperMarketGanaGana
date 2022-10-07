//invocando a expres
const express = require("express");
const cors = require("cors")


//importar nuestra base de datos

const conectarDB = require('./config/db');

//creamos nuestro servidor
const app = express();

//madlede

app.use(express.json());
app.use(cors())


conectarDB()

//rutas principal

app.use("/api/products", require("./routers/Product"));


//escucahando nuestro servidor

app.listen(4000, () => {
  console.log("hola");
});
