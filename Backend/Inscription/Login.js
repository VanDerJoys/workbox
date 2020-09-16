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

        let results =  await db.findUser(this.login, hashedPassword).then((result)=>{
                return result;
        }).catch((err)=>{
            console.log(err);
        });
        
        if (results == '' || results == {} || results == []) {
            return 'Les informations que vous avez envoyé sont incorrectes! Réessayez!'
        }
        else{
            return results;
        }
    }
}

module.exports = Login;