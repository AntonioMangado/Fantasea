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
    const { pwd, pwd2 } = req.body;
    console.log(req.body)
    if (pwd == pwd2) {
        try{
            const user = req.body;
            console.log(user)
            let answer = await new User(user).save();
            console.log(answer)
            const token = jwt.sign({email: user.email, username: user.username}, process.env.CLIENT_SECRET, {
                expiresIn: '60m'
            })
            //Almacenamos el token en las cookies
            res.cookie("access-token", token, {
                httpOnly: true,
                sameSite: "strict",
            })
            res.cookie("logged-email", answer.email,{
                httpOnly: true,
                sameSite: "strict",
            })
            res.cookie("username", answer.username,{
                httpOnly: true,
                sameSite: "strict",
            })
            
            // res.status(201).json({message: "User created", User: answer});
            res.status(201).json({
                msg: "User registered",
                username: answer.username,
                email: answer.email,
                accessToken: token
            });
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
            // if (error.includes("E11000")) {
                res.status(409).send({msj:`Username or email already in use.`});
            // } else {
            //     res.status(400).send({msj:`ERROR: invalid body format`});
            // }
        }
    } else {
        res.status(400).json({msg: "Error: the passwords do not match."})
    }
}

// POST
const loginUser = async (req, res) => {
    console.log(req.body);
    const {email, pwd} = req.body
    // console.log(email)
    // console.log(password)
    try {
        let user = await User.find({ email: email })
        if (user.length > 0) {
            const hashedPassword = user[0].pwd
            console.log(pwd)
            console.log(hashedPassword)
            const match = await bcrypt.compare(pwd, hashedPassword)
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
                res.status(201).json({ username: user[0].username, email: user[0].email, accessToken: token });
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

// Update
const updateUserList = async (req, res) => {
try {
    const username = req.params.username; //Nombre del usuario logueado
    const data = req.body; //Columna a editar y nombre del libro
    // console.log(username);
    // console.log(req.body)
    if (req.body.read) {
        const bookTitle = data.read
        let user = await User.find({ username: username })
        if (user != null) {
            await User.updateOne(
                {username: username}, 
                { $push: {read: bookTitle}},
                );
            console.log("Book stored in read list")
            res.status(200).json({msg: "Book stored"})
            }
    } else if (req.body.toread) {
        const bookTitle = data.toread
        let user = await User.find({ username: username })
        if (user != null) {
            await User.updateOne(
                {username: username}, 
                { $push: {toread: bookTitle}},
                );
            console.log("Book stored in toread list")
            res.status(200).json({msg: "Book stored"})}
    
    } else if (req.body.reading) {
        const bookTitle = data.reading
        let user = await User.find({ username: username })
        if (user != null) {
            await User.updateOne(
                {username: username}, 
                { $push: {reading: bookTitle}},
                );
            console.log("Book stored in reading list")
            res.status(200).json({msg: "Book stored"})
            }}
    }
catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({msj:`ERROR: invalid body format`});
}
}

module.exports = {
    createUser,
    getUser,
    updateUserList,
    loginUser,
    logOutUser
}