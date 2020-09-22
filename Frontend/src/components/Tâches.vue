<template>
    <div>
        <navbar></navbar>
        <div class="row">
            <sidebar></sidebar>
            <div class="card blue lighten-5 col s12 m12">
                <div class="card-content">
                    <div class="input-field col s12 m4">
                        <i class="material-icons prefix">edit</i>
                        <input id="last_name" type="text" class="validate">
                        <label for="icon_prefix2">Entrez votre tâche</label>
                    </div>
                    <div class="input-field col s6 m3">
                        <i class="material-icons prefix">event</i>
                        <input type="text" class="datepicker">
                        <label for="icon_prefix2">Date de réalisation</label>
                    </div>
                    <div class="input-field col s6 m3">
                        <i class="material-icons prefix">access_time</i>
                        <input type="text" class="timepicker">
                        <label for="icon_prefix2">Heure de réalisation</label>
                    </div>
                </div>
                <button class="waves-effect waves-light btn pink" id="add_task"><i class="material-icons left">check</i>Ajouter</button>
            </div>
            <ul class="collection with-header">
                <li class="collection-header center"><h4>Vos tâches</h4></li>
                <li class="collection-item">
                    <div>
                        <b>Tâche 1</b><br>
                        <span><b>Le:</b> 16/01/2021 </span>
                        <span><b>À:</b> 16h50</span>
                        <a href="#!" class="secondary-content red-text">
                            <i class="material-icons small">delete</i>
                        </a>
                    </div>
                </li>
                <li class="collection-item">
                    <div>
                        <b>Tâche 1</b><br>
                        <span><b>Le:</b> 16/01/2021 </span>
                        <span><b>À:</b> 16h50</span>
                        <a href="#!" class="secondary-content red-text">
                            <i class="material-icons small">delete</i>
                        </a>
                    </div>
                </li>
                <li class="collection-item">
                    <div>
                        <b>Tâche 1</b><br>
                        <span><b>Le:</b> 16/01/2021 </span>
                        <span><b>À:</b> 16h50</span>
                        <a href="#!" class="secondary-content red-text">
                            <i class="material-icons small">delete</i>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';
    import Sidebar from './components/Sidebar';
    import jQuery from 'jquery';
    window.jQuery = jQuery;

    export default {
        name: 'tâches',
        components: {
            'navbar' : Navbar,
            'sidebar' : Sidebar
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

</style>