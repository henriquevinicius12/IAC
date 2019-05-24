<template>
  <div id="x">  
    
    <div class="container-fluid row m-0 p-3 p-md-5">
        <div class="container-fluid col-10 shadow bg-white rounded p-3 p-sm-3 px-md-5">

          <div class="h1 w-100 text-sm-center text-lg-left font-weight-bold pl-2">
            Adicionar Perfil
            <br> <hr style="margin-top: 8px; margin-bottom: 20px;">
          </div>

          <b-form @submit="onSubmit">
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
                  label-for="Pnome-f"
                  class="py-md-2"
                ><b-form-input id="Pnome-f"
                 v-model="profile.Nome.Pnome"
                 required>
                 </b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Sobrenome:"
                  label-align-sm="right"
                  label-for="Snome-f"
                  class="py-md-2"
                ><b-form-input id="Snome-f" v-model="profile.Nome.Snome"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Idade:"
                  label-align-sm="right"
                  label-for="Dnascimento-f"
                  class="py-md-2"
                ><b-form-input id="Dnascimento-f" v-model="profile.Dnascimento"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Departamento:"
                  label-align-sm="right"
                  label-for="departamento-f"
                  class="py-md-2"
                ><b-form-input id="departamento-f" v-model="profile.Departamento"></b-form-input>
                </b-form-group>

                <b-form-group
                  label-cols-sm="3"
                  label="Cargo:"
                  label-align-sm="right"
                  label-for="cargo-f"
                ><b-form-input id="cargo-f" v-model="profile.cargo"></b-form-input>
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
                label-for="email-f"
                class="py-md-2"
                ><b-form-input id="email-f" v-model="profile.email"></b-form-input>
                </b-form-group>
              
                <b-form-group
                label-cols-sm="3"
                label="Telefone/Celular:"
                label-align-sm="right"
                label-for="fone-f"
                class="py-md-1"
                ><b-form-input id="fone-f" v-model="profile.fone"></b-form-input>
                </b-form-group>

              </b-form-group>
            
            <b-button variant="outline-primary" type="submit">Adicionar Perfil</b-button>
          </b-form>
          <br><br>
        </div>
        
        
    </div>
    
  </div>

</template>

<script>
  export default{
    
    data(){
      return{
        profile:{
          Nome:{Pnome: "", Snome: ""},
          Dnascimento: "",
          Departamento: "",
          cargo: "",
          email: "",
          fone: ""
        }
      }
    },
    methods:{
      CaptalizeFirstLetter: (str) => { return str.charAt(0).toUpperCase() + str.slice(1) },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.profile))
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

/* name.charAt(0).toUpperCase() + name.slice(1) */
</style>
