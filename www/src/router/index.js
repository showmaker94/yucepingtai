import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import crecontract from '@/components/Crecontract'
import crecontractresult from '@/components/Crecontractresult'
import brocontract from '@/components/Browsecontract'
import contractdetail from '@/components/Contractdetail'
import setaddr from '@/components/Setaddress'
import sendcoin from '@/components/Sendcoin'
import faq from '@/components/FAQ'
import topsearch from '@/components/TopSearch'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/new',
      name: 'crecontract',
      component: crecontract
    },
    {
      path: '/new/result',
      name: 'crecontractresult',
      component: crecontractresult
    },
    {
      path: '/browse',
      name: 'brocontract',
      component: brocontract
    },
    {
      path: '/topsearch/:searchword',
      name: 'topsearch',
      component: topsearch
    },
    {
      path: '/browse/detail/:contract_id',
      name: 'contractdetail',
      component: contractdetail
    },
    {
      path: '/browse/detail/:contract_id/:yesorno/',
      name: 'setaddr',
      component: setaddr
    },
    {
      path: '/browse/detail/:contract_id/:yesorno/:addr',
      name: 'sendcoin',
      component: sendcoin
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    }
  ]
})
