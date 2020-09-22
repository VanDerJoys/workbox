<template>
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <div class="card">
          <div class="card-content">
            <h4 class="center">Authentification</h4>
              <div class="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input v-model="login" id="icon_prefix" type="text" class="validate" name="login">
                <label for="icon_prefix">Nom utilisateur</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">lock</i>
                <input v-model="password" id="icon_lock" v-bind:type="type" class="validate" name="password">
                <i class="material-icons prefix" @click="toggle()" id="eye">{{visibility}}</i>
                <label for="icon_lock">Mot de passe</label>
              </div>
              <button class="btn pink" @click="submit()">Envoyer</button>
          </div>
        </div>
        <div v-if="error" class="card-panel red accent-3 center">
          <span class="white-text">
            {{messageError}}
          </span>
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
</style>