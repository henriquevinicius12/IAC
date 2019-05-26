<template>
  <div id="inicio">  
    <div class="container-fluid vertical-center p-md-5">
      <div class="container">
        <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
          <h1 class="mb-3 font-weight-bold">Bem vindo ao projeto de Avaliação</h1>
          <br>
          <p> Por favor, realize login para acesso ao formulário </p>
          <p> Em caso de duvidas, consulte o guia do usuário </p>
          <br>
          <b-button variant="success" to="/login">Fazer Login</b-button>
          <b-button variant="info" >Baixar Guia do Usuário</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.container-fluid{
  overflow: hidden;
}
</style>