<template>
    <div>
                <div class="chat-messages col s12 m12">
                    <div id="me" class="col s12">
                        <div class="card pink col right messages">
                            <div class="card-content white-text">
                                <p>Bonjour</p>
                            </div>
                        </div>
                    </div>
                    <div id="others" class="col s10">
                        <div class="card purple darken-4 col messages">
                            <div class="card-content white-text">
                                <p>Bonjour tout le monde</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col s12 m12">
                    <div class="card-content">
                        <div class="input-field col s12 m10">
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>   
                            <label for="icon_prefix2">Tapez votre message</label>
                        </div>
                        <button class="waves-effect waves-light btn pink" id="add_task"><i class="material-icons left">send</i>Envoyer</button>
                    </div>
                </div>
    </div> 
</template>

<script>
    export default {
        name : 'Discussions'
    }
</script>

<style scoped>
    .chat-messages{
        overflow-x: hidden;
        height: 430px;
        background-image: url('../assets/undraw_online_discussion_5wgl.svg');
    }

    .messages{
        border-radius: 40px;
    }
</style>