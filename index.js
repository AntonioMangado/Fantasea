// Variables globales
require("dotenv").config();
require('./config/db_mongo') 
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const bookRoutes = require('./routes/books.routes')


// Para evitar problemas de CORS (Cross-Origin Resource Sharing)
// Añado un middleWare que permite consultas desde orígines de terceros
// ...
app.use(cors());

// Habilito recepción de JSON en servidor.
app.use(express.json())

// Ruta de template
app.get('/', function(req, res){
    res.send('API con Mongoose');
});

// Rutas
app.use('/', bookRoutes)

// Última ruta por defecto. En caso de no encotrarse ninguna anterior, devolvemos un 404
app.get("*", (req,res) => { 
    res.status(404).send("Gatito triste - 404 not found");
})

// Escuchador de event
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })