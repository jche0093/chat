<template>
  
  <section class="chat-box">
    <div class="chat-box-list-container" ref="chatbox" id="text">
      <ul class="chat-box-list">
        <p>
         <img src='./logo.png'
            style=" width: 50px;
                    height: 50px;
                    left:-3px;
                    float:left;
                    position:relative;
                    margin-top:-7px;">
         <span style="background: #edf0f1;
                     color:black;
                     font-size: 15px;
                     max-width:55%;            
                     position:relative;
                     border-radius: 25px !important;
                     left:5px;
                     display: inline-block !important;
                     word-break: break-word !important;
                     font-family: var(--ff-primary) !important;
                     line-height: auto;
                     pointer-events: auto !important;">您好啊, 我是智能小机器人, 请问有什么能帮你的么？😄</span>

        </p>
        <li
          class="message"
          v-for="(message, idx) in messages"
          
          :key="idx"
          :class="message.author"
        >
         <div class="client-span">
          <p v-if="message.author=='client'">
            <img src='./聊天头像.jpeg'
            style=" width: 45px;
                    height: 45px;
                    float:right;
                    right:2px;
                    position:relative;
                    margin-top:-7px">&nbsp;
            <span style="float:left;left:-8px">{{ message.text }}</span>
          </p>
         </div>

         <div class="server-span">
          <p v-if="message.author=='server'">
            <img src='./logo.png'
            style=" width: 50px;
                    height: 50px;
                    right:10px;
                    float:left;
                    margin-top:-7px">&nbsp;
            <span>{{ message.text }}</span>
            <span style=" background: #fcfcf6;
                          font-size:10px;
                          color: #0070C8;
                          font-weight: 500;
                          margin-top:1px">&nbsp;&nbsp;&nbsp;{{message.currentTime.toLocaleString()}}</span>
          </p>  
         </div>
        </li>
      </ul>
      <loading ></loading> 

    </div>

    <div class='usual-box transition-dom' ref="box" id="usualbox">
<!--       <div class="usualbox-title" ref="Bar" id="Bar" style="transition:all 0.9s">
           <button style="width:25px;line-height:24px;height:120px;font-weight:900;
                      border:none;background:#0070C8;border-radius:25px;color:white;
                      position:absolute;
                      margin-top:5px;float:right" @click="funAnimate">{{textUsual}}</button> 
      </div>  -->
      <div v-if="headerOpen==false"> 
       <ul class="usual-box-list">
         <p style="font-size:11px;left:-20px;font-size:15px;
                  position:relative;color:#0070C8;
                  margin-top: 10px;font-weight:bolder;">您可能对下面的问题感兴趣 :</p>
         <div class="usualB">
           <p v-for="(question,index) in  usualQ" :key="index">
             <button style="float:left;left:-30px;position:relative;min-height:30px;
                        background:#0070C8;color:white;border:none;margin-top:10px;
                         width:100%;border-radius: 25px !important;" @click="chooseOne(question)">{{question}}</button>
           </p>
         </div>
       </ul>
      </div>
    </div>

    <div v-if="isLoading==true" class="title">
      <span>智能机器人</span>
    </div>

    <div v-if="isLoading==false" class="title">
      <span>智能机器人对话中。。。</span>
    </div>

    <div class="title" ref="Bar" id="Bar" style="  font-size: large;
                                color: rgb(238, 235, 237);
                                font-family: Verdana, Geneva, Tahoma, sans-serif;
                                position: absolute;
                                margin-top: -5px;
                                right:30%;
                                transform:translate(1,1);
                                transition:all 0.5s;
                                font-weight:bolder;">
      <div class="usualbox-title" style="transition:all 0.9s">
           <button style="width:25px;line-height:24px;height:120px;font-weight:900;
                      border:none;background:#0070C8;border-radius:25px;color:white;
                      position:absolute;
                      margin-top:5px;float:right" @click="funAnimate">{{textUsual}}</button> 
      </div> 
    </div>
    
    <div class="chat-inputs" ref="input">
      <input
        type="text"
        v-model="message"
        @keyup.enter="sendMessage" placeholder="您好，请在此输入您的疑问"/>
      <img src="./send.png" ref="send" style="max-height:10%;
                                   transform:translate(1,1);
                                   transition:all 0.5s;
                                   margin-top:0.1%;
                                   position:absolute;
                                   float:right;
                                   right:31%;"  @click="sendMessage">
    </div> 
    <div class="error" style="position:relative;height:0px">
      <p style="color:white;font-size:13px;background:none">{{inputErro}}</p>
    </div> 
  </section>
  
