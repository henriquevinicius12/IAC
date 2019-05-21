<template>
  <div id="app">  
   
     <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">
        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item to="/">
              Lista de Funcionários
            </b-nav-item>
            <b-nav-item to="/profile" >
            <!--ver como fazer para diferentes logins-->
              Meu Perfil
            </b-nav-item>
            <b-nav-item to="/add-profile">
             Adicionar Perfil
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view></router-view>
      

  </div>

</template> 

<script>
import EmployeeList from "./components/ListaFuncionario"

export default{
    components:{
      EmployeeList
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


</style>