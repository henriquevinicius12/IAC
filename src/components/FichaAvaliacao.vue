<template>
  <div id="y">  
    
    <div class="container-fluid">
      <div class="container col-md-7">
        <div class="survey shadow p-3 mt-5 mb-5 bg-white rounded float-left float-lg-none ">
        <h1 class="mb-3 font-weight-bold">Avaliação de Desempenho</h1>
        
        <router-link to="/list">awdsadadswad</router-link>
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

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
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
            <b-form-checkbox value="1">Fala no geral sobre o projeto</b-form-checkbox>
            <b-form-checkbox value="2">Fala com o colegas sobre o projeto</b-form-checkbox>
            <b-form-checkbox value="3">Age de maneira formal</b-form-checkbox>
            <b-form-checkbox value="4">Tem uma posição corporal aberta ao dialogo</b-form-checkbox>
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
            <b-form-checkbox value="1">Expõe suas dificuldades no projeto</b-form-checkbox>
            <b-form-checkbox value="2">Tenta ajudar os colegas com dificuldade</b-form-checkbox>
            <b-form-checkbox value="3">Fala de forma sucinta e breve</b-form-checkbox>
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
            <b-form-checkbox value="1">Conversa com os colegas</b-form-checkbox>
            <b-form-checkbox value="2">Ajuda os colegas se necessario</b-form-checkbox>
            <b-form-checkbox value="3">Pede ajuda aos colegas se necessario</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 4 -->
        <b-form-group label="1.4 - Quais são as caracteristicas do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold"
        class="px-3"  
        >
          <b-form-textarea
            id="textarea-no-resize"
            placeholder="Fixed height textarea"
            rows="2"
            no-resize 
            v-model="tacom4"
          ></b-form-textarea>
        </b-form-group>

        <!-- Questão 5 -->
        <b-form-group label="1.5 - Como os colegas avaliam a comunicação do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group 
            plain
            v-model="rcom5"
            class="pt-2" >
            <b-form-radio value="1">Muito comunicativo</b-form-radio>
            <b-form-radio value="2">Comunicativo</b-form-radio>
            <b-form-radio value="3">Neutro</b-form-radio>
            <b-form-radio value="4">Pouco comunicativo</b-form-radio>
            <b-form-radio value="4">Sem comunicação com a equipe</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 6 -->
        <b-form-group label="1.6 - Como você avalia, por fim, o funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group 
            plain
            v-model="rcom6"
            class="pt-2">
            <b-form-radio value="1">Muito comunicativo</b-form-radio>
            <b-form-radio value="2">Comunicativo</b-form-radio>
            <b-form-radio value="3">Neutro</b-form-radio>
            <b-form-radio value="4">Pouco comunicativo</b-form-radio>
            <b-form-radio value="4">Sem comunicação com a equipe</b-form-radio>
          </b-form-radio-group>
        </b-form-group>      
      
      </div>

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
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
            <b-form-checkbox value="1">Produz um código limpo</b-form-checkbox>
            <b-form-checkbox value="2">Produz um código bem estruturado</b-form-checkbox>
            <b-form-checkbox value="3">Analisa e segue a documentação</b-form-checkbox>
            <b-form-checkbox value="4">foca nas prioridades estabelecidas em reunião/sprint</b-form-checkbox>
            <b-form-checkbox value="5">segue padrões de boas praticas</b-form-checkbox>
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
            <b-form-checkbox value="1">reporta bugs de imediato</b-form-checkbox>
            <b-form-checkbox value="2">atua para resolver os bugs imediatamente</b-form-checkbox>
            <b-form-checkbox value="3">preenche os relatório de bugs</b-form-checkbox>
            <b-form-checkbox value="4">mantém um controle de versões</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="2.3 - Em relação as metas estabelecidas do projeto, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rdes3"
            class="pt-2">
            
              <b-form-radio value="1">Atinge as metas integralmente</b-form-radio>
              <b-form-radio value="2">Atinge as metas com dificuldade e insistência</b-form-radio>
              <b-form-radio value="3">Não atinge as metas estabelecidas</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        
        <!-- Questão 4 -->
        <b-form-group label="2.4 - No quesito de entregas e resultados, o funcionario preza pela..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
          v-model="rdes4"
            class="pt-2">
              <b-form-radio value="1">Velocidade</b-form-radio>
              <b-form-radio value="2">Qualidade</b-form-radio>
              <b-form-radio value="3">Ambos Valores</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        
        <!-- Questão 5 -->
        <b-form-group label="2.5 - Como você avalia, por fim, o desempenho do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
          v-model="rdes5"
            class="pt-2">
            <b-form-radio value="1">Excelente</b-form-radio>
            <b-form-radio value="2">Satisfatório</b-form-radio>
            <b-form-radio value="3">Dentro do esperado</b-form-radio>
            <b-form-radio value="4">Insatisfatório</b-form-radio>
            <b-form-radio value="5">Ruim</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </div>

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
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
            <b-form-radio value="2">É oposto</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 2 -->
         <b-form-group label="3.2 - Em relação aos valores da empresa, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rnor2"
            class="pt-2">
            <b-form-radio value="1">É de acordo</b-form-radio>
            <b-form-radio value="2">É oposto</b-form-radio>
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
             <b-form-checkbox value="1">Formal</b-form-checkbox>
              <b-form-checkbox value="2">Adequeado</b-form-checkbox>
              <b-form-checkbox value="3">responsavel</b-form-checkbox>
              <b-form-checkbox value="4">ativo</b-form-checkbox>
              <b-form-checkbox value="5">objetivo</b-form-checkbox>
              <b-form-checkbox value="6">dinamico</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        
        <!-- Questão 4 -->
        <b-form-group label="3.4 - Como você avalia, por fim, o comportamento do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rnor4"
            class="pt-2">
            <b-form-radio value="1">Excelente</b-form-radio>
            <b-form-radio value="2">Satisfatório</b-form-radio>
            <b-form-radio value="3">Dentro do esperado</b-form-radio>
            <b-form-radio value="4">Insatisfatório</b-form-radio>
            <b-form-radio value="5">Ruim</b-form-radio>          
          </b-form-radio-group>
        </b-form-group>
      </div>

      <!-- PARTE 4 -->
      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
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
            <b-form-radio value="1">Cumpre sem problemas</b-form-radio>
            <b-form-radio value="2">Entrega com pequenos atrasos</b-form-radio>
            <b-form-radio value="3">Entrega com grandes atrasos</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 2 -->
         <b-form-group label="4.2 - Em relação ao horario de trabalho, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rh2"
            class="pt-2">
            <b-form-radio value="1">Respeita os horarios</b-form-radio>
            <b-form-radio value="2">Não respeita</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="4.3 - Em relação ao horario de reuniões, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pl-3">
          <b-form-radio-group plain
            v-model="rh3"
            class="pt-2">
              <b-form-radio value="1">Respeita os horarios</b-form-radio>
              <b-form-radio value="2">Não respeita</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- Questão 4 -->
        <b-form-group label="4.4 - Quantas horas o funcionario trabalhou em seu ultimo projeto?" 
        label-align="left" label-size="lg" label-class="font-weight-bold"
        class="px-3"  
        >
          <b-form-input
            v-int
            placeholder="Digite somente o numero de horas"
            rows="1"
            size="sm"
            no-resize 
            v-model="tah4"
          ></b-form-input>
        </b-form-group>        

        <!-- Questão 5 -->
        <b-form-group 
        label="4.5 - Quantas horas o funcionario gastou com problemas externos (estrutura, comunicação, burocracia, falhas...) em seu ultimo projeto?" 
        label-align="left" label-size="lg" label-class="font-weight-bold"
        class="px-3"  
        >
          <b-form-input
            v-int
            size="sm"
            placeholder="Digite somente o numero de horas"
            rows="1"
            no-resize 
            v-model="tah5"
          ></b-form-input>
        </b-form-group>
        
        <!-- Questão 6 -->
        <b-form-group label="4.6 - Como você avalia, por fim, o comportamento do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            v-model="rh6"
            class="pt-2">
            <b-form-radio value="1">Rapido</b-form-radio>
            <b-form-radio value="2">Dentro do esperado</b-form-radio>
            <b-form-radio value="3">Lento</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      <b-button variant="success" id="btnPrint" onclick="window.print(y) ;" class="mx-3">Imprimir</b-button>
      <b-button variant="info" @click="emitEvent(tah5)">Limpar</b-button>
      </div>
      <!-- testando as variaveis -->
      <!-- <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Respostas</h2>
          <hr style="margin-top: 8px; margin-bottom: 24px;">
          <p>{{cbcom1}}</p>
          <p>{{cbcom2}}</p>
          <p>{{cbcom3}}</p>
          <p>{{tacom4}}</p>
          <p>{{rcom5}}</p>
          <p>{{rcom6}}</p>
          <p>{{cbdes1}}</p>
          <p>{{cbdes2}}</p>
          <p>{{rdes3}}</p>
          <p>{{rdes4}}</p>
          <p>{{rdes5}}</p>
          <p>{{rnor1}}</p>
          <p>{{rnor2}}</p>
          <p>{{cbnor3}}</p>
          <p>{{rnor4}}</p>
          <p>{{rh1}}</p>
          <p>{{rh2}}</p>
          <p>{{rh3}}</p>
          <p>{{tah4}}</p>
          <p>{{tah5}}</p>
          <p>{{rh6}}</p>
        </div> 
        
      </div>-->
      </div>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return {
      employee: {
        nome: "",
        departamento: ""
      },
      eval: {

      },
      cbcom1: [],
      cbcom2: [],
      cbcom3: [],
      tacom4: "",
      rcom5: "",
      rcom6: "",
      cbdes1: [],
      cbdes2: [],
      rdes3: "",
      rdes4: "",
      rdes5: "",
      rnor1: "",
      rnor2: "",
      cbnor3: [],
      rnor4: "",
      rh1: "",
      rh2: "",
      rh3: "",
      tah4: "",
      tah5: "",
      rh6: ""
    }
  },
  methods: {
    emitEvent: function(data){
      console.log("entro na funcao e "+ data)
      this.$emit("emitando", data)
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


.container-fluid{
  overflow: hidden;
}
</style>