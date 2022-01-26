const mysql = require('mysql2');
// import express
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MYsql username,
        user: 'root',
        // Your sql password
        password:'Blossom2012',
        database: 'election'
    },
    console.log('Connect to the election database.')
);
// check connection to server
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });
// query database to test connection
db.query(`SELECT * FROM candidates`,(err, rows) => {
    console.log(rows);
});
// default response for any other request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});
// start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});