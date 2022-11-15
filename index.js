var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {

    // //asyc
    // if (req.url = '/') {
    //     fs.readFile('Home.html', function (error, data) {
    //         res.writeHead(200, { 'content-type': 'text/html' });
    //         res.write(data);
    //         res.end();
    //     })
    // }


    //sync
    if (req.url == '/') {
        let mydata = fs.readFileSync('home.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(mydata);
        res.end();
    } else if (req.url == '/Contact') {
        let mydata = fs.readFileSync('contact.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(mydata);
        res.end();
    } else if (req.url == '/About') {
        let mydata = fs.readFileSync('about.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(mydata);
        res.end();
    } else if (req.url == '/Terms') {
        let mydata = fs.readFileSync('terms.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(mydata);
        res.end();
    }


})
server.listen(4040);
console.log('Welcome to our server');