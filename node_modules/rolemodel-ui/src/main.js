import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'

import '../node_modules/axeta-vue-elements/src/colorVariables.css';
import '../node_modules/axeta-vue-elements/src/styles.css';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    render: (h) => h(App),
}).$mount('#app');
