<template>
  <div id="login">  
    
    <div class="container-fluid vertical-center p-md-5">
      <div class="container">
        <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        <h1 class="mb-3 font-weight-bold">Login</h1>

        <br>

        <b-row class="my-1" :key="text">
          <b-col sm="3">
            <label>Digite seu usuario:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1" :key="password">
          <b-col sm="3">
            <label>Digite sua senha:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input type="password"></b-form-input>
          </b-col>
        </b-row>

        <br>
        <b-button variant="success" to="/home">Entrar</b-button>
        <b-button variant="info" >Voltar</b-button>
        </div>
      


    </div>
    </div>
  </div>
</template>

<script>

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