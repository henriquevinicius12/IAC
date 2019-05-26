<template>
  <div id="app">  
   
     <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">
        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-brand to="/" class="" v-if="(!this.$store.state.isLogged)">
          Início
          </b-navbar-brand>
          <b-navbar-brand :to="{name: 'userHome'}" v-if="(this.$store.state.isLogged)">
          Home
          </b-navbar-brand>
          <b-navbar-nav >
            <b-nav-item v-if="(this.$store.state.isLogged)" :to="{ name: 'Performance'}">
              Avaliação
            </b-nav-item>
            <b-nav-item id="items">
              Guia de Uso
            </b-nav-item>

          </b-navbar-nav>
            <b-navbar-nav class="ml-auto" v-if="(!this.$store.state.isLogged)">
              
                <b-button size="md" 
                class="my-2 mx-1 " 
                variant="primary" 
                to="/login" 
                >Fazer Login</b-button>
                
                <b-button size="md" 
                class="my-2 mx-1" 
                variant="success" 
                to="/registrar" 
                >Inscreva-se!</b-button>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto" v-if="(this.$store.state.isLogged)">
              <b-nav-text class="my-auto mx-1"><strong>Bem-vindo, {{ this.$route.params.username}}</strong></b-nav-text>
              
              <b-button size="md" 
              class="my-2 mx-1" 
              variant="primary" 
              to="/" 
              @click="changeIsLogged"
              >Logout</b-button>
            </b-navbar-nav>
          
        </b-collapse>
      </b-navbar>
      <keep-alive include="Performance">
        <router-view />
      </keep-alive>
      

  </div>

</template> 

<script>

export default{
  data(){
    return {
      //username é undefined se nao estiver logado
      username: ""
    }
  },
  methods: {
    changeIsLogged(){
      this.$store.dispatch("changeIsLogged")
    } 
  }
}



</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;  
  background-size: auto;
  background-color: #2c3e50;
}
#items:hover{
  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
}
html{
  background-color: #2c3e50;
}


</style>