const express = require('express');
const cookieParser = require('cookie-parser');
const path = require("path");

const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.cookie("bringCookies", "shortbread-cookies");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/cookieparty', (req, res) => {
    if (req.cookies.bringCookies === "chocolate-chip") {
        res.sendFile(path.join(__dirname, "rightcookie.html"));
    }
    else {
        res.sendFile(path.join(__dirname, "wrongcookie.html"));
    }
});

app.get('*', (req, res) => {
    res.type("html");
    res.send("Page Not Found");
});



app.listen(4200);
console.log("Listening on http://127.0.0.1:4200");