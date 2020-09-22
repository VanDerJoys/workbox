const Model = require('../Modèle/model');
const bcrypt = require('bcrypt');

class Login{
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    
    hashPassword(){
        return new Promise((resolve, reject)=>{
            bcrypt.hash(this.password, 10, (err, hash)=>{
                if (err) {
                    reject(err.message);
                }
                resolve(hash);
            })
        })
    };

    async logUser(){
        const db = new Model();
        let hashedPassword = await this.hashPassword().then((hash)=>{
            return hash;
        });
        //Remplacer this.password par hashedPassword
        let results =  await db.findUser(this.login, this.password).then((result)=>{
            return result;
        }).catch((err)=>{
            console.log(err);
        });
        
        if (results[0][0] == undefined || results[0][0] == {} || results[0][0] == []) {
            return 'Les informations que vous avez envoyé sont incorrectes!'
        }
        else{
            return results[0][0].id_compte;
        }
    }
}

module.exports = Login;