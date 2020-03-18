import Vue from 'vue'
import VueAxios from 'vue-axios'

import customAxios from './axios'

//Vue.prototype.$axios = customAxios;

Vue.use(VueAxios, customAxios)

