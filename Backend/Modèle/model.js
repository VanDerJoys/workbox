const mysql = require('mysql');
const connection = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "workbox"
});

class Model{
    startConnection(){
        connection.connect((err)=>{
            if (err) {
                console.log(err.message);
            }
            console.log("Connected");
        })
    }

    endConnection(){
        connection.end((err)=>{
            if (err) {
                console.log(err.message);
            }
        })
    }

    findUser(login, password){
        return new Promise((resolve, reject)=>{
            this.startConnection();
            connection.query(`CALL findUser('${login}', '${password}');`, (err, results)=>{
                if (err) {
                    reject(err.message);
                }
                else{
                    resolve(results);
                } 
            });    
            this.endConnection();
        })   
    }

    insertUser(nom, prénom, tel, email, login, password){
        this.startConnection();
        connection.query(`CALL createUser('${nom}', '${prénom}', ${tel}, '${email}', '${login}', '${password}')`, (err, results)=>{
            if (err) {
                console.log(err.message);
            }
        })
        this.endConnection();
    }

    getMessages(){
        return new Promise((resolve, reject)=>{
            this.startConnection();
            connection.query(`CALL getMessages()`, (err, results)=>{
                if (err) {
                    reject(err.message);
                }
                resolve(results);
            })
            this.endConnection();
        })
    }
}

module.exports = Model;