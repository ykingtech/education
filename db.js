const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',   // Change this to your DB host
    user: 'root',        // Your MySQL username
    password: '',        // Your MySQL password
    database: 'education_platform' // Your database name
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

module.exports = db;
