<template>
  <div id="app">  
    
  <div class="container-fluid">
    <div class="container">
    <div class="survey shadow p-3 mb-5 bg-white rounded float-left float-lg-none ">
      <div class="h1 w-100 text-left font-weight-bold pl-2 " >Avaliação de Funcionário 
        <br> <hr style="margin-top: 8px; margin-bottom: 20px;">
        <!-- maybe change to ficha de avaliacao de {{nome}}-->
      </div>
      
      <b-form-group label="1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolore." 
       label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
       >
        <b-form-radio-group
          id="test"
          size="lg"
          plain
          class="pt-2"
          :options="['Nunca', 'Pouco', 'Algumas Vezes','Muito', 'Quase Sempre']"
        ></b-form-radio-group>
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


.container-fluid{
  padding: 15px 60px;
  overflow: hidden;
}
</style>