const Model = require('../Modèle/model');

class Members{
    async getMembers(idEnt){
        const db = new Model();
        let members = await db.getMembers(idEnt).then((results)=>{
            return results;
        }).catch((error)=>{
            return error;
        });
        return members;
    }
}

module.exports = Members;