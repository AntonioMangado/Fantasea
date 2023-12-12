// Variables globales
require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
require('./config/db_mongo') 

// Habilito recepción de JSON en servidor.
app.use(express.json())

// Ruta de template
app.get('/', function(req, res){
    res.send('API con Mongoose');
});

// Última ruta por defecto. En caso de no encotrarse ninguna anterior, devolvemos un 404
app.get("*", (req,res) => { 
    res.status(404).send("Gatito triste - 404 not found");
})

// Escuchador de event
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })