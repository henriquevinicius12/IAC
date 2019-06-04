<template>
  <div id="login">  
    
  
    <div class="container-fluid vertical-center p-md-5">
      <div class="container">
        <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        <h1 class="mb-3 font-weight-bold">Bem vindo ao projeto de Avaliação</h1>

        <br>

        <p> Em caso de duvidas, consulte o guia do usuário </p>

        <br>
        <b-button variant="success" :to="{ name: 'Performance'}">Iniciar Avaliação</b-button>
        
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