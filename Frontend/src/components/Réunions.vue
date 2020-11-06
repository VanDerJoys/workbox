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
import SimplePeer from 'simple-peer';

export default {
    name : "réunions",
    data(){
      return {
        socket : io('localhost:3000'),
        peer : new SimplePeer({
          initiator : true,
          stream : false
        })
      }
    },
    methods: {
      startVideo(){
        
      }
    }
}
</script>

<style>

</style>