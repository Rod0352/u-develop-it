// import express
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// check connection to server
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });
// default response for any other request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});
// start express server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});