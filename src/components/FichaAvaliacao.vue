<template>
  <div id="y">  
    <b-dropdown id="scrollToDropdown" dropup text="" variant="secondary" class="m-2">
      <b-dropdown-item v-scroll-to="'#el4'">Seção: 4</b-dropdown-item>
      <b-dropdown-item v-scroll-to="'#el3'">Seção: 3</b-dropdown-item>
      <b-dropdown-item v-scroll-to="'#el2'">Seção: 2</b-dropdown-item>
      <b-dropdown-item v-scroll-to="'#el1'">Seção: 1</b-dropdown-item>
    </b-dropdown>
    
    <div class="container-fluid">
      <div class="container col-md-7">
        <div class="survey shadow p-3 mt-5 mb-5 bg-white rounded float-left float-lg-none " id="el1">
        <div class="w-100 text-left mt-2 pl-2" > 
          <h1 class="mb-3 font-weight-bold">Avaliação de Desempenho</h1>
          <hr style="margin-top: 8px; margin-bottom: 24px;">
        </div>
        <b-form-group 
        label="Insira o nome do Funcionario" 
        label-align="center" 
        label-size="lg" 
        label-class="pl-3"
        class="px-3"  
        >
          <b-form-input v-model="employee.nome"></b-form-input>
        </b-form-group>

        <b-form-group 
        label="Insira o departamento do Funcionario" 
        label-align="center" 
        label-size="lg" 
        label-class="pl-3"
        class="px-3"  
        >
          <b-form-input v-model="employee.departamento" ></b-form-input>
        </b-form-group>
        </div>

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none " >
        
        <div class="w-100 text-left mt-2 pl-2" > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 1: Comunicação</h2>
          <hr style="margin-top: 8px; margin-bottom: 24px;">
        </div>
        
        <!-- Questão 1 -->
        <b-form-group label="1.1 Durante as reuniões, o funcionario...." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group  align="left" 
            id="comunicacao-cb-1"
            v-model="cbcom1" stacked class="pl-3">
            <b-form-checkbox value="a">Fala no geral sobre o projeto</b-form-checkbox>
            <b-form-checkbox value="b">Fala com o colegas sobre o projeto</b-form-checkbox>
            <b-form-checkbox value="c">Age de maneira formal</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
       
        <!-- Questão 2 -->
        <b-form-group label="1.2 - Durante os sprints, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group  align="left" 
            class="pt-2 pl-3"
            id="comunicacao-cb-2"
            v-model="cbcom2"
            stacked>
            <b-form-checkbox value="a">Expõe suas dificuldades no projeto</b-form-checkbox>
            <b-form-checkbox value="b">Tenta ajudar os colegas com dificuldade</b-form-checkbox>
            <b-form-checkbox value="c">Fala de forma sucinta e breve</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="1.3 - Durante o trabalho de desenvolvimento, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3"  
        >
          <b-form-checkbox-group align="left"
            id="comunicacao-cb-2"
            v-model="cbcom3"
            stacked class="pl-3">
            <b-form-checkbox value="a">Conversa com os colegas</b-form-checkbox>
            <b-form-checkbox value="b">Ajuda os colegas se necessario</b-form-checkbox>
            <b-form-checkbox value="c">Pede ajuda aos colegas se necessario</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 4 -->
     

        <!-- Questão 5 -->
        <b-form-group label="1.4 - Como os colegas avaliam a comunicação do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group 
            plain
            v-model="rcom5"
            class="pt-2" >
            <b-form-radio value="a">Comunicativo</b-form-radio>
            <b-form-radio value="x">Neutro</b-form-radio>
            <b-form-radio value="y">Pouco comunicativo</b-form-radio>
            <b-form-radio value="z">Sem comunicação com a equipe</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 6 -->
         
      
      </div>

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none " id="el2">
        
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 2: Desempenho em projetos
          </h2>
          <hr style="margin-top: 8px; margin-bottom: 24px;">
        </div>

        <!-- Questão 1 -->
        <b-form-group label="2.1 Durante o desenvolvimento do projeto, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3"  
        >
          <b-form-checkbox-group  align="left" 
            group-margin = "1rem" 
            id="comunicacao-cb-1"
            v-model="cbdes1"
            stacked class="pl-3"
            >
            <b-form-checkbox value="a">Produz um código bem estruturado</b-form-checkbox>
            <b-form-checkbox value="b">Analisa e segue a documentação</b-form-checkbox>
            <b-form-checkbox value="c">foca nas prioridades estabelecidas em reunião/sprint</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 2 -->
        <b-form-group label="2.2 Durante os testes e controle de versões, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3"  
        >
          <b-form-checkbox-group  align="left" 
            group-margin = "1rem" 
            id="comunicacao-cb-1"
            stacked class="pl-3"
            v-model="cbdes2">
            <b-form-checkbox value="a">reporta bugs de imediato</b-form-checkbox>
            <b-form-checkbox value="b">atua para resolver os bugs imediatamente</b-form-checkbox>
            <b-form-checkbox value="c">preenche os relatório de bugs</b-form-checkbox>
            <b-form-checkbox value="d">mantém um controle de versões</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="2.3 - Em relação as metas estabelecidas do projeto, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rdes3"
            class="pt-2">
            
              <b-form-radio value="a">Atinge as metas integralmente</b-form-radio>
              <b-form-radio value="x">Atinge as metas com dificuldade e insistência</b-form-radio>
              <b-form-radio value="y">Não atinge as metas estabelecidas</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        
        <!-- Questão 4 -->
        <b-form-group label="2.4 - No quesito de entregas e resultados, o funcionario preza pela..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
          v-model="rdes4"
            class="pt-2">
              <b-form-radio value="a">Velocidade</b-form-radio>
              <b-form-radio value="b">Qualidade</b-form-radio>
              <b-form-radio value="c2">Ambos Valores</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        
        <!-- Questão 5 -->
       
      </div>

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none " id="el3">
        
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 3: Adesão a Normas e comportamento
          </h2>
          <hr style="margin-top: 8px; margin-bottom: 24px;">
        </div>

        <!-- Questão 1 -->
        <b-form-group label="3.1 - Em relação as normas da empresa, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
          v-model="rnor1"
            class="pt-2">
            <b-form-radio value="1">É de acordo</b-form-radio>
            <b-form-radio value="0">É oposto</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 2 -->
         <b-form-group label="3.2 - Em relação aos valores da empresa, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rnor2"
            class="pt-2">
            <b-form-radio value="1">É de acordo</b-form-radio>
            <b-form-radio value="0">É oposto</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="3.3 - Selecione os itens que se relacionam com o comportamento do funcionario" 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3"  
        >
          <b-form-checkbox-group  align="left" 
            group-margin = "1rem" 
            id="comunicacao-cb-1"
            stacked class="pl-3"
            v-model="cbnor3">
             <b-form-checkbox value="a">Formal</b-form-checkbox>
              <b-form-checkbox value="b">Adequeado</b-form-checkbox>
              <b-form-checkbox value="c">responsavel</b-form-checkbox>
              <b-form-checkbox value="d">ativo</b-form-checkbox>
              <b-form-checkbox value="e">objetivo</b-form-checkbox>
              <b-form-checkbox value="f">dinamico</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        
        <!-- Questão 4 -->
        <b-form-group label="3.4 - Como você avalia, por fim, o comportamento do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rnor4"
            class="pt-2">
            <b-form-radio value="2a">Satisfatório</b-form-radio>
            <b-form-radio value="x">Dentro do esperado</b-form-radio>
            <b-form-radio value="y">Insatisfatório</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>

      <!-- PARTE 4 -->
      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none " id="el4">
        
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 4: Velocidade e horario de trabalho
          </h2>
          <hr style="margin-top: 8px; margin-bottom: 24px;">
        </div>

        <!-- Questão 1 -->
        <b-form-group label="4.1 - Em relação aos prazos, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rh1"
            class="pt-2">
            <b-form-radio value="2a">Cumpre sem problemas</b-form-radio>
            <b-form-radio value="x">Entrega com pequenos atrasos</b-form-radio>
            <b-form-radio value="y">Entrega com grandes atrasos</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 2 -->
         <b-form-group label="4.2 - Em relação ao horario de trabalho, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rh2"
            class="pt-2">
            <b-form-radio value="2">Respeita os horarios</b-form-radio>
            <b-form-radio value="0">Não respeita</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="4.3 - Em relação ao horario de reuniões, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rh3"
            class="pt-2">
              <b-form-radio value="2">Respeita os horarios</b-form-radio>
              <b-form-radio value="0">Não respeita</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 4 -->
           

        <!-- Questão 5 -->
       
        
        <!-- Questão 6 -->
        <b-form-group label="4.4 - Como você avalia, por fim, o comportamento do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            v-model="rh6"
            class="pt-2">
            <b-form-radio value="2a">Rapido</b-form-radio>
            <b-form-radio value="2b">Dentro do esperado</b-form-radio>
            <b-form-radio value="0">Lento</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <div class="w-100 text-left mt-2 pl-2" > 
          <hr style="margin-top: 8px; margin-bottom: 24px;">
        </div>
      <b-button variant="primary" @click="onSubmit(employee)">Registrar funcionario</b-button>
      <b-button variant="danger"  @click="onReset" class="mx-2">Limpar</b-button>
      </div>
            
      
      </div>
    </div>
    </b-form>
  </div>
