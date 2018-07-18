import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignModal from '@/components/SignModal'
import Main from '@/components/Main'
import Chat from '@/components/Chat'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: require('../components/Home.vue').default
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignModal',
      name: 'SignModal',
      component: SignModal
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/main',
      component: Home
    }
  ]
})
