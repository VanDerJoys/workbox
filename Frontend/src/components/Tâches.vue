<template>
    <div>
        <div class="card blue lighten-5 col s12 m12">
                    <div class="card-content">
                        <div class="input-field col s12 m4">
                            <i class="material-icons prefix">edit</i>
                            <input id="task" type="text" class="validate" name="task" v-model="task">
                            <label for="icon_prefix2">Entrez votre tâche</label>
                        </div>
                        <div class="input-field col s12 m3">
                            <i class="material-icons prefix">event</i>
                            <input type="text" class="datepicker" name="date" v-model.lazy="date">
                            <label for="icon_prefix2">Date de réalisation</label>
                        </div>
                        <div class="input-field col s12 m3">
                            <i class="material-icons prefix">access_time</i>
                            <input type="text" class="timepicker" name="time" v-model.lazy="time">
                            <label for="icon_prefix2">Heure de réalisation</label>
                        </div>
                        <button @click="send()" class="waves-effect waves-light btn pink" id="add_task"><i class="material-icons left">check</i>Ajouter</button>
                    </div>
                </div>
                <ul class="collection with-header">
                    <li class="collection-header center"><h4>Vos tâches</h4></li>
                    <div v-if="is_task">
                        <li class="collection-item" v-bind:key="tasks" v-for="(tasks, key) in all_tasks">
                            <div>
                                <span style="font-size: 20px">{{tasks.task}}</span><br>
                                <span><b>Le:</b> {{tasks.date}} </span>
                                <span><b>À:</b> {{tasks.time}}</span>
                                <a class="secondary-content red-text">
                                    <i @click="deleteTask(key)" class="material-icons small">delete</i>
                                </a>
                            </div>
                        </li>
                    </div>
                    <li class="collection-item" v-else>
                        <div>
                            <h5 class="center">Aucune tâche n'a été planifiée</h5>
                        </div>
                    </li>
                </ul>
    </div>
</template>

<script>
    import jQuery from 'jquery';
    // import axios from 'axios';
    window.jQuery = jQuery;

    export default {
        name: 'tâches',
        data(){
            return {
                task : '',
                date : '',
                time : '',
                is_task : false,
                all_tasks : []
            }
        },
        methods: {
            send(){
                /* axios.post('http://localhost:3000/Taches/', 
                {
                    task : this.task, 
                    date : this.date, 
                    time : this.time,
                    id : this.$session.get('id')
                }); */
                this.is_task = true;
                this.all_tasks.push({task : this.task, date : this.date, time : this.time});
            },
            deleteTask(key){
                this.all_tasks.splice(key, 1);
            }
        },
        mounted(){
            jQuery('.datepicker').datepicker({
                format : 'dd/mm/yyyy'
            });

            jQuery('.timepicker').timepicker({
                twelveHour:false
            });
        }
    }
</script>

<style>
    .small:hover{
        cursor: pointer;
    }

</style>