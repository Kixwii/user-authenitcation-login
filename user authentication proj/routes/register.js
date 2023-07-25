const express = require('express');
const router = express.Router();
const users = require('../models/user');


//Registeration route
router.post('/',async (req,res) =>{
    const { username, password, email} = req.body;

    if(!username || !password || !email){ 
        return res.status(400).json({error: 'All fields are required.'});
    }

    const existingUser = users.find((user) => user.username === username);
    if(existingUser) {
        return res.stautus(409).json({error: 'Username already exists.'});
    }
    
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
            id: users.length + 1,
            username,
            password: hashedPassword,
            email,
        };
    
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error: 'Something went wrong.'});
    }

});

module.exports = router;