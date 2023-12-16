const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB
const bcrypt = require('bcrypt') 

const objectSchema = {
    username: { 
        type: String, 
        required: true,
        unique: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true 
    },
    password: { 
        type: String, 
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
                }º
            }, 
            message: "Only .jpg and .png formats allowed."
        }
    },
    toread:{
        type: [String],
    },
    read:{
        type: [String],
    },
    reading:{
        type: [String],
    }

};

// Crear el esquema
const userSchema = mongoose.Schema(objectSchema);

// Pre middleware para hashear la password                                                                                                                                                                         
userSchema.pre('save', function(next) {                                                                                                                                        
    if (this.password) {                                                                                                                                                        
        let salt = bcrypt.genSaltSync(8)                                                                                                                                     
        this.password = bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
}) 

// Crear el modelo --> Colección
const User = mongoose.model('User', userSchema);

module.exports = User;

// Insertar un user de prueba

// const u = new User({
//     username: "Maria",
//     email: "usersinarray@gmail.com",
//     password: "password123",
//     image:"https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
// });

// User.deleteMany()
//     .then(function(){
//         console.log("Data deleted"); // Success
//     }).catch(function(error){
//         console.log(error); // Failure
//     });

// u.save()
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))