</template>

<script>

export default{
  data(){
    return {
      employee: {
        nome: "",
        departamento: "",
        eval: { comp1: 0, comp2: 0, comp3: 0, comp4: 0 },
      },
      
      cbcom1: [],
      cbcom2: [],
      cbcom3: [],
      rcom5: "",

      cbdes1: [],
      cbdes2: [],
      rdes3: "",
      rdes4: "",

      rnor1: "",
      rnor2: "",
      cbnor3: [],
      rnor4: "",

      rh1: "",
      rh2: "",
      rh3: "",
      rh6: ""
    }
  },
  methods: {
    onSubmit(employee){
      var soma = {
          com1: this.cbcom1.length,
          com2: [],
          com3: [],
          com4: (this.rcom5 === 'a') ? 1: 0,

          des1: [],
          des2: [],
          des3: "",
          des4: "",

          nor1: "",
          nor2: "",
          nor3: [],
          nor4: "",

          h1: "",
          h2: "",
          h3: "",
          h6: ""
      }
      console.log(soma.com1)
      console.log(soma.com4);

      var item = {
        username: this.$route.params.username,
        employee: {
          nome: employee.nome,
          departamento: employee.departamento,
          eval: {
            comp1: employee.eval.comp1, 
            comp2: employee.eval.comp2, 
            comp3: employee.eval.comp3, 
            comp4: employee.eval.comp4
            }
        }
      }
      console.log(this.$route.params.username)
      this.$store.dispatch('adicionaFuncionario', item)
    },
    onReset(){
      this.cbcom1 = []//4
      this.cbcom2= []//3
      this.cbcom3= []//3
      this.rcom5= ""//5

      this.cbdes1= []//5
      this.cbdes2= []//4
      this.rdes3= ""//3
      this.rdes4= ""//3

      this.rnor1= ""//2
      this.rnor2= ""//2
      this.cbnor3 = []//6
      this.rnor4 = ""//5

      this.rh1 =""//3
      this.rh2 =""//2
      this.rh3 = ""//2
      this.rh6 = ""//3
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
  background-color: #2c3e50;
  background-size: auto;
}
#scrollToDropdown {
  
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
  opacity: 0.7;
}

.container-fluid{
  overflow: hidden;
}
</style>