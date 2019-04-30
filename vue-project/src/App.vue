<template>
  <div id="app">  
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">

        <b-navbar-toggle target="nav-collapse" label="Toggle navigation"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav small="true">
            <b-nav-item href="#" active>Home</b-nav-item>
            <b-nav-item href="#" >Funcionarios</b-nav-item>
            <b-nav-item href="#">Meu Perfil</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <br>
    <br>
  <div>
    <div class="survey">  
      <h3>Questionario</h3>
      <form action="" class="form-inline">
        <div>
        <h3>Pergunta1</h3>
        <input type="text" class="form-control" id="q0" value="blablabla1"/>
        <h3>Pergunta2</h3>
        <input type="text" class="form-control" id="q1" value="blablabla2"/>
        <h3>Pergunta3</h3>
        <input type="text" class="form-control" id="q2" value="blablabla3"/>
        <h3>Pergunta4</h3>
        <input type="text" class="form-control" id="q3" value="blablabla4"/>
        <h3>Pergunta5</h3>
        <input type="text" class="form-control" id="q4" value="blablabla5"/>
        <h3>Pergunta6</h3>
        <input type="text" class="form-control" id="q5" value="blablabla6"/>
        <h3>Pergunta7</h3>
        <input type="text" class="form-control" id="q6" value="blablabla7"/>
        <h3>Pergunta8</h3>
        <input type="text" class="form-control" id="q7" value="blablabla8"/>
        <h3>Pergunta9</h3>
        <input type="text" class="form-control" id="q8" value="blablabla9"/>
        <h3>Pergunta10</h3>
        <input type="text" class="form-control" id="q9" value="blablabla10"/>
        </div>
           
      </form><br><br>
      <button type="submit" class="btn-submit" onClick="sendSurvey()">Testando</button><br><br>

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
}
.survey{
  display: table-cell;
  border: 0.5px 0.5px;
}
input{
  width: max-width;
}
</style>