<template>
    <nav class="purple darken-4 ">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo center"  v-on:click="component = 'accueil'">WorkBox</a>
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
</template>

<script>
export default {
    name : 'Navbar'
}
</script>

<style>

</style>