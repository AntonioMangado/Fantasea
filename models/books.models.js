const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true,
        unique: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    genre: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    year: { 
        type: Number,
        required: true 
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Only .jpg and .png formats allowed."
        }
    }
};

// Crear el esquema
const bookSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

// Insertar un libro de prueba

const p = new Book({
    id: 1,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    genre: "Medieval Fantasy",
    description: "Don Quixote, or The Ingenius Gentleman Don Quixote of La Mancha, written by Miguel de Cervantes Saavedra, is a novel about a man with questionable sanity who goes on a series of quests to become a knight, accompanied by his 'squire', Sancho.",
    year: 1605,
    image:"https://m.media-amazon.com/images/I/41RrI0dPBBL.jpg"
});

// // Borrar y Guardar en la BBDD

// Book.deleteMany()
//     .then(function(){
//         console.log("Data deleted"); // Success
//     }).catch(function(error){
//         console.log(error); // Failure
//     });
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err));