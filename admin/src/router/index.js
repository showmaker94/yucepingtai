import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/top'
import login from '@/views/Login'
import data from '@/views/Data'
import betrecord from '@/views/BetRecord'
import modify from '@/views/Modify'
Vue.use(Router)

export default new Router({
 // mode:"history",
  routes: [
    {
      path:'/',
      name: 'login',
      component: login
    },
    {
      path:'/data',
      name: 'data',
      component: data
    },
    {
      path:'/data/:contract_id',
      name: 'betrecord',
      component: betrecord
    },
    {
      path:'/modify/:contract_id',
      name: 'modify',
      component: modify
    }
  ]
})
