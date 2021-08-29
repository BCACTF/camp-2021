const express = require("express");

const path = require("path");

const app = express();

app.get("/",function (request,response){
    var userthing;

        userthing = `<!DOCTYPE html>
        <html>
            <head>
            </head>
            <body>
	    	<h1>Welcome to my website!</h1>
		<h2>All that's here so far are some Lipsums... right?</h2>
                <h4>Lorem ipsum dolor sit ‌‌‌‌‍‬‍‬amet, consectetur‌‌‌‌‍‬﻿‌ adipiscing elit. Fusce molestie ligula sapien.  Etiam vitae fringilla eros.‌‌‌‌‍‬‌‍ Aliquam erat volutpat. Proin ‌‌‌‌‍‬‍﻿sed posuere mauris. Aenean in‌‌‌‌‍﻿‬﻿ eros‌‌‌‌‍‬‬‌ ipsum. Maecenas sed mi ipsum‌‌‌‌‍‬‬‍. Nunc hendrerit ultricies dolor semper laoreet. Suspendisse accumsan at ‌‌‌‌‍‬‍‌quam sed eleifend. Cras bibendum ‌‌‌‌‍‬‍‌lacinia leo ac tincidunt‌‌‌‌‍‬‍‍. Nunc‌‌‌‌‍‬﻿‬ ‌‌‌‌‍‍﻿﻿tincidunt ‌‌‌‌‍‬‌﻿tincidunt leo, vitae pulvinar urna tincidunt viverra. In tempor ‌‌‌‌‍‬‬‌diam elit. Nunc ‌‌‌‌‍‬‌‍‌‌‌‌‍﻿‌‬fringilla commodo ipsum quis ‌‌‌‌‍‬‌‍‌‌‌‌‍‬‌﻿posuere.  ‌‌‌‌‍﻿‍‌Etiam et‌‌‌‌‍‬‍‍ congue arcu.‌‌‌‌‍﻿‌‬ Suspendisse pulvinar vestibulum viverra‌‌‌‌‍﻿‌﻿. Curabitur vel sodales ‌‌‌‌‍‍﻿﻿nisi. Suspendisse  tempor ‌‌‌‌‍‬‍﻿ligula‌‌‌‌‍‬﻿﻿ sed risus facilisis posuere. Vestibulum‌‌‌‌‍‍﻿﻿ ante ipsum primis‌‌‌‌‍‬‌‬ in ‌‌‌‌‍﻿‌‬faucibus orci luctus et ultrices posuere cubilia ‌‌‌‌‍﻿‌‬curae; Curabitur‌‌‌‌‍﻿‌‬ ‌‌‌‌‍‍﻿﻿at volutpat urna. Morbi ut‌‌‌‌‌﻿‬‍ metus consequat, tempor‌‌‌‌‌﻿‌‍ orci in, condimentum augue. Maecenas ‌‌‌‌‌﻿‬‌dolor mi‌‌‌‌‌﻿‍‌, mattis ‌‌‌‌‌﻿‌‬non sem maximus.‌‌‌‌‍﻿﻿‍ 
		</h4>
            </body>
        </html>`;


    response.send(userthing);
        

});

app.use(express.static(path.join(__dirname,"public")));

app.listen(1234);
console.log("Listening on http://localhost:1234");
