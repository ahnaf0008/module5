let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write("This is Home page");
        res.end();
    }
    if (req.url === '/about') {
        res.write("This is About page");
        res.end();
    }
    if (req.url === '/contact') {
        res.write("This is Contact page");
        res.end();
    }

    if(req.url === '/file-write'){
        fs.writeFile('demo.txt','Hello World',function (error){
            if(error){
                res.write("File write has been failed");
                res.end();
            }else{
                res.write("File write has been successful");
                res.end();
            }
        })
    }
});

server.listen(3000, function () {
    console.log('Success');
});
