const cors = require('cors');
const session = require('express-session');
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
const Horaires = require('../Gest_horaire/date_heure');

app.use(session({
    secret: 'azerty',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const urlEncodedParser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.json())
app.use(cors());

io.on('connection', socket => {
    socket.join(req.session.id_entreprise);
    socket.on('send-message', (data)=>{
        let messages = new Messages();
        messages.sendMessage(req.session.id_employé, req.body.msg);
        socket.to(req.session.id_entreprise).broadcast.emit(data);
    })
    // socket.on('join-room', () => {
    //   socket.join(roomId)
    //   socket.to(roomId).broadcast.emit('user-connected', userId)
  
    //   socket.on('disconnect', () => {
    //     socket.to(roomId).broadcast.emit('user-disconnected', userId)
    //   })
    // })
})

app.post('/Login', async(req, res)=>{
    let user = new Login(req.body.login, req.body.password);
    let infoUser =  await user.logUser().then((result)=>{
        return result
    }).catch((error)=>{
        console.log(error);
    })
    
    if (typeof infoUser == 'string') {
        res.send(infoUser);
    }
    else{
        res.json(infoUser);
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

// get messages
app.get('/messages', async(req, res)=>{
    let messages = new Messages();
    let msg = await messages.getMessages().then((results)=>{
        return results;
    }).catch((error)=>{
        console.log(error);
    })
    res.send(msg)
})

app.get('/', async(req, res)=>{
    let members = new Members();
    let mbrs = await members.getMembers(req.session.id_entreprise).then((results)=>{
        return results;
    }).catch((error)=>{
        console.log(error);
    });
    res.send(mbrs);
})

server.listen(3000, function(){
    console.log('Listenning on port 3000...');
});