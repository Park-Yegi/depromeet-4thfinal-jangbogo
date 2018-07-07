import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignModal from '@/components/SignModal'
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
      path: '/main',
      component: Home
    }
  ]
})
