const Model = require('../Modèle/model');

class Connections{
    getId(idEmp){
        let db = new Model();
        db.findUser();
    }
}

module.exports = Connections;