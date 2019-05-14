<template>
  <div id="app">  
   
     <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">
        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item to="/employeeList">
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
      

      <!-- aki vai ser a parte principal nao sei se da pra fazer com v-show e outras coisas para fazer aparecer
      as outras telas ou usar routing. Talvez routing seja melhor?
      fazer tela para se registrar e ver como fazer a lista em forma de tabela,nome e competencia na coluna na fila
      a nota na competencia do funcionario. Ou em forma em que vc clicka, mostra 
      todas as informacoes, e abre como uma tab que pra direita, com a lista na esquerda 
      tirar fotos para amanha -->

  </div>

</template> 

<script>

import Performance from './components/FichaAvaliacao';
import AddProfile from './components/AdicionaPerfil';
import EmployeeList from './components/ListaFuncionario';
import MyProfile from './components/MeuPerfil';
import ProfilePage from './components/Perfil';

export default{
    components:{
      AddProfile,
      Performance,
      EmployeeList,
      MyProfile,
      ProfilePage
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