</template>

<script>


import loading from './loading.vue';

export default {
  components:{loading},
  name: 'chat',
  data: () => ({
    message: '',
    messages: [],
    isLoading:true,
    inputErro:'',
    usualQ:['请问软件认证流程是什么样的?',
            '请问软件认证流程是什么样的？',
            '请问C项目可以迁移适配么？',
            '请问软件迁移中有问题可以找谁？',
            "请问资源申请应该找谁？",
            '请问如果想借你们的物理机进行适配，需要走什么流程么?',
            '请问服务器租借的话可以租多久？',
            '我们的项目是C++/Go开发的，有没有什么工具能帮助我们更快的进行迁移？',
            '请问你们能提供需要的软件/中间件的ARM版本么？',
            '请问应用是部署在鲲鹏服务器上，数据库是X86服务器可以么?',
            '请问之前的项目用的是Oracle数据库，鲲鹏支持迁移么?',
            '请问现在长江鲲鹏生态创新中心有多少正在进行和完成的方案？',
            '请问凌云认证和展翅认证有什么区别？',
            '请问方案申请需要什么东西？',
            '请问凌云认证适配需要提供什么？',
            '请问暂时还没有软著，可以申请做适配么？',
            '请问凌云认证适配需要提供什么？',
            '请问展翅认证需要注意些什么？',
            '请问长江鲲鹏生态创新中心现在正在做适配的有多少家公司？',
            '请问做一个适配认证需要花多长时间？',
            '请问我们产品的相关组件应该怎么获取？',
            ],
    headerOpen:false,
    textUsual:'点我缩进'

  }),
  created(){
    var _this = this; 
    this.timer = setInterval(function() {
      _this.currentTime = 
        new Date().getDate().toString() +
        " " +
        new Date().getHours().toString() +
        ":" +
        new Date().getMinutes().toString() +
        ": " +
        new Date().getSeconds().toString();
    },1000);
    
    
  },

  updated(){
      window.scrollTo(0,0)
      this.$nextTick(() => {
          this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
      })
  },

  beforeDestroy(){
    if (this.timer) {
      clearInterval(this.timer); 
    }
  },

  methods: {
    sendMessage() {
     const message = this.message
     if (message==''){
        this.inputErro='*您好，输入不能为空哦！'
     }
     else{
      this.inputErro=''

      this.messages.push({
        text: message,
        author: 'client',
        name:'客户'
      })

      this.bus.$emit('loading',true)
      this.message = ''
      this.isLoading=false

      /* this.$axios.get (`https://www.cleverbot.com/getreply?key=CC8uqcCcSO3VsRFvp5-uW5Nxvow&input=${message}`)
      .then(res => {
        this.messages.push({
          text: res.data.output,
          author: 'server',
          name:'机器人',
          timer:"",
          currentTime: new Date()
        },
        
        )
      
      this.bus.$emit('loading',false)
      this.isLoading=true

      })  */ 
 
    //post
     let data = new FormData();
     data.append("question",message); 
     this.$axios.post(`http://192.168.100.151:5000/reply`,data)
      .then(res => {
            this.messages.push({
               text: res.data,
               author: 'server',
               name:'机器人',
               timer:"",
               currentTime: new Date()
            })  

         window.console.log(res.data)
         this.bus.$emit('loading',false)
         this.isLoading=true
     })
    }  
        
    //post
    },

    chooseOne(Q){
      this.inputErro=''
      this.messages.push({
        text: Q,
        author: 'client',
        name:'客户'
      })

      this.bus.$emit('loading',true)
      this.isLoading=false

      let data = new FormData();
      data.append("question",Q); 
      this.$axios.post(`http://192.168.100.151:5000/reply`,data)
       .then(res => {
         this.messages.push({
          text: res.data,
          author: 'server',
          name:'机器人',
          timer:"",
          currentTime: new Date()
         })  
         //window.console.log(res.data)
         this.bus.$emit('loading',false)
         this.isLoading=true
      })   
    },

    logout(){

    },

    funAnimate() {
      if (this.headerOpen) {
        this.$refs.box.style.left = '70%'
        this.$refs.box.style.width = '30%'
        this.$refs.input.style.width='70%'
        this.$refs.send.style.right='31%'
        this.textUsual='点我缩进'
        this.$refs.chatbox.style.width='70%'
        this.$refs.Bar.style.right='30%'

      } else {
        this.$refs.box.style.left= '99%'
        this.$refs.box.style.width = '1%'
        this.$refs.input.style.width='99%'
        this.$refs.send.style.right='2%'
        this.textUsual='点我展开'
        this.$refs.chatbox.style.width='99%'
        this.$refs.Bar.style.right='2%'
      }
      this.headerOpen = !this.headerOpen
    }
    }}
