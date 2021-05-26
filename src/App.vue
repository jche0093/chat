<template>
<div class="app">

  <!-- <router-view></router-view> -->
  <chat-box></chat-box>
  
</div>
</template>

<script>
import ChatBox from './components/ChatBox.vue'

export default {
  name: 'app', 
  components:{
    ChatBox
  }
} 
</script>

<style>
body{
  background: #0070C8;
} 

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:start;
  margin-top: 1px;
  text-size-adjust: 10px; 
  font-size: 10px;
  text-overflow: clip;
}  
</style>
