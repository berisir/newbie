import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Special from '@/view/Special'
import Course from '@/view/Course'
import Interview from '@/view/Interview'
import Mine from '@/view/Mine'
Vue.use(Router)




export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Special',
      name: 'Special',
      component: Special
    },
    {
      path: '/Course',
      name: 'Course',
      component: Course
    },
    {
      path: '/Interview',
      name: 'Interview',
      component: Interview
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
