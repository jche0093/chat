<template>
<div class="loading" v-show='loading'>
    <img src='./logo.png' style="
    width: 50px;
    height: 50px;
    float:left;
    position:relative;
    left:15px;
    margin-top:-7px;">&nbsp;
    <img src="./loading1.gif" 
    style="height:90px;
    margin-top:-25px;
    position:relative;
    float:left;
    left:-5px;">
    <div class='sun-loading'></div>
</div>
</template>

<script>
export default {
  name: 'loading' ,
  data(){
      return{
          loading:false
      }
  },
  created(){
      var that=this;
      this.bus.$on('loading',function(data){
          that.loading=!!data;
      })
  }
}
</script>


