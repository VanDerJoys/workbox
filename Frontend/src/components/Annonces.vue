<template>
    <div>
        <ul class="collection col s12 m8 offset-m2">
                    <li class="collection-item avatar">
                        <img src="../assets/lady.jpg" alt="" class="circle">
                        <span class="title"><b>Charlie Dan</b></span>
                        <p>
                            Je vais me marier la semaine prochaine!!!
                        </p>
                    </li>
                    <li class="collection-item avatar">
                        <img src="../assets/WhatsApp Image 2020-09-04 at 22.26.44.jpeg" alt="" class="circle">
                        <span class="title"><b>Ohrel Ze</b></span>
                        <p>
                            Ma femme vient d'accoucher!! Je suis trop content!
                        </p>
                    </li>
                    <li class="collection-item avatar">
                        <img src="../assets/WhatsApp Image 2020-09-05 at 00.19.57.jpeg" alt="" class="circle">
                        <span class="title"><b>Charlotte Mendana</b></span>
                        <p>
                            Bonsoir à tous!! Je suis nouvelle dans l'entreprise. Je travaille à la DRH en tant
                            que sécrétaire adjointe auprès du Directeur de la DRH!!!
                        </p>
                    </li>
                    <li class="collection-item avatar">
                        <img src="../assets/WhatsApp Image 2020-09-04 at 23.46.54.jpeg" alt="" class="circle">
                        <span class="title"><b>Marcel Zoa</b></span>
                        <p>
                            Le Directeur Général de la banque à laquelle nous sommes affiliés vient de décéder.
                            Son corps est encore à l'hôpital général! RIP!!!
                        </p>
                    </li>
                </ul>
                <div class="row">
                    <div class="input-field col s8 m6 offset-m2">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                        <label for="icon_prefix2">Tapez votre message</label>
                    </div>
                    <div class="col s4 m4">
                        <button class="waves-effect waves-light btn pink" id="add_an">Ajouter</button>
                    </div>
                </div>
    </div>
</template>

<script>
    import jQuery from 'jquery';
    window.jQuery = jQuery;
    
    export default {
        name : 'Annonces',
        mounted(){
            this.$nextTick(function(){
                jQuery('.collapsible').collapsible();
            })
        }
    }
</script>
    
<style scoped>
    
</style>