const mysql = require('mysql');
const connection = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "workbox",
    "port" : 3308
});

class Model{
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
        connection.query(`CALL createUser('${nom}', '${prénom}', ${tel}, '${email}', '${login}', '${password}')`, (err, results)=>{
            if (err) {
                console.log(err.message);
            }
        })
    }

    getMessages(){
        return new Promise((resolve, reject)=>{
            connection.query(`CALL getMessages()`, (err, results)=>{
                if (err) {
                    reject(err.message);
                }
                resolve(results);
            })
        })
    }

    sendMessages(id, message, date, heure){
        connection.query(`CALL sendMessage(${id}, '${message}', '${date}', '${heure}')`, (err, results)=>{
            if(err){
                console.log(err.message);
            }
        })
    }

    getMembers(idEmp){
        return new Promise((resolve, reject)=>{
            connection.query(`CALL getMembers(${idEmp})`, (err, results)=>{
                if (err) {
                    reject(err.message);
                }
                resolve(results);
            })
        });
    }

    getName(idEmp){
        return new Promise((resolve, reject)=>{
            connection.query(`CALL getName(${idEmp})`, (err, results)=>{
                if (err) {
                    reject(err.message);
                }
                resolve(results);
            })
        })
    }

    createTask(task_name, date, time, idEmp){
        connection.query(`CALL createTask(${task_name}, ${date}, ${time}, ${idEmp})`, (err, results)=>{
            if (err) {
                console.log(err.message);
            }
        })
    }
    
}

module.exports = Model;