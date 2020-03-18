import Vue from 'vue'
import Router from 'vue-router'
import PoljzovateljGridCard from '@/components/PoljzovateljGridCard'
import RoljGridCard from '@/components/RoljGridCard'
import RazrGridCard from '@/components/RazrGridCard'
import PoljzovateljAddCard from '@/components/PoljzovateljAddCard'
import RoljAddCard from '@/components/RoljAddCard'
import RazrAddCard from '@/components/RazrAddCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/poljz',
        name: 'PoljzovateljGridCard',
        component: PoljzovateljGridCard
    },

    {
        path: '/rolj',
        name: 'RoljGridCard',
        component: RoljGridCard
    },
    {
        path: '/razr',
        name: 'RazrGridCard',
        component: RazrGridCard
    },

      {
          path: '/addPoljz',
          name: 'PoljzovateljAddCard',
          component: PoljzovateljAddCard
      },

      {
          path: '/addRolj',
          name: 'RoljAddCard',
          component: RoljAddCard
      },

      {
          path: '/addRazr',
          name: 'RazrAddCard',
          component: RazrAddCard
      }
  ]
})
