const Model = require('../Modèle/model');
const CryptoJs = require('crypto-js');

class Login{
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    
    hashPassword(){
        return CryptoJs.MD5(this.password, "workbox").toString();
    };

    async logUser(){
        const db = new Model();
        //Remplacer this.password par hashedPassword
        let results =  await db.findUser(this.login, this.hashPassword()).then((result)=>{
            return result;
        }).catch((err)=>{
            console.log(err);
        });
        if (results[0][0] == undefined || results[0][0] == {} || results[0][0] == []) {
            return 'Les informations que vous avez envoyé sont incorrectes!'
        }
        else{
            return results[0][0];
        }
    }
}

module.exports = Login;