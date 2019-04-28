import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/views/Project'
import Projects from '@/views/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/project/:id',
      name: 'project',
      component: Project
    }
  ]
})
