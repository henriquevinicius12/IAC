<template>
  <div id="">  
   
    <div class="container-fluid">
      <div class="container col-md-7">
        <div class="survey shadow p-3 mt-5 mb-5 bg-white rounded">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Endereço de email:"
                    label-for="input-1"
                    description="*Ex: exemplo@exemplo"
                > 
                    <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Digite seu email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Nome de usuário:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.username"
                    required
                    placeholder="Digite seu nome de usuario"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Senha:" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="form.pw"
                    required
                    type="password"
                    placeholder="Digite sua senha"
                    ></b-form-input>
                </b-form-group>

                <b-button class="m-2" type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </div>
      </div>
    </div>
  </div>

</template> 

<script>


export default{
     data() {
      return {
        form: {
          id: '',  
          email: '',
          username: '',
          pw:  ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) { 
        evt.preventDefault()
        var users = this.$store.state.users
        for( var i = 0; i < users.length ; i++){
            if(users[i].username === this.form.username){
            console.log("usuario ja existente")
            break
            } else console.log('username disponivel') //emit invalid feedback
        }
        /*alert("Registro completado com sucesso!")*/
        this.$store.dispatch("setUser", this.form)
        alert(JSON.stringify(this.$store.state.users))
        this.$router.push({path: '/login'})
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.username = ''
        this.form.pw = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
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


</style>