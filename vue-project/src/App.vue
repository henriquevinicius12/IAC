<template>
  <div id="app">  
   
     <b-navbar toggleable="lg" type="light" variant="light" style="oveflow:hidden;">
        <b-navbar-toggle target="nav-collapse" label="Toggle navigation" style="oveflow:hidden;"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item v-on:click="showList = !showList">
              Lista de Funcionários
            </b-nav-item>
            <b-nav-item href="#" v-on:click="write">
              Meu Perfil
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <div class="container-fluid vertical-center p-md-5">
      <div class="container">
      <div class="survey shadow p-3 mb-5 bg-white rounded float-left float-lg-none ">
        
        <div class="w-100 text-left mt-2 pl-2 " >
          <h1 class="mb-3 font-weight-bold">Avaliação de Desempenho</h1> 
          
          <hr style="margin-top: 8px; margin-bottom: 8px;">
          <!-- maybe change to ficha de avaliacao de {{nome}}-->
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Comunicação</h2>
        </div>
        
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
         <b-form-input ></b-form-input>
        </b-form-group>
      
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  label-cols-sm="4"
        label-cols-lg="12">
          <b-form-radio-group
            size="lg"
            plain
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group
            plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group
            plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label="10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            size="lg"
            class="pt-2"
            :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
          ></b-form-radio-group>
        </b-form-group>
        
        <b-button variant="outline-primary">Button</b-button>
      
      </div>
    </div>
    </div>

      <!-- aki vai ser a parte principal nao sei se da pra fazer com v-show e outras coisas para fazer aparecer
      as outras telas ou usar routing. Talvez routing seja melhor?
      fazer tela para se registrar e ver como fazer a lista em forma de tabela,nome e competencia na coluna na fila
      a nota na competencia do funcionario. Ou em forma em que vc clicka, mostra 
      todas as informacoes, e abre como uma tab que pra direita, com a lista na esquerda 
      tirar fotos para amanha -->

  </div>

</template>

<script>

export default{
    data() {
        return {
            
                showList: false,
                showAdd: false,
                showProfile: false
                
        }
        
    },
    methods: {
        write: function(){
            console.log(this.showList)
        }
    },
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