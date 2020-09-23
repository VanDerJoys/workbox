<template>
    <div class="container row">
        <div class="col s12 m12">
            <div class="card horizontal">
                <div id="title" class="card-image col s12 m6">
                    <img class="col" src="../assets/undraw_web_developer_p3e5.svg" alt="">
                </div>
                <div class="card-stacked col s12 m6">
                    <div class="card-content">
                        <h4 class="center">Inscription</h4>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">person</i>
                            <input v-model="nom" id="icon_prefix" type="text" class="validate" name="nom">
                            <label for="icon_prefix">Nom</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">person</i>
                            <input v-model="prénom" id="icon_prefix" type="text" class="validate" name="prénom">
                            <label for="icon_prefix">Prénom</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">email</i>
                            <input v-model="email" id="icon_prefix" type="email" class="validate" name="email">
                            <label for="icon_prefix">Email</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">phone_android</i>
                            <input v-model="téléphone" id="icon_prefix" type="tel" class="validate" name="téléphone">
                            <label for="icon_prefix">Téléphone</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">account_circle</i>
                            <input v-model="login" id="icon_prefix" type="text" class="validate" name="login">
                            <label for="icon_prefix">Nom utilisateur</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">lock</i>
                            <input v-model="password" id="icon_lock" v-bind:type="type" class="validate" name="password">
                            <i class="material-icons prefix" @click="toggle()" id="eye">{{visibility}}</i>
                            <label for="icon_lock">Mot de passe</label>
                        </div>
                        <button class="btn pink" @click="submit()">Envoyer <i class="material-icons right">send</i></button>
                        <router-link to="/Login" class="btn purple lighten-1 right">Se connecter</router-link>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name : 'Inscription',
  data(){
    return {
      visibility : 'visibility_off',
      type : "password",
      login : "",
      password : "",
      nom : "",
      prénom : "",
      téléphone : "",
      email : ""
    }
  },
  methods:{
    toggle(){
        if (this.visibility == "visibility") {
            this.type = "password";
            this.visibility ='visibility_off';
        }
        else{
            this.type = 'text';
            this.visibility = 'visibility';
        }
    },
    async submit(){
        await axios.post('http://192.168.0.46:3000/Inscription', {
          nom : this.nom, prénom : this.prénom, email : this.email, téléphone : this.téléphone, login : this.login, password : this.password
        });
        
    }
  }
}
</script>

<style scoped>
    .card{
        margin-top: 60px;
    }

    .card-image{
        margin-top: 60px;
        opacity: 0.7;
    }
</style>