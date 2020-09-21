const Model = require("../Modèle/model");
const Horaires = require('../Gest_horaire/date_heure');

class Messages{
    async getMessages(){
        let db = new Model();
        let messages = await db.getMessages().then((msg)=>{
            return msg;
        }).catch((error)=>{
            console.log(error);
        })
        return messages;
    }

    sendMessage(id, message){
        let horaire = new Horaires();
        let date_heure = horaire.getDateHour();
        let db = new Model();
        db.sendMessages(id, message, date_heure.date, date_heure.heure);
    }
}

module.exports = Messages;
