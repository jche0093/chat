import Router from 'vue-router'
import login from './login.vue'
import register from './register.vue'
import Vue from "vue";
import ChatBox from './components/ChatBox.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {path:'/',name:'login',component:login},
        {path:'/login',name:'login',component:login},
        {path:'/chat-bot',name:'chat-bot',component:ChatBox},
        {path:'/register',name:'register',component:register}
    ]
});
export default router;