</script>

<style scoped lang="scss">


.chat-box,
.chat-box-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  
}

.chat-box-list-container {
  /* overflow: scroll; */
  overflow-x:auto;
  overflow-y:auto;
  float:left;
  position: relative;
  width:70%;
  height:90%;
  transform:translate(1,1);
  transition:all 0.5s;
}

.usual-box{
  border: 30px solid #0070C8;
  float:right;
  left:70%;
  top:0%;
  height:100%;
  position: absolute;
  border-bottom: none;
  border-top:none;
  border-right:none;
  border-left-width:20px;
  width:30%; 
  transform:translate(1,1);
  transition:all 0.5s;
  //overflow: scroll;
  overflow:auto
}

::-webkit-scrollbar-thumb{
  background-color: #0070C8;
}

.chat-box-list {
  padding-left: 15px;
  padding-right: 15px;

  span {
    padding: 8px;
    color: rgb(240, 230, 230);
    border-radius: 10px;
  }

  .server {
    span {
      background:#edf0f1;  
      color:black;
      font-size: 15px;
      padding: 10px 9px !important;
      border-radius: 25px !important;
      display: inline-block !important;
      word-break: break-word !important;
      font-family: var(--ff-primary) !important;
      line-height: auto;
      pointer-events: auto !important;
      margin-top: 1px;
      max-width:55%; 
      white-space: pre-line;
      position: relative;
    }
    p {
      float: left;
    }
  }
  
  .client {
    span {
      background:#0070C8; 
      color:white ;
      background-image: require('./logo.png');
      font-size: 15px;
      padding: 10px 9px !important;
      border-radius: 25px !important;
      display: inline-block !important;
      word-break: break-word !important;
      font-family: var(--ff-primary) !important;
      line-height: 1.2 !important;
      pointer-events: auto !important;
      max-width: 250px;
      position: relative;
      margin-top:4px
    }
    p {
      float: right;
    }
  }
}

.chat-box {
  margin: 20px;
  border: 30px solid #0070C8;
  width: auto; 
  height:85vh;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  justify-content: space-between;
  position: relative;
  background:rgb(251, 252, 251);
  min-width:600px
}

.title{
  font-size: large;
  color: rgb(238, 235, 237);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  margin-top: -35px;
  font-weight:bolder;
  top:0%;

}

.chat-inputs {
  display: flex;
  width: 70%;
  height:10%;
  border-top: 30px solid #0070C8;
  transform:translate(1,1);
  transition:all 0.5s;
  input {
    line-height: 5!important;
    width:100%;
    border-left: none;
    border-bottom: none;
    border-right: none;
    padding-left: 15px;
    border-top:none;
    border-top-width: 100%;
    display: inline-block !important;
    word-break: break-word !important;
    font-family: var(--ff-primary) !important;
    pointer-events: auto !important;
  }
}
</style>
