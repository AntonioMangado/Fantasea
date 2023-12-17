const User = require("../models/users.models")
const jwt = require('jsonwebtoken')


// Read
const getUser = async (req, res) => {
    try {
        const username = req.params.username;
        let user = await User.find({ username: username })
        if (user.length > 0) {
            res.status(200).json(user[0]);
        } else {
            res.status(404).json([{msg: "No users found with that username"}])
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
    }


// POST
const createUser = async (req, res) => {
    const { password, password2 } = req.body;

    if (password == password2) {
        try{
            const user = req.body;
            console.log(user)
            let answer = await new User(user).save();
            const token = jwt.sign({email: user.email, username: user.username}, process.env.CLIENT_SECRET, {
                expiresIn: '60m'
            })
            //Almacenamos el token en las cookies
            res.cookie("access-token", token, {
                httpOnly: true,
                sameSite: "strict",
            })
            res.cookie("logged-email", req.body.email,{
                httpOnly: true,
                sameSite: "strict",
            })
            res.cookie("username", req.body.username,{
                httpOnly: true,
                sameSite: "strict",
            })
            
            // res.status(201).json({message: "User created", User: answer});
            res.status(201).redirect(`http://localhost:5173/home/u?user=${user.username}`);
            
        }catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(400).json({msj:`ERROR: invalid body format`});
        }
    } else {
        res.status(400).json({msg: "Error: the passwords do not match."})
    }
}

module.exports = {
    createUser,
    getUser
}