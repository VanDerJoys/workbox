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
                        <form action="http://192.168.0.46:3000/Inscription" method="post">
                            <div class="input-field col s12 m6">
                                <i class="material-icons prefix">person</i>
                                <input id="icon_prefix" type="text" class="validate" name="nom" required>
                                <label for="icon_prefix">Nom</label>
                            </div>
                            <div class="input-field col s12 m6">
                                <i class="material-icons prefix">person</i>
                                <input id="icon_prefix" type="text" class="validate" name="prénom" required>
                                <label for="icon_prefix">Prénom</label>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="icon_prefix" type="email" class="validate" name="email" required>
                                <label for="icon_prefix">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">phone_android</i>
                                <input id="icon_prefix" type="tel" class="validate" name="téléphone" required pattern="6[98257][0-9]{7}">
                                <label for="icon_prefix">Téléphone</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" class="validate" name="login" required>
                                <label for="icon_prefix">Nom utilisateur</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">lock</i>
                                <input id="icon_lock" v-bind:type="type" class="validate" name="password" required>
                                <i class="material-icons prefix" @click="toggle()" id="eye">{{visibility}}</i>
                                <label for="icon_lock">Mot de passe</label>
                            </div>
                            <button class="btn pink" type="submit">Envoyer <i class="material-icons right">send</i></button>
                            <router-link to="/Login" class="btn purple lighten-1 right">Se connecter</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Inscription',
    data(){
        return {
            visibility : 'visibility_off',
            type : "password"
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
    }
  }
}
</script>

<style scoped>
    .card{
        margin-top: 60px;
    }

    .card-image{
        margin-top: 80px;
    }

    #eye{
        cursor: pointer;
    }
</style>