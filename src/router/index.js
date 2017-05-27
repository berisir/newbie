import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Title from '@/components/Title'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/title',
      name:'title',
      component:Title
    }
  ]
})
