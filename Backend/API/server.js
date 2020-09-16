const cors = require('cors');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const Login = require('../Inscription/Login');
const SignUp = require('../Inscription/SignUp');

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

const urlEncodedParser = bodyParser.urlencoded({extended : false});
app.use(cors());

app.post('/Login', urlEncodedParser, (req, res)=>{
    let user = new Login(req.body.login, req.body.password);
    user.logUser().then((result)=>{
        if (typeof result == String) {
            res.send(result);
        } else {
            res.redirect("http://localhost:8080/");
        }
    });
});

app.post('/Inscription', urlEncodedParser, async (req, res)=>{
    let newUser = new SignUp(
        req.body.nom,
        req.body.prénom,
        req.body.téléphone,
        req.body.email,
        req.body.login,
        req.body.password);
    newUser.signUp();
})

server.listen(3000, function(){
    console.log('Listenning on port 8080...');
});