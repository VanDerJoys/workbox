<template>
  <div>
    <div id="video-grid"></div>
    <div class="container">
      <h6 class="center"><button class="btn purple darken-1" @click="startVideo()">Rejoindre la réunion</button></h6>
      <p><img class="right" src="../assets/undraw_conference_call_b0w6.svg" alt=""></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Peer from 'peerjs';
import io from 'socket.io-client'
export default {
    name : "réunions",
    data(){
      return {
        socket : io('localhost:3000'),
        peers : {},
        peer : new Peer()
      }
    },
    methods: {
      async startVideo(){
        let uuid = await axios.get(`http://localhost:3000/Reunions`);
        document.querySelector('.container').remove();
        const myVideo = document.createElement('video');
          navigator.mediaDevices.getUserMedia({
            video: true
          }).then(stream => {
            this.addVideoStream(myVideo, stream)

            this.peer.on('call', call => {
              console.log('dedans1');
              call.answer(stream)
              const video = document.createElement('video')
              call.on('stream', userVideoStream => {
                this.addVideoStream(video, userVideoStream)
              })
            })

            this.socket.on('user-connected', userId => {
              console.log('dedans2');
              this.connectToNewUser(userId, stream)
            })
          })

          this.socket.on('user-disconnected', userId => {
            if (this.peers[userId]) this.peers[userId].close()
          })
          
          this.peer.on('open', id => {
            console.log('dedans3');
            this.socket.emit('join-room', uuid.data, id)
          })
      },
      connectToNewUser(userId, stream) {
        const call = this.peer.call(userId, stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
          this.addVideoStream(video, userVideoStream)
        })
        call.on('close', () => {
          video.remove()
        })

        this.peers[userId] = call
      },
      addVideoStream(video, stream) {
        let videoGrid = document.getElementById('video-grid');
        video.srcObject = stream
        video.addEventListener('loadedmetadata', () => {
          video.play()
        })
        videoGrid.append(video)
      }
    }
}
</script>

<style>

</style>