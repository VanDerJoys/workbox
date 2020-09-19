/* const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);
const Model = require("../Modèle/model"); */

const Model = require("../Modèle/model");

class Messages{
    async getMessages(){
        let db = new Model();
        let messages = await db.getMessages().then((msg)=>{
            return msg;
        });
        return messages;
    }

    sendMessage(id, date, heure, message){
        let db = new Model();
        db.sendMessages(id, message, date, heure);
    }
}

module.exports = Messages;
