import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'windi.css'
import * as firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBlYTRzRzqaPOpQTzfX-FEQeQiNsGsJOsQ',
  authDomain: 'unihackvotingweb.firebaseapp.com',
  projectId: 'unihackvotingweb',
  storageBucket: 'unihackvotingweb.appspot.com',
  messagingSenderId: '966295184355',
  appId: '1:966295184355:web:5ffc8f79edec6a8944f6d6'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
