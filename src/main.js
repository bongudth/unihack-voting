import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'windi.css'
import './styles/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './services/firebase'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('initialiseStore')
  },
  render: h => h(App)
}).$mount('#app')
