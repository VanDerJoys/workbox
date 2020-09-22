<template>
  <div>
    <div v-if="authSuccess" class="container" style="margin-top : 5%;">
      <login v-on:authentification="auth(data)"></login>
    </div>
    <div v-else>
      <div class="row">
        <!-- home page, chat, announcement, notifications and tasks start -->
        <div class="col s12 m9">
          <component v-bind:is="component"></component>
        </div>
        <!-- home page, chat, announcement, notifications and tasks end -->
      </div>
    </div>
  </div>
</template>

<script>
  import jQuery from 'jquery';
  window.jQuery = jQuery;
  
  import Accueil from './components/Accueil';
  import Discussions from './components/Discussions';
  import Annonces from './components/Annonces';
  import Tâches from './components/Tâches';
  import Login from './components/Login';

  export default {
    name: 'App',
    data(){
      return{
        component : 'accueil',
        authSuccess : true
      }
    },
    components: {
      'discussions' : Discussions,
      'accueil' : Accueil,
      'annonces' : Annonces,
      'tâches' : Tâches,
      'login' : Login
    }, 
    mounted(){
      this.$nextTick(function(){
        jQuery('.sidenav').sidenav();
        jQuery('.tooltipped').tooltip();
        jQuery('.dropdown-trigger').dropdown({'constrainWidth': false, 'coverTrigger' : false, 'alignment':'right'});
      })
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
