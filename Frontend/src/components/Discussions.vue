<template>
    <div>
        <div class="chat-messages col s12 m12"></div>
        <div class="card col s12 m12">
            <div class="input-field col s12 m12">
                <i class="material-icons prefix">chat</i>
                <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                <label for="icon_prefix2">Tapez votre message</label>
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
        height: 460px;
        background-image: url('../assets/bgimg_chat.svg');
        opacity: 0.4;
    }
</style>