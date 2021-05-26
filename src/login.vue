<template> 
<div class="container">
    <p style="font-size:30px;
              margin-top:-100px;
              color:white;">登录</p>

    
    <div class="col-md-12">

      <form class="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30" role="form" :rule='rules'>
       
        <img src='./components/login img/头像.png'
         style=" width: 60px;
                 height: 60px;
                 left:150px;
                 margin-top:30px;">

        <div class="form-group">
          <div class="col-xs-12">
            <div class="control-wrapper">
              <label for="username" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
              <img src='./components/login img/loginface.jpeg' 
              style='height:28px;
                     weight:25px;
                     margin-top:40px;
                     left:45px;
                     position:absolute'>

              <input type="text" class="form-control" id="username" placeholder="用户名" style="width:80%"
              v-model="user.name" >
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="control-wrapper">
              <label for="password" class="control-label fa-label"><i class="fa fa-lock fa-medium"></i></label>
              <img src='./components/login img/key.png'
              style='height:28px;
                     weight:25px;
                     margin-top:120px;
                     left:42px;
                     position:absolute;'>
              <input type="password" class="form-control" id="password" placeholder="密码" style="width:80%" v-model="user.password">
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12 text-center">
            <input type="submit" value="登录" class="button" @click='check()' style="background:#0070C8">
             <p class="message">新用户？ <a href='/register'>注册账号</a></p>
             <p style='font-size:13px;color:grey'>忘记密码？<a href="" style='font-size:13px'>找回密码</a></p>
          </div>
        </div>
      </form>
    </div>
  </div>


</template>

<script>
  export default {
    name:'Login',
    data (){
      return {
        user: {
          name: '',
          password: '', 
          errorMessage:[]      
        },
      }
    

    },
    computed: {    
    },
    methods:{
      sub(){  
      },
      check(){
        /* this.$axios.post(`http://192.168.100.151:5000/auth/login`,
        {username:this.user.name,password:this.user.password})
        .then(function(res){
            
            window.console.log(res) 
        }) */
        this.$router.push({path:'/chat-bot'})
      },
      goRegister(){
        this.$router.push({path:'/register'})
      }
     
   

    }
  }
</script>


<style>
.container{
  width: 330px;
  padding: 8% 0 0;
  margin: auto;
  position: relative;
  z-index: 1;
  background: #f5f5f8;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  margin-top: 13%;
}

.container p{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}

.button{
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #2a58ad;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-top: 10%;
  position:relative;
}

.message{
  margin-top: 10%;
  color:rgb(112, 111, 111);
  font-size: small;}

.message a{
  color:#21488f
}
.form-control{
  width:80%;
  position: relative;
  float:right;
  padding:15px;
  margin-top: 10%;
  border:0;
}
/* body{
  background-image: url('back.jpg'); 
} */
</style>









  


