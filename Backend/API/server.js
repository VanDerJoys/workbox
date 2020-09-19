const cors = require('cors');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const io = socketio(server);
const Login = require('../Inscription/Login');
const SignUp = require('../Inscription/SignUp');
const Messages = require('../Gest_messages/Gest_messages');
const Id = require('../Connections/conn');
const Members = require('../Gest_compte/Members');

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

const urlEncodedParser = bodyParser.urlencoded({extended : false});
app.use(cors());

io.on('connection', socket => {

    socket.on('join-room', () => {
      socket.join(roomId)
      socket.to(roomId).broadcast.emit('user-connected', userId)
  
      socket.on('disconnect', () => {
        socket.to(roomId).broadcast.emit('user-disconnected', userId)
      })
    })
})

app.post('/Login', urlEncodedParser, async(req, res)=>{
    let user = new Login(req.body.login, req.body.password);
    let infoUser =  await user.logUser().then((result)=>{
        return result;
    });
    if (infoUser == '' || infoUser == {} || infoUser == []) {
        res.send(infoUser);
    }
    else{
        req.session = infoUser;
        res.redirect('http://localhost:8080');
        // res.send(infoUser);
    }
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
    res.end(200);
});

//send messages
app.post('/messages', urlEncodedParser, async(req, res)=>{
    let messages = new Messages();
    messages.sendMessage(req.session.id)
    res.status(200).end();
});

// get messages
app.get('/messages', (req, res)=>{
    let messages = new Messages();
    let msg = await messages.getMessages().then((results)=>{
        return results;
    });
    res.send(msg)
})

app.get('/', async(req, res)=>{
    let members = new Members();
    let mbrs = await members.getMembers(req.session.id_entreprise).then((results)=>{
        return results;
    }).catch((error)=>{
        return error;
    });
    res.send(mbrs);
})

server.listen(3000, function(){
    console.log('Listenning on port 3000...');
});