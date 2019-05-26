import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollto from 'vue-scrollto'
import VueRouter from 'vue-router'
import PortalVue from 'portal-vue'
import Vuex from 'vuex'
import onlyInt from 'vue-input-only-number';
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
import ParentComponent from './components/ParentComponent.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(PortalVue)
Vue.use(VueScrollto)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(onlyInt);
Vue.config.productionTip = false

Vue.component('Performance', Performance)

export const store = new Vuex.Store({
  state:{
    users: [{
      id: 0,
      email: "asd@asd",
      username: "asd",
      pw: "asd",
      employees: [
        {nome: "test1", departamento: "test2", eval: {comp1: "3", comp2: "1", comp3: "11", comp4: "12"}}
      ],
    }],
    isLogged: false
  },
  mutations: {
    changeIsLogged(state){
      state.isLogged = !state.isLogged
    },
    adicionaFuncionario(state, employee){
      state.users.employees.push(employee)
    },
    setUser(state, user){
      //usar getters e atualisar antes de mandar
      //user._id = state.users.length++
      state.users.push(user)
    }
  },
  actions:{
    adicionaFuncionario(context, employee){
      context.commit('adicionaFuncionario', employee)
    },
    setUser(context, user){
      context.commit('setUser', user)
    },
    changeIsLogged(context){
      context.commit('changeIsLogged')
    }
  },
})

const Routes = [
  {path: '*', redirect: '/'}, 
  {path: '/add-profile', component: AddProfile},
  {path: '/login', component:  Login},
  {path: '/', component: Inicio, name: 'inicio'},
  {path: '/registrar', component: Registrar},
  {path: '/user/:username', component:  ParentComponent, meta: { auth: true }, children: [
          {path: '', component: Home, name: 'userHome'},
          {path: 'list', component: EmployeeList, name: 'List'},
          {path: 'performance-survey', component:  Performance, name: "Performance"},
          {path: 'profile-page', component: ProfilePage },
          {path: 'profile', component:  MyProfile}
  ]},  
]

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.isLogged) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if(store.state.isLogged){
    next({ name: 'userHome'}) 
  } else next()
  // to and from are both route objects. must call `next`.
}) 

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
