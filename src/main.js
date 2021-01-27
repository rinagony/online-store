import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueCarousel from 'vue-carousel'
import router from './router/router.js'
import Tabs from 'vue-tabs-component'
import axios from 'axios'
import Loader from '@/app/Loader'
import VueAxios from 'vue-axios'
import store from './store/store'
import messagePlugin from '@/utils/message.plugin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import './assets/scss/styles.scss'
import 'materialize-css/dist/js/materialize.min'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: ''
  }
})

export const bus = new Vue();

Vue.use(Vuelidate)

Vue.component('Loader', Loader)

Vue.use(messagePlugin)

Vue.use(VueAxios, axios)

Vue.use(Tabs);

Vue.use(VueCarousel)

Vue.config.productionTip = false

firebase.initializeApp(
  {
    apiKey: "AIzaSyComH-N6uqml_CzN4ufU7t1nGCWoTwhfjk",
    authDomain: "clothe-shop-6ca59.firebaseapp.com",
    databaseURL: "https://clothe-shop-6ca59.firebaseio.com",
    projectId: "clothe-shop-6ca59",
    storageBucket: "clothe-shop-6ca59.appspot.com",
    messagingSenderId: "623867636919",
    appId: "1:623867636919:web:63f48e3de7d58b0e1cf132",
    measurementId: "G-Z3NFVX07GQ"
  }
)

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

