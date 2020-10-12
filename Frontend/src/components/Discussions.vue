<template>
    <div>
                <div class="chat-messages col s12 m12"></div>
                <div class="card col s12 m12">
                    <div class="card-content">
                        <div class="input-field col s12 m10">
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>   
                            <label for="icon_prefix2">Tapez votre message</label>
                        </div>
                        <button @click="sendMessage()" class="waves-effect waves-light btn pink" id="send_message"><i class="material-icons left">send</i>Envoyer</button>
                    </div>
                </div>
    </div> 
</template>

<script>
    import io from 'socket.io-client';
    import axios from 'axios';
    export default {
        name : 'Discussions',
        data(){
            return {
                socket : io('localhost:3000')
            }
        },
        async mounted(){
            this.socket.once('get-message', (data)=>{
                this.createBubble('s10', 'purple', 'darken-4', data, 'autre');
            })
            let messages = await axios.get('http://localhost:3000/messages');
            console.log(messages.data[0]);
            /* const myNode = document.querySelector('.chat-messages');
            myNode.textContent = '';
            let allMessages = {}
            messages.data[0].forEach(element => {
                allMessages.data = element; 
            });
                if (allMessages.data.id_employé == parseInt(window.location.pathname.slice(-1))) {
                    console.log(messages.Message);
                    this.createBubble('s12', 'pink', 'right', allMessages.data.Message, allMessages.data.id_employé);
                } else {
                    this.createBubble('s10', 'purple', 'darken-4', allMessages.data.Message, allMessages.data.id_employé);
                } */
        },
        methods: {
            createBubble(s, color, posOrColor, message, user){
                let id = window.location.pathname.slice(-1);
                if (user == 'moi') {
                    this.socket.emit('message', {message, id});
                }
                
                const me1 = document.createElement('div');
                me1.classList.add('col', s);
                const me2 = document.createElement('div');
                me2.classList.add('card', color, 'col', posOrColor);
                me2.style = "border-radius: 40px; color: white";
                const p = document.createElement('p');
                p.innerHTML = message;
                me2.appendChild(p);
                me1.appendChild(me2);
                document.querySelector('.chat-messages').appendChild(me1);
            },
            sendMessage(){
                let message = document.querySelector('textarea').value;
                this.createBubble('s12', 'pink', 'right', message, 'moi');
            }
        }
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
        color: white;
    }
</style>