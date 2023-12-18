const User = require("../models/users.models")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


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

const logOutUser = async (req, res) => {
    //    req.session.destroy();
       res.clearCookie("logged-email");
       res.clearCookie("username");
       res.clearCookie("access-token").redirect('http://localhost:5173/login');
       console.log("User logged out")
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

// POST
const loginUser = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body
    // console.log(email)
    // console.log(password)
    try {
        let user = await User.find({ email: email })
        if (user.length > 0) {
            const hashedPassword = user[0].password
            console.log(password)
            console.log(hashedPassword)
            const match = await bcrypt.compare(password, hashedPassword)
            if (match) {
                const userForToken = {
                    username: user[0].username,
                    email: user[0].email
                }
            
                const token = jwt.sign(userForToken, process.env.CLIENT_SECRET, {expiresIn: '60m'});

                //Almacenamos el token en las cookies
                res.cookie("access-token", token, {
                    httpOnly: true,
                    sameSite: "strict",
                })
                res.cookie("logged-email", user[0].email,{
                    httpOnly: true,
                    sameSite: "strict",
                })
                res.cookie("username", user[0].username,{
                    httpOnly: true,
                    sameSite: "strict",
                })
                res.status(201).redirect(`http://localhost:5173/home/u?user=${user[0].username}`);
            } else {
                res.status(400).json({msg: "Incorrect email or password."})
            }
        } else {
            res.status(404).json([{msg: "No users found with that email"}])
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
 }

module.exports = {
    createUser,
    getUser,
    loginUser,
    logOutUser
}