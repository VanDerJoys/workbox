<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
  import jQuery from 'jquery';
  window.jQuery = jQuery;

  export default {
    name: 'App',
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
}
</style>
