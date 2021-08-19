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
    res.send("<h1>Your order has been accepted!</h1>"
          + "<p>flag{th3_b3St_d3L1v3rY_s3Rv1c3_4r0und}</p>");
});

const server = http.createServer(app);
server.listen(PORT);
console.log(`HTTP server listening at http://localhost:${PORT}`);