const cors = require('cors');
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const io = socketio(server);
const cookieParser = require('cookie-parser');

const Login = require('../Inscription/Login');
const SignUp = require('../Inscription/SignUp');
const Messages = require('../Gest_messages/Gest_messages');
const Members = require('../Gest_compte/Members');
const Task = require('../Plannification_tâches/Task');

app.use(cookieParser());

const urlEncodedParser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.json())
app.use(cors());

io.on('connection', function(socket) {
    let msg = new Messages();
    socket.join('workbox');
    socket.once('message', (data)=>{
        socket.to('workbox').emit('get-message', data.message);
        msg.sendMessage(parseInt(data.id), data.message);
    })
});

app.post('/Taches', urlEncodedParser, (req, res)=>{
    const task = new Task(req.body.task, req.body.date, req.body.time, req.body.id);
    task.addTask();
})

app.post('/Login', urlEncodedParser, async(req, res)=>{
    let user = new Login(req.body.login, req.body.password);
    let info_user =  await user.logUser().then((result)=>{
        return result
    }).catch((error)=>{
        console.log(error);
    })
    if (typeof info_user == 'string') {
        res.send(info_user);
    }
    else{
        res.send(info_user);
    }
});

app.post('/Inscription', urlEncodedParser, (req, res)=>{
    let new_user = new SignUp(
        req.body.nom,
        req.body.prénom,
        req.body.téléphone,
        req.body.email,
        req.body.login,
        req.body.password);
    new_user.signUp();
    res.redirect('http://localhost:8080/Login')
});

// get messages
app.get('/messages', async(req, res)=>{
    let messages = new Messages();
    let msg = await messages.getMessages();
    res.send(msg)
})

app.get('/Workbox/:id', async(req, res)=>{
    let members = new Members();
    let mbrs = await members.getMembers(req.params.id).then((results)=>{
        return results;
    }).catch((error)=>{
        console.log(error);
    });
    let name = await members.getName(req.params.id).then((results)=>{
        return results;
    }).catch((error)=>{
        console.log(error);
    })
    res.send({mbrs, name});
});

server.listen(3000, function(){
    console.log('Listenning on port 3000...');
});