const User = require('../Modèle/model');
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

    logUser(){
        const user = new User();
        let results =  user.findUser(this.login, this.password).then((result)=>{
                return result;
        }).catch((err)=>{
            console.log(err);
        });
    }
}

module.exports = Login;