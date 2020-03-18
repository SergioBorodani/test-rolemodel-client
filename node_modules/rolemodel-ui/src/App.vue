<template>
    <div id="app">
  <!--<v-app>-->

    <!--<v-content>-->

        <!--<div v-if="isIncludeCurrentHref('poljz')">-->
          <!--<PoljzovateljGridCard />-->
        <!--</div>-->
        <!--<div v-if="isIncludeCurrentHref('rolj')">-->
          <!--<RoljGridCard />-->
        <!--</div>-->
        <!--<div v-if="isIncludeCurrentHref('razr')">-->
          <!--<RazrGridCard />-->
        <!--</div>-->
        <router-view />

    <!--</v-content>-->
  <!--</v-app>-->
    </div>
</template>


<script>
//import HelloWorld from './components/HelloWorld.vue';
//import PoljzovateljGridCard from './components/PoljzovateljGridCard'
//import RoljGridCard from './components/RoljGridCard'
//import RazrGridCard from './components/RazrGridCard'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
      tab: null,
  }),

    // watch: {
    //     $route (n, o) {
    //         if (n.path.includes('poljz')) {
    //             this.tab = 1
    //             //var href = window.location.href
    //             console.log('this.tab = 1')
    //         }
    //         if (n.path.includes('rolj')) {
    //             this.tab = 2
    //             console.log('this.tab = 2')
    //         }
    //         if (n.path.includes('razr')) {
    //             this.tab = 3
    //             console.log('this.tab = 3')
    //         }
    //     }
    // },

    methods: {
        isIncludeCurrentHref (url) {
          var href = window.location.href
          return href.includes(url)
      }
    }

};
</script>

