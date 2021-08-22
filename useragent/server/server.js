const express = require("express");
const { readFileSync } = require("fs");
const path = require("path");

const app = express();
const flag = readFileSync("flag.txt", "utf-8");

app.get("/",function (request,response){
    const agent = request.get("User-Agent");
    var userthing;

    if (/ctfbrowser/.test(agent.toLowerCase())) {
        userthing = `<!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
                <h1>Welcome to the CAMPCTF Flag Storage Center Official Website (tm)</h1>
                <img src="gerald.PNG" alt="agent gerald" style="width: 50%"></img>
                   <h4> Welcome! Here is your flag: ${flag} </h4>
            </body>
        </html>`;

    } else {
        userthing = `<!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
                <h1>Welcome to the Camp CTF Flag Storage</h1>
                <img src="gerald.PNG" alt="agent gerald" style="width: 50%"></img>
                <h2>To get access to a flag, you must be a member of the CAMPCTF organization
                and access this website through our special organiziation browser.</h2>
                
            </body>
        </html>`;
    }

    response.send(userthing);
        

});

app.use(express.static(path.join(__dirname,"public")));

app.listen(1134);
console.log("Listening on http://localhost:1134");



