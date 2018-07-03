import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignModal from '@/components/SignModal'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
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
      component: Main
    }
  ]
})
