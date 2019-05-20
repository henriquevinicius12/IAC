import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollto from 'vue-scrollto'
import VueRouter from 'vue-router'
import PortalVue from 'portal-vue'


import Performance from './components/FichaAvaliacao'
import AddProfile from './components/AdicionaPerfil';
import EmployeeList from './components/ListaFuncionario.vue'
import MyProfile from './components/MeuPerfil';
import ProfilePage from './components/Perfil';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(PortalVue)
Vue.use(VueScrollto)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const Routes = [
  {path: '/add-profile', component: AddProfile},
  {path: '/performance-survey', component: Performance},
  {path: '/', component: EmployeeList},
  {path: '/profile-page', component: ProfilePage},
  {path: '/profile', component: MyProfile}
]

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
