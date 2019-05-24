<template>
  <div id="">  
   
    <div class="container-fluid">
      <div class="container col-md-7">
        <div class="survey shadow p-3 mt-5 mb-5 bg-white rounded float-left float-lg-none ">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
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
                    v-model="form.user"
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

                <b-button type="submit" variant="primary">Submit</b-button>
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
          user: '',
          pw:  ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.user = ''
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