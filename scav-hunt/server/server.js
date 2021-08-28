const express = require("express");
const { readFileSync } = require("fs");
const path = require("path");

const app = express();
const site1 = readFileSync("site1.html","utf-8");
const site2 = readFileSync("site2.html","utf-8");
const site3 = readFileSync("site3.html","utf-8");
const site4 = readFileSync("site4.html","utf-8");
const site5 = readFileSync("site5.html","utf-8");

app.get("/",function (request,response){
    response.send(site1);
});

app.get("/robots.txt", function (request,response){
    response.send(site2)
});

app.get("/6", function (request,response){
    response.send(site3)
});

app.get("/bash", function (request,response){
    response.send(site4)
});

app.get("/htaccess", function (request,response){
    response.send(site5)
});

app.get("/bash")
app.use(express.static(path.join(__dirname,"public")));

app.listen(6969);
console.log("Listening on http://localhost:6969");



