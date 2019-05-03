<template>
  <div id="app">  
    <div class="">
      <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">
        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item href="#" active>
              <strong>Home</strong>
            </b-nav-item>
            <b-nav-item href="#" >
              <strong>Funcionários</strong>
            </b-nav-item>
            <b-nav-item href="#">
              <strong>Meu Perfil</strong>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="container-fluid row m-0 ">
      <div class="container-fluid row">
        <div class="row">
          <div class="col-4"><!-- criando pagina funcionario-->
            <div class="list-group" role="tablist">
              <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab">
                <div><!--criar grupo com nome setor/departamento e cargo-->

                </div>
              </a>
              <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab">
                <div>
                  
                </div>
              </a>
              <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab">
                <div>

                </div>
              </a>
              <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab">
                <div>

                </div>
              </a>  
            </div>
          </div>
        </div>
           
        
      </div>
        
    </div>
    
  </div>

</template>

<script>

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
}




</style>