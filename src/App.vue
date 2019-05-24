<template>
  <div id="app">  
   
     <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">
        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item to="/">
              Inicio
            </b-nav-item>
            <b-nav-item to="/performance-survey">
              Avaliação
            </b-nav-item>
            <b-nav-item to="/">
              Guia de Uso
            </b-nav-item>
            <b-nav-item to="/login" >
            <!--ver como fazer para diferentes logins-->
              Login
            </b-nav-item>
           
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view></router-view>
      

  </div>

</template> 

<script>

export default{

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