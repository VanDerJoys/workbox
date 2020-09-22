<template>
    <div>
        <navbar></navbar>
        <div class="row">
            <sidebar></sidebar>
            <h4 class="flow-text center-align">Bienvenu(e) Charlie Dan. Le travail vous attend!</h4>
            <p><img class="center col s12 m9 offset-m2" src="../assets/undraw_Work_time_re_hdyv.svg" alt=""></p><br>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';
    import Sidebar from './components/Sidebar';
    export default {
        name: 'Accueil',
        components: {
            'navbar' : Navbar,
            'sidebar' : Sidebar
        }
    }
</script>

<style scoped>
    /* h4{
        background-image: url('../assets/lady.jpg');
    } */
</style>