const Model = require('../Modèle/model');

class Members{
    async getMembers(idEmp){
        const db = new Model();
        let members = await db.getMembers(idEmp).then((results)=>{
            return results;
        }).catch((error)=>{
            return error;
        });
        return members;
    }

    async getName(idEmp){
        const db = new Model();
        let name = await db.getName(idEmp).then((results)=>{
            return results;
        }).catch((error)=>{
            return error;
        })
        return name;
    }
}

module.exports = Members;