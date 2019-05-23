<template>
  <div id="y">  
    
    <div class="container-fluid vertical-center p-md-5">
      <div class="container">
        <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        <h1 class="mb-3 font-weight-bold">Avaliação de Desempenho</h1>

        <br>

        <b-form-group label="Insira o nome do Funcionario" 
        label-align="center" label-size="lg" label-class="font-weight-normal pt-0 pl-3 pb-0"  
        >
          <b-form-input v-model="text"></b-form-input>
        </b-form-group>
        <b-form-group label="Insira o departamento do Funcionario" 
        label-align="center" label-size="lg" label-class="font-weight-normal pt-0 pl-3 pb-0"  
        >
          <b-form-input v-model="text"></b-form-input>
        </b-form-group>


        </div>
      
        
      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 1: Comunicação</h2>
          <hr style="margin-top: 8px; margin-bottom: 8px;">
        </div>
        
        <!-- Questão 1 -->
        <b-form-group label="1.1 Durante as reuniões, o funcionario...." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group  align="left" 
            id="comunicacao-cb-1"
            v-model="selected"
            :options="['fala no geral sobre o projeto',
              'fala com o colegas sobre o projeto',
              'age de maneira formal',
              'tem uma posição corporal aberta ao dialogo']"
            name="flavour-1"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
       
        <!-- Questão 2 -->
        <b-form-group label="1.2 - Durante os sprints, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group  align="left" 
            class="pt-2"
            id="comunicacao-cb-2"
            v-model="selected"
            :options="['expõe suas dificuldades no projeto',
            'tenta ajudar os colegas com dificuldade',
            'fala de forma sucinta e breve']"
            name="flavour-1"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="1.3 - Durante o trabalho de desenvolvimento, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group align="left"
            id="comunicacao-cb-2"
            v-model="selected"
            :options="['conversa com os colegas',
              'ajuda os colegas se necessario','pede ajuda aos colegas se necessario']"
            name="flavour-1"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 4 -->
        <b-form-group label="1.4 - Quais são as caracteristicas do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-textarea
            id="textarea-no-resize"
            placeholder="Fixed height textarea"
            rows="2"
            no-resize
          ></b-form-textarea>
        </b-form-group>

        <!-- Questão 5 -->
        <b-form-group label="1.5 - Como os colegas avaliam a comunicação do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Muito comunicativo', 'Comunicativo', 'Neutro','Pouco comunicativo', 'Sem comunicação com a equipe']"
          ></b-form-radio-group>
        </b-form-group>

        <!-- Questão 6 -->
        <b-form-group label="1.6 - Como você avalia, por fim, o funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            
            class="pt-2"
            :options="['Muito comunicativo', 'Comunicativo', 'Neutro','Pouco comunicativo', 'Sem comunicação com a equipe']"
          ></b-form-radio-group>
        </b-form-group>      
      
      </div>

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 2: Desempenho em projetos
          </h2>
          <hr style="margin-top: 8px; margin-bottom: 8px;">
        </div>

        <!-- Questão 1 -->
        <b-form-group label="2.1 Durante o desenvolvimento do projeto, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group  align="left" 
            group-margin = "1rem" 
            id="comunicacao-cb-1"
            v-model="selected"
            :options="['produz um código limpo','produz um código bem estruturado',
              'analisa e segue a documentação',
              'foca nas prioridades estabelecidas em reunião/sprint',
              'segue padrões de boas praticas']"
            name="flavour-1"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 2 -->
        <b-form-group label="2.3 Durante os testes e controle de versões, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group  align="left" 
            group-margin = "1rem" 
            id="comunicacao-cb-1"
            v-model="selected"
            :options="['reporta bugs de imediato ',
              'atua para resolver os bugs imediatamente',
              'preenche os relatório de bugs',
              'mantém um controle de versões']"
            name="flavour-1"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="2.3 - Em relação as metas estabelecidas do projeto, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Atinge as metas integralmente',
              'Atinge as metas com dificuldade e insistência',
              'Não atinge as metas estabelecidas']"
          ></b-form-radio-group>
        </b-form-group>

        
        <!-- Questão 4 -->
        <b-form-group label="2.4 - No quesito de entregas e resultados, o funcionario preza pela..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Velocidade','Qualidade','Ambos valores']"
          ></b-form-radio-group>
        </b-form-group>

        
        <!-- Questão 5 -->
        <b-form-group label="2.5 - Como você avalia, por fim, o desempenho do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Excelente','Satisfatório','Dentro do esperado','Insatisfatório','Ruim']"
          ></b-form-radio-group>
        </b-form-group>
      </div>

      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 3: Adesão a Normas e comportamento
          </h2>
          <hr style="margin-top: 8px; margin-bottom: 8px;">
        </div>

        <!-- Questão 1 -->
        <b-form-group label="3.1 - Em relação as normas da empresa, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['É de acordo','É oposto']"
          ></b-form-radio-group>
        </b-form-group>

        <!-- Questão 2 -->
         <b-form-group label="3.2 - Em relação aos valores da empresa, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['É de acordo','É oposto']"
          ></b-form-radio-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="3.3 - Selecione os itens que se relacionam com o comportamento do funcionario" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-checkbox-group  align="left" 
            group-margin = "1rem" 
            id="comunicacao-cb-1"
            v-model="selected"
            :options="['formal','adequeado','responsavel','ativo','objetivo','dinamico']"
            name="flavour-1"
            stacked
          ></b-form-checkbox-group>
        </b-form-group>
        
        <!-- Questão 4 -->
        <b-form-group label="3.4 - Como você avalia, por fim, o comportamento do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Excelente','Satisfatório','Dentro do esperado','Insatisfatório','Ruim']"
          ></b-form-radio-group>
        </b-form-group>
      </div>

      <!-- PARTE 4 -->
      <div class="survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ">
        
        <div class="w-100 text-left mt-2 pl-2 " > 
          <h2 class="pb-2 mt-3 mb-3" style="font-weight:500;">Seção 4: Velocidade e horario de trabalho
          </h2>
          <hr style="margin-top: 8px; margin-bottom: 8px;">
        </div>

        <!-- Questão 1 -->
        <b-form-group label="4.1 - Em relação aos prazos, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Cumpre sem problemas','Entrega com pequenos atrasos','Entrega com grandes atrasos']"
          ></b-form-radio-group>
        </b-form-group>

        <!-- Questão 2 -->
         <b-form-group label="4.2 - Em relação ao horario de trabalho, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Respeita os horarios','Não respeita']"
          ></b-form-radio-group>
        </b-form-group>

        <!-- Questão 3 -->
        <b-form-group label="4.3 - Em relação ao horario de reuniões, o funcionario..." 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Respeita os horarios','Não respeita']"
          ></b-form-radio-group>
        </b-form-group>

        <!-- Questão 4 -->
        <b-form-group label="4.4 - Quantas horas o funcionario trabalhou em seu ultimo projeto?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-textarea
            id="textarea-no-resize"
            placeholder="Digite somente o numero de horas"
            rows="1"
            no-resize
          ></b-form-textarea>
        </b-form-group>        

        <!-- Questão 5 -->
        <b-form-group label="4.5 - Quantas horas o funcionario gastou com problemas externos (estrutura, comunicação, burocracia, falhas...) em seu ultimo projeto?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0"  
        >
          <b-form-textarea
            id="textarea-no-resize"
            placeholder="Digite somente o numero de horas"
            rows="1"
            no-resize
          ></b-form-textarea>
        </b-form-group>
        
        <!-- Questão 6 -->
        <b-form-group label="4.6 - Como você avalia, por fim, o comportamento do funcionario?" 
        label-align="left" label-size="lg" label-class="font-weight-bold pt-0 pl-3 pb-0">
          <b-form-radio-group plain
            class="pt-2"
            :options="['Rapido','Dentro do esperado','Lento']"
          ></b-form-radio-group>
        </b-form-group>
      </div>

      
      <b-button variant="success" id="btnPrint" onclick="window.print(y);">Imprimir</b-button>
      <b-button variant="info" >Limpar</b-button>

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