const http = require('http');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const PORT = 54321;

//Create 'app' - handler for http requests
const app = express();

app.use(express.urlencoded({extended: false}));

//Middleware to handle http requests
app.use(logger('dev'));

//Middleware to handle static requests
app.use(express.static(path.join(__dirname, "/public")));

//Routes!
app.get('/', (req, res) => {
    res.sendFile("index.html");
});

app.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, "flag.html"));
});

const server = http.createServer(app);
server.listen(PORT);
console.log(`HTTP server listening at http://localhost:${PORT}`);