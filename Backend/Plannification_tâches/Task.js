const Model = require('../Modèle/model')
class Task{
    constructor(task_name, date, hour, idEmp){
        this.task_name = task_name;
        this.date = date;
        this.time = hour;
        this.id = idEmp;
    }

    addTask(){
        const db = new Model();
        db.createTask(this.task_name, this.date, this.time, this.id);
    }
}

module.exports = Task;