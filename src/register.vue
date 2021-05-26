<template> 
  <div class="container">
   <p style="font-size:30px;
             margin-top:-100px;
             color:white;">注册</p>

    <div class="col-md-12">
      <form class="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30" role="form" >
        <img src='./components/login img/registerface.png'
         style=" width: 75px;
                 height: 60px;
                 position:relative;
                 margin-top:30px;">

        <div class="form-group">
          <div class="col-xs-12">
            <div class="control-wrapper">
              <label for="username" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
              <input type="text" class="form-control" id="username" placeholder="用户名" v-model="user.name" @input='blurName()'>
            </div>
          </div>
        </div>
        <span style="color:red;float:left;font-size:10px">{{user.errorName}}</span>

        <div class="form-group">
          <div class="col-xs-12">
            <div class="control-wrapper">
              <label for="repeatpassword" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
              <input type="email" class="form-control" id="email" placeholder="email@email.com" v-model="user.email" @input='blurName()' @blur='blurEmail()'>
            </div>
          </div>
        </div>
        <span style="color:red;float:left;font-size:10px">{{user.errorEmail}}</span>

        <div class="form-group" :rules='rules'>
          <div class="col-md-12">
            <div class="control-wrapper">
              <label for="password" class="control-label fa-label"><i class="fa fa-lock fa-medium"></i></label>
              <input type="password" class="form-control" id="password"  placeholder="6 - 16位密码" v-model="user.password" @input='blurPass()'>
            </div>
          </div>
        </div>
        <span style="color:red;float:left;font-size:10px">{{user.errorPass}}</span>

        <div class="form-group">
          <div class="col-xs-12">
            <div class="control-wrapper">
              <label for="repeatpassword" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
              <input type="password" class="form-control"  id="repeatpassword" placeholder="确认密码" v-model="user.repeatpassword" @input='checkSame()' @blur='blurPass()'>
            </div>
          </div>
        </div>
        <span style="color:red;float:left;font-size:10px">{{user.errorSame}}</span>

        <div class="form-group">
          <div class="col-md-12 text-center">
            <input type="submit" value="提交注册申请" class="button" style="background:#0070C8">
            <p class="message">已有账号？ <a href="/login">登陆账号 </a></p>
          </div>
        </div>
      </form>
    </div>
  </div>
   
  

</template>

<script>

  export default {
    data (){
      return {
        user: {
          name: '',
          password: '',
          email:'',
          repeatpassword:'',
          errorName:'',
          errorEmail:'',
          errorPass:'',
          errorSame:'',

        }, 

      }

    },

    watch:{
      password() {
      this.initPassWord();}
      
    },
    computed: {
    },
    methods:{
      sub(){      
      }, 
      blurName(){
        if (this.user.name==""){
          this.user.errorName='用户名不能为空'
        }
        else {this.user.errorName=''}
      }, 
      blurEmail(){
        if (this.user.email==""){
          this.user.errorEmail='邮箱不能为空'
        }
        else {this.user.errorEmail=''}      

      },
      blurPass(){
        if (this.user.password==""){
          this.user.errorPass='*密码设置不能为空'
        }
        else if (this.user.password.length<6 || this.user.password.length>16){
          this.user.errorPass='密码需要6-16位'}    
        else if (this.user.password.length>=6 && this.user.password.length<=16){
          this.user.errorPass=''}   
      },
      checkSame(){
        if (this.user.password!=this.user.repeatpassword){
          this.user.errorSame='密码不一致'
        }
        else {this.user.errorSame=''}

      },      
    }
  }
</script>


<style>
.container{
  width: 300px;
  padding: 8% 0 0;
  margin: auto;
  position: relative;
  z-index: 1;
  background: #f3f3f5;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  margin-top: 8%;
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
}

.message{
  margin-top: 10%;
  color:rgb(112, 111, 111);
  font-size: small;}

.message a{
  color:#21488f
}
.form-control{
  width:88%;
  padding:15px;
  margin-top: 10%;
  border:0;}
/* body{
  background-image: url('back.jpg');
}  */

</style>









  


