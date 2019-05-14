<template>
  <div id="x">  
    
    <div class="container-fluid row m-0 p-3 p-md-5">
        <div class="container-fluid col-10 shadow bg-white rounded p-3 p-sm-3 px-md-5">

          <div class="h1 w-100 text-left font-weight-bold pl-2">
            Adicionar Perfil
            <br> <hr style="margin-top: 8px; margin-bottom: 20px;">
          </div>

            <b-form-group
              label-cols-lg="3"
              label="Informações Pessoais"
              label-size="lg"
              label-class="font-weight-bold"
              class="py-md-2">

                <b-form-group
                  label-cols-sm="3"
                  label="Primeiro Nome:"
                  label-align-sm="right"
                  label-for="nome-f"
                  class="py-md-2"
                ><b-form-input id="nome-f"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Sobrenome:"
                  label-align-sm="right"
                  label-for="nome-f"
                  class="py-md-2"
                ><b-form-input id="nome-f"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Idade:"
                  label-align-sm="right"
                  label-for="idade-f"
                  class="py-md-2"
                ><b-form-input id="idade-f"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Setor/Departamento:"
                  label-align-sm="right"
                  label-for="setor-f"
                  class="py-md-2"
                ><b-form-input id="setor-f"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Cargo:"
                  label-align-sm="right"
                  label-for="cargo-f"
                ><b-form-input id="cargo-f"></b-form-input>
                </b-form-group>
              </b-form-group>

            <hr style="margin-top: 8px; margin-bottom: 20px;">
            
            <b-form-group
              label-cols-lg="3"
              label="Informações de Contato"
              label-size="lg"
              label-class="font-weight-bold"
              class="py-md-2">

                <b-form-group
                label-cols-sm="3"
                label="E-mail:"
                label-align-sm="right"
                label-for="nome-f"
                class="py-md-2"
                ><b-form-input id="nome-f"></b-form-input>
                </b-form-group>
              
                <b-form-group
                label-cols-sm="3"
                label="Telefone/Celular:"
                label-align-sm="right"
                label-for="idade-f"
                class="py-md-1"
                ><b-form-input id="idade-f"></b-form-input>
                </b-form-group>

              </b-form-group>
            
            <b-button variant="outline-primary">Adicionar Perfil</b-button>
            
          <br><br>
        </div>
        
        
    </div>
    
  </div>

</template>

<script>
  export default{
    
    data(){
      return{
        test: 'hello'
      }
    }
  }



</script>


<style scoped>


#x {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #2c3e50;
  background-size: auto;
}


</style>
