<template>
    <div>
        <nav class="purple darken-4 ">
            <div class="nav-wrapper">
                <a href="/Workbox" class="brand-logo center"  v-on:click="component = 'accueil'">WorkBox</a>
                <a href="#" data-target="slide-out" class="sidenav-trigger left show-on-large"><i class="material-icons">menu</i></a>  
                <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">more_vert</i></a>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <a class="pink btn-floating tooltipped" data-position="bottom" data-tooltip="Discussions" v-on:click="component = 'discussions'">
                    <i class="material-icons">chat</i>
                    </a>
                </li>
                <li>
                    <a class="pink btn-floating tooltipped dropdown-trigger" data-target='dropdown1' data-position="bottom" data-tooltip="Notifications">
                    
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
                    <a class="pink btn-floating tooltipped" data-position="bottom" data-tooltip="Annonces" v-on:click="component = 'annonces'">
                    <i class="material-icons">style</i>
                    </a>
                </li>
                <li>
                    <a class="pink btn-floating tooltipped" data-position="bottom" data-tooltip="Tâches" v-on:click="component = 'tâches'">
                    <i class="material-icons">assignment</i>
                    </a>
                </li>
                </ul>
                <ul class="sidenav" id="mobile-demo">
                    <li><a class="pink btn white-text" v-on:click="component = 'discussions'"><i class="material-icons">chat</i> Discussions</a></li>
                    <li><a class="pink btn white-text" v-on:click="component = 'annonces'"><i class="material-icons">style</i> Annonces</a></li>
                    <li><a class="pink btn white-text" v-on:click="component = 'notifications'"><i class="material-icons">notifications</i> Notifications</a></li>
                    <li><a class="pink btn white-text" v-on:click="component = 'tâches'"><i class="material-icons">assignment</i>Tâches</a></li>
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
                        <span class="dark-text name flow-text">{{nom}} {{prénom}}</span>
                        <!-- <span class="dark-text email">WhiteBoard</span> -->
                        </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">location_city</i>Entreprise</a></li>
                    <li><router-link to="/Réunions"><i class="material-icons">voice_chat</i>Réunions</router-link></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Membres</a></li>
                    <div v-if="MembresTrouvés">
                        <div v-bind:key="membre" v-for="membre in membres">
                            <li><a href="#!"><i class="material-icons">person</i>{{membre.nom}} {{membre.prenom}}</a></li>
                        </div>                        
                    </div>
                    <div v-else>
                        <li><a class="subheader"><b>{{membres}}</b></a></li>
                    </div>
                    <li><a href="#!"></a></li>
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
    import axios from 'axios';
    export default {
        name: 'Workbox',
        data(){
            return{
                component : 'accueil',
                membres : undefined,
                membresTrouvés: false,
                nom : '',
                prénom : ''
            }
        },
        components: {
            'discussions' : Discussions,
            'accueil' : Accueil,
            'annonces' : Annonces,
            'tâches' : Tâches
        },
        mounted: async function(){
            let members = await axios.get(`http://localhost:3000${window.location.pathname}`);
            this.nom = members.data.name[0][0].nom;
            this.prénom = members.data.name[0][0].Prenom;
            if (members.data.mbrs[0].length == 0) {
                this.membresTrouvés = false;
                this.membres = "Aucun membre trouvé";
            }
            else{
                this.membresTrouvés = true;
                this.membres = members.data.mbrs[0];
            }
        }
    }
</script>

<style>

</style>