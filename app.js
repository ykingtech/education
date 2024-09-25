const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('./db');  // Import the DB connection

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).send('Error creating user');
        }
        res.send('User registered successfully!');
    });
});
