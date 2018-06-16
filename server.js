var express = require("express");

var app = express();

var server = app.listen(8008);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.post('/', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        let args = body.split('&');
        let ret = [];
        args.forEach(element => {
            ret.push(element.split('='));
        });
        console.log(ret);
        res.end('ok');
    });
})