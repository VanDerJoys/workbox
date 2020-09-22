<template>
    <div>
        <nav class="purple darken-4 ">
            <div class="nav-wrapper">
                <a href="/Workbox" class="brand-logo center"  v-on:click="component = 'accueil'">WorkBox</a>
                <a href="#" data-target="slide-out" class="sidenav-trigger left show-on-large"><i class="material-icons">menu</i></a>  
                <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">more_vert</i></a>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <a href="#discussions" class="pink btn-floating tooltipped" data-position="bottom" data-tooltip="Discussions" v-on:click="component = 'discussions'">
                    <i class="material-icons">chat</i>
                    </a>
                </li>
                <li>
                    <a href="#" class="pink btn-floating tooltipped dropdown-trigger" data-target='dropdown1' data-position="bottom" data-tooltip="Notifications">
                    
                    <i class="material-icons">notifications</i>
                    </a>
                </li>
                <ul id='dropdown1' class='dropdown-content col s12'>
                        <li><a href="#!">Notification 1</a></li>
                        <li><a href="#!">Notification 1</a></li>
                        <li class="divider" tabindex="-1"></li>
                        <li><a href="#!"><i class="material-icons">view_module</i>Notification 1</a></li>
                        <li><a href="#!"><i class="material-icons">cloud</i>Notification 1</a></li>
                    </ul>
                <li>
                    <a href="#annonces" class="pink btn-floating tooltipped" data-position="bottom" data-tooltip="Annonces" v-on:click="component = 'annonces'">
                    <i class="material-icons">style</i>
                    </a>
                </li>
                <li>
                    <a href="#tâches" class="pink btn-floating tooltipped" data-position="bottom" data-tooltip="Tâches" v-on:click="component = 'tâches'">
                    <i class="material-icons">assignment</i>
                    </a>
                </li>
                </ul>
                <ul class="sidenav" id="mobile-demo">
                <li><a href="#" class="pink btn white-text" v-on:click="component = 'discussions'"><i class="material-icons">chat</i> Discussions</a></li>
                <li><a href="#" class="pink btn white-text" v-on:click="component = 'annonces'"><i class="material-icons">style</i> Annonces</a></li>
                <li><a href="#" class="pink btn white-text" v-on:click="component = 'notifications'"><i class="material-icons">notifications</i> Notifications</a></li>
                <li><a href="#" class="pink btn white-text" v-on:click="component = 'tâches'"><i class="material-icons">assignment</i>Tâches</a></li>
                </ul>
            </div>
        </nav>
        <div class="row">
            <div class="col s3">
                <ul id="slide-out" class="sidenav sidenav-fixed">
                    <li>
                        <div class="user-view">
                        <div class="background">
                            <img src="../assets/sweets-2.jpeg">
                        </div>
                        <a href="#user"><img class="circle" src="../assets/lady.jpg"></a>
                        <span class="dark-text name flow-text">Charlie Dan</span>
                        <span class="dark-text email">WhiteBoard Enterprise</span>
                        </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">location_city</i>Entreprise</a></li>
                    <li><a href="#!"><i class="material-icons">voice_chat</i>Réunions</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Membres</a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Yvette Ayinda<i class="material-icons teal-text text-accent-4 small right">supervisor_account</i></a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Ohrel Ze</a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Vanelle Audrey</a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Tierno Gilles<i class="material-icons teal-text text-accent-4 right">work</i></a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Julienne Nnanga</a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Marcel Zoa</a></li>
                    <li><a href="#!"><i class="material-icons">person</i>Charlotte Mendana</a></li>
                </ul>
            </div>
            <div class="col s12 m9">
                <component v-bind:is="component"></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Accueil from './Accueil';
    import Discussions from './Discussions';
    import Annonces from './Annonces';
    import Tâches from './Tâches';
    export default {
        name: 'Workbox',
        data(){
            return{
                component : 'accueil'
            }
        },
        components: {
            'discussions' : Discussions,
            'accueil' : Accueil,
            'annonces' : Annonces,
            'tâches' : Tâches
        }
    }
</script>

<style>

</style>