import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollto from 'vue-scrollto'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Performance from './components/FichaAvaliacao'
import AddProfile from './components/AdicionaPerfil';
import EmployeeList from './components/ListaFuncionario.vue'

Vue.use(BootstrapVue)
Vue.use(VueScrollto)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/add-profile', component: AddProfile},
  {path: '/performance-survey', component: Performance},
  {path: '/EmployeeList', component: EmployeeList}
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
