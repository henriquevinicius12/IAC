import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollto from 'vue-scrollto'
import VueRouter from 'vue-router'
import PortalVue from 'portal-vue'
import Vuex from 'vuex'
import 'es6-promise/auto'


import Performance from './components/FichaAvaliacao'
import Login from './components/Login'
import Inicio from './components/Inicio' //Tela antes de login
import Home from './components/Home' //Tela pós login
import AddProfile from './components/AdicionaPerfil';
import EmployeeList from './components/ListaFuncionario.vue'
import MyProfile from './components/MeuPerfil';
import ProfilePage from './components/Perfil';
import Registrar from './components/Registrar.vue'
import onlyInt from 'vue-input-only-number';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(PortalVue)
Vue.use(VueScrollto)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(onlyInt);
Vue.config.productionTip = false



export const store = new Vuex.Store({
  state:{
    employees: [
      {nome: "test1", departamento: "test2", eval: {comp1: "3", comp2: "1", comp3: "11", comp4: "12"}}
    ],
    user: [{
      _id: 0,
      userName: "",
      pw: ""
    }]
  }
})



const Routes = [
  {path: '/add-profile', component: AddProfile},
  {path: '/performance-survey', component: Performance},
  {path: '/login', component: Login},
  {path: '/list', component: EmployeeList},
  {path: '/inicio', component: Inicio},
  {path: '/', component: Home},
  {path: '/profile-page', component: ProfilePage},
  {path: '/profile', component: MyProfile},
  {path: '/registrar', component: Registrar}
]

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
