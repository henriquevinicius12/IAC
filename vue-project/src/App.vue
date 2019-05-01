<template>
  <div id="app">  
    <div class="h-100" style="oveflow:hidden;"> 
      <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">

        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav small>
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
    
      <b-container fluid style="overflow: auto;" class="vertical-center p-md-5" >
        <div class="p-md-5 container-fluid">
        <div class="container-fluid shadow bg-white rounded float-left p-sm-2 py-md-3 px-md-5"
        style="height:100">

          <div class="h1 w-100 text-left font-weight-bold pl-2">
            Adicionar Perfil
            <br> <hr style="margin-top: 8px; margin-bottom: 20px;">
          </div>

            <b-form-group
              label-cols-lg="3"
              label="Informações Pessoais"
              label-size="lg"
              label-class="font-weight-bold"
              class="py-md-2"
            >
              <b-form-group
                label-cols-sm="3"
                label="Nome:"
                label-align-sm="right"
                label-for="nome-f"
                class="py-md-2"
              >
                <b-form-input id="nome-f"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Idade:"
                label-align-sm="right"
                label-for="idade-f"
                class="py-md-2"
              >
                <b-form-input id="idade-f"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Setor/Departamento:"
                label-align-sm="right"
                label-for="setor-f"
                class="py-md-2"
              >
                <b-form-input id="setor-f"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Cargo:"
                label-align-sm="right"
                label-for="cargo-f"
              >
                <b-form-input id="cargo-f"></b-form-input>
              </b-form-group>
                
              </b-form-group>
            <hr style="margin-top: 8px; margin-bottom: 20px;">
            
            <b-form-group
              label-cols-lg="3"
              label="Informações de Contato"
              label-size="lg"
              label-class="font-weight-bold"
              class="py-md-2"
            >
              <b-form-group
                label-cols-sm="3"
                label="E-mail:"
                label-align-sm="right"
                label-for="nome-f"
                class="py-md-2"
              >
                <b-form-input id="nome-f"></b-form-input>
              </b-form-group>
              
              <b-form-group
                label-cols-sm="3"
                label="Telefone/Celular:"
                label-align-sm="right"
                label-for="idade-f"
                class="py-md-1"
              >
                <b-form-input id="idade-f"></b-form-input>
              </b-form-group>
                
              </b-form-group>

          
          <b-button variant="outline-primary">Adicionar Perfil</b-button>
          <br><br>
        </div>
        </div>
      </b-container>
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
  
}
.vertical-center {
  padding: 15px 15px;
  min-height: 100%;
  min-height: 100vh; 
  display: flex;
  position:absolute;
  align-items: baseline;
  background-color: #2c3e50;
  background-size: auto;
}


</style>