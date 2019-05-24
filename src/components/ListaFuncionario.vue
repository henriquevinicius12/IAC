<template>
    <div class="shadow bg-white rounded col-md-8 container p-1 my-5">
        
        <!-- <div class="container">
            <router-link to="/performance-survey" v-on:emitando="Pega($event)">Go to performance survey</router-link>
            <br>
            <router-link to="/profilepage">Go To profile page</router-link>
        </div>
          
        <router-view v-on:emitando="Pega($event)"></router-view> -->
        <b-table striped hover :items="employees" :fields="fields">       
                
        </b-table>
       
        <!-- fazer lista aqui na ficha de avaliacao vc vai colocar o nome e o departamento e resolver
        os dados entao serao mandados pra ca, 4 competencias, comunicacao, desempenho em projetos, 
        adesao a normas e comportamento, velocidade e horario de trabalho -->

    </div>
</template>

<script>
import { store } from '../main'

export default {
    data(){
        return{
            fields:[
                {key: 'nome', label: 'Nome', sortable: true},
                {key: `departamento`, label: "Departamento", sortable: true},
                {key: `eval.comp1`, label: "Comunicação", sortable: true},
                {key: `eval.comp2`, label: "Desempenho em projetos", sortable: true},
                {key: `eval.comp3`, label: "Adesão à normas e comportamentos", sortable: true},
                {key: `eval.comp4`, label: "Velocidade e horário de trabalho", sortable: true}
                ],
        }
    },
    computed: {
        employees(){
            return this.$store.state.employees
        }
    }
   

}
</script>

<style scoped>

.container-fluid{
    background-color: white;
}
</style>
