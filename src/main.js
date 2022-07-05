import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'windi.css'
import { initializeApp } from 'firebase/app'
import './styles/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBlYTRzRzqaPOpQTzfX-FEQeQiNsGsJOsQ',
  authDomain: 'unihackvotingweb.firebaseapp.com',
  projectId: 'unihackvotingweb',
  storageBucket: 'unihackvotingweb.appspot.com',
  messagingSenderId: '966295184355',
  appId: '1:966295184355:web:5ffc8f79edec6a8944f6d6'
}

initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('initialiseStore')
  },
  render: h => h(App)
}).$mount('#app')
