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
import io from 'socket.io-client';

export default {
    name : "réunions",
    data(){
      return {
        socket : io('localhost:3000')
      }
    },
    methods: {
      userMedia(){
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        }).then(this.startVideo).catch(() => {})
      },
      startVideo(stream){
        let video = document.querySelector('video');
        video.srcObject = stream;
        video.play();
      }
    }
}
</script>

<style>

</style>
