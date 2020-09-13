const cors = require('cors');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const mysql = require("mysql");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../Modèle/model')

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

const urlEncodedParser = bodyParser.urlencoded({extended : false});
app.use(cors());

app.get('/', async(req, res)=>{
    let user = new User();
    let identifiants = {
        login : "login",
        password : "password"
    };
   let results = await user.findUser(identifiants).then((result)=>{
        return result;
   }).catch((err)=>{
       console.log(err);
   })

   console.log(results);
    res.send('ok');
})

server.listen(3000, function(){
    console.log('Listenning on port 8080...');
});