<template>
  <div id="app">  
   
     <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">
        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-brand to="/" v-if="(!this.$store.state.isLogged)">
          Início 

          </b-navbar-brand>
          <b-navbar-brand :to="{name: 'userHome'}" v-if="(this.$store.state.isLogged)">
          Home
          </b-navbar-brand>
          <b-navbar-nav>
            <b-nav-item v-if="(this.$store.state.isLogged)" :to="{ name: 'Performance'}">
              Avaliação
            </b-nav-item>
            <b-nav-item v-if="(this.$store.state.isLogged)" :to="{name: 'List'}">
              Lista de Funcionários
            </b-nav-item>
              <!-- SOMENTE UM EXEMPLO SUBSTITUIR O HREF PRA A URL DO ARQUIVO DO GUIA DO USUARIO 
                   DENTRO DA PASTA public >> GuiaDoUsuario COLOCAR O ARQUIVO NESSA PASTA E 
                   SUBSTITUIR A ULTIMA PARTE DO HREF E APAGAR Aula1.pdf DA PASTA GuiaDoUsuario
                   em alguns browsers não é suportado essa função -->
              <a href="./GuiaDoUsuario/Aula1.pdf" target="_blank" download>
              Guia de Uso
              </a>
            
          </b-navbar-nav>
            <b-navbar-nav class="ml-auto d-inline" v-if="(!this.$store.state.isLogged)">
              
                <b-button size="md" 
                class="my-2 ml-1 mr-2 " 
                variant="primary" 
                to="/login" 
                >Fazer Login</b-button>
                
                <b-button size="md" 
                class="my-2 ml-1 mr-2" 
                variant="success" 
                to="/registrar" 
                >Inscreva-se!</b-button>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto d-inline" v-if="(this.$store.state.isLogged)">
              <b-nav-text class="my-auto ml-1 mr-2"><strong>Bem-vindo, {{ this.$route.params.username}}</strong></b-nav-text>
              
              <b-button size="md" 
              class="my-2 ml-1 mr-2" 
              variant="primary" 
              to="/" 
              @click="changeIsLogged"
              >Logout</b-button>
            </b-navbar-nav>
        </b-collapse>
          
      </b-navbar>
     
        <router-view />
     
      

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
      this.$router.push('/')
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

html{
  background-color: #2c3e50;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

</style>