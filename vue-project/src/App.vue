<template>
  <div id="app">  
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">

        <b-navbar-toggle target="nav-collapse" label="Toggle navigation"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav small="true">
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
  background-color: #2c3e50;
  background-size: auto;
}

</style>