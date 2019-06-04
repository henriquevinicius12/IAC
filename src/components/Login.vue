<template>
  <div id="login">  
    
    <div class="container-fluid vertical-center p-md-5">
      <div class="container">
        <div class="survey shadow p-3 mt-3 bg-white rounded float-left float-lg-none ">
        <h1 class="mb-3 font-weight-bold">Login</h1>

        <b-row class="container">
          <b-col sm="3" class="pt-2">
            <label for="username">Digite seu usuario:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input id="username" type="text" v-model="login.username"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="container mt-2">
          <b-col sm="3" class="pt-2">
          <label for="pw">Digite sua senha:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input id="pw" type="password" v-model="login.pw"></b-form-input>
          </b-col>
        </b-row> 

        <br>
        <b-button variant="success" class="mx-2" @click="authenticateUser(login)">Entrar</b-button>
        <b-button variant="info" class="mr-2">Voltar</b-button>
        <small >Ainda não possui conta?
          <router-link to="/registrar">Clique Aqui</router-link>
          para criar uma conta
        </small>
        </div>
      


    </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      login:{
        username: "",
        pw: "",
      }
    }
  },
  methods: {
    authenticateUser: function(login){
      var users = this.$store.state.users
      for( var i = 0; i < users.length ; i++){
        if(users[i].username === login.username && users[i].pw === login.pw){
          console.log("usuario encontrado")
          this.$store.dispatch("changeIsLogged")
          this.$router.push({ name: 'userHome' , params: {username: users[i].username}})
        } else console.log('nao encontrado') //emit invalid feedback
      }

    }
  }
}

</script>

<style scoped>

#y {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #2c3e50;
  background-size: auto;
}


.container-fluid{
  overflow: hidden;
}
</style>