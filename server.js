const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username,
        user: 'root', 
        // your mysql password
        password: '_4nmdXeTFDKQ$i)WS.',
        database: 'election'
    },
    console.log('Connected to the election database')
);

// Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

db.query('SELECT * FROM candidates', (err, rows) => {
    console.log(rows);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});