<template>
    <div>
        <navbar></navbar>
        <div class="row">
            <sidebar></sidebar>
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
                <div class="input-field col s12 m11">
                    <i class="material-icons prefix">chat</i>
                    <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                    <i class="material-icons prefix right" id="send">send</i>                
                    <label for="icon_prefix2">Tapez votre message</label>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
    import Navbar from './components/Navbar';
    import Sidebar from './components/Sidebar';
    export default {
        name : 'Discussions',
        components: {
            'navbar' : Navbar,
            'sidebar' : Sidebar
        }
    }
</script>

<style scoped>
    .chat-messages{
        overflow-x: hidden;
        height: 460px;
        background-image: url('../assets/undraw_online_discussion_5wgl.svg');
    }

    .messages{
        border-radius: 40px;
    }
</style>