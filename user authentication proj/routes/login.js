const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const users = require('../models/user');

//Login route
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if(!username || ! password) {
      return res.status(401).json({error: 'Invalid username or password'});
    }

    const user = users.find((user) => user.username === username);
    if(!user) {
        return res.status(401).json({ error: 'Invalid username or password'});
    }

    try {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch) {
            //if passwords match, the user is authenticated
            return res.status(200).json({message: 'Login successful!' });
        } else {
            //if passwords don't match, authentication failed
            return res.status(401).json({ error: 'Invalid username or password.'});
        }
    } catch(error) {
        res.status(500).json({ error: 'Something went wrong.'});
    }

});

module.exports = router;