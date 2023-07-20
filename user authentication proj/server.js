const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//store users in an array
let users = [];

//Route for user registeration
app.post('/register', (req, res) =>{
    const {username, password, email } = req.body;

    //checkk if username or email exists
    if(users.some(user => username === username)) {
        return res.status(400).json({ message: 'Username already exists '});
    }

    if(users.some(user => user.email === email)){
        return res.status(400).json({ message: 'Email already exists'});
    }

    //Create the new user object
    const newUser = {
        username, 
        passord: hashedPassword,
        email
    };

    //store the new user
    users.push(newUser);

    return res.status(201).json({ message: 'User registered successfully' });
});

//start the server
app.listen(3000, () =>{
    console.log('Server started onn port 3000');
});