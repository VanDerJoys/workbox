<template>
    <div class="container row">
      <div class="col s12 m12">
        <div class="card horizontal">
                <div id="title" class="card-image col s12 m6">
                    <img class="col" src="../assets/undraw_web_developer_p3e5.svg" alt="">
                </div>
                <div class="card-stacked col s12 m6">
                    <div class="card-content">
                        <h4 class="center">Authentification</h4>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" v-model="login" type="text" class="validate" name="login" required>
                                <label for="icon_prefix">Nom utilisateur</label>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock</i>
                                <input id="icon_lock" v-model="password" v-bind:type="type" class="validate" name="password" required>
                                <i class="material-icons prefix" @click="toggle()" id="eye">{{visibility}}</i>
                                <label for="icon_lock">Mot de passe</label>
                            </div>
                            <button class="btn pink" @click="submit()">Envoyer <i class="material-icons right">send</i></button>
                    </div>
                    <div v-if="error" class="card-action red darken-1">
                      <span class="white-text center">
                        {{messageError}}
                      </span>
                    </div>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name : 'Login',
  data(){
    return {
      error : false,
      messageError : '',
      visibility : 'visibility_off',
      type : "password",
      login : "",
      password : ""
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
      let réponse = await axios.post('http://192.168.0.46:3000/Login', {login : this.login, password : this.password}).then((res)=>{
        return res;
      });
      if (typeof réponse.data == 'string') {
        this.error = true;
        this.messageError = réponse.data;
      }
      else{
        this.$emit('authentification', true)
      }
    }
  }
}
</script>

<style scoped>
  #eye{
    cursor: pointer;
  }
  .card-image{
        margin-top: 50px;
    }
  .card{
    padding: 5%;
    margin-top: 60px;
  }
</style>