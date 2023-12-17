const User = require("../models/users.models")

// POST
const createUser = async (req, res) => {
    const { password, password2 } = req.body;

    if (password == password2) {
        try{
            const user = req.body;
            let answer = await new User(user).save();
            res.status(201).json({message: "User created", User: answer});
    
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
}