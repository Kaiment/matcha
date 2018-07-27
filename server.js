const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const pug = require("pug");

const index = require(__dirname + "/routes/index");

const app = express();

app.use(bodyParser.urlencoded( { extended : true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "pug");

var server = app.listen(8008);

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', () => {
    console.log('connection successful');
})

app.use('/', index);
/* app.post('/', (req, res) => {
    let User = db.model('users');
    let new_user = new User({
        email: req.body['email'],
        name: req.body['name'],
        surname: req.body['surname'],
        login: req.body['login'],
        password: req.body['password']
    });
    new_user.save( err => {
        if (err) {
            res.send('error');
            return console.error(err);
        }
    });
    res.send('success');
}); */