const mysql = require('mysql');
const connection = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "workbox"
});

class Model{
    /* startConnection(){
        connection.connect((err)=>{
            if (err) {
                console.log(err.message);
            }
            console.log("connected");
        })
    } */

    /* endConnection(){
        connection.end((err)=>{
            if (err) {
                console.log(err.message);
            }
            console.log("ended");
        })
    } */

    findUser(login, password){
        return new Promise((resolve, reject)=>{
            connection.query(`CALL findUser('${login}', '${password}');`, (err, results)=>{
                if (err) {
                    reject(err.message);
                }
                else{
                    resolve(results);
                } 
            });    
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

    sendMessages(id, message, date, heure){
        this.startConnection();
        connection.query(`CALL sendMessages(${id}, '${message}', '${date}', '${heure}')`, (err, results)=>{
            if(err){
                console.log(err.message);
            }
        })
        this.endConnection();
    }

    getMembers(idEnt){
        return new Promise((resolve, reject)=>{
            this.startConnection();
            connection.query(`CALL getMessages(${idEnt})`, (err, results)=>{
                if (err) {
                    reject(err.message);
                }
                resolve(results);
            })
            this.endConnection();
        });
    }
    
}

module.exports = Model;