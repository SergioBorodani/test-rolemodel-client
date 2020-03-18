import Vue from 'vue'
import Router from 'vue-router'
import PoljzovateljGridCard from 'rolemodel-ui/src/components/PoljzovateljGridCard'
import RoljGridCard from 'rolemodel-ui/src/components/RoljGridCard'
import RazrGridCard from 'rolemodel-ui/src/components/RazrGridCard'
import PoljzovateljAddCard from 'rolemodel-ui/src/components/PoljzovateljAddCard'
import RoljAddCard from 'rolemodel-ui/src/components/RoljAddCard'
import RazrAddCard from 'rolemodel-ui/src/components/RazrAddCard'

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

