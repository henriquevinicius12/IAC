<template>
    <div>
        
        <br>
        <br>
        <div class="container-fluid">
            <router-link to="/performance-survey"> Go to performance survey</router-link>
            <br>
            <br>
            <router-link to="/profile-page">Go To profile page</router-link>
             <br>
                <h1>{{ employees.forname }}</h1>
            <br>

            <b-table small striped hover :items="employees" :fields="fields" @row-clicked="clickRowHandler">
                <template slot='nome' slot-scope="data">
                    {{ data.value.forname.charAt(0).toUpperCase() }}. {{data.value.surname}}
                </template>
                <b-button size="sm" @click="console.log(environment.item)">Details</b-button>
            </b-table>
            <div class="container">
                <componentelista :parentData="employees" />
                <br>
            </div>
        </div>
       
        <router-view></router-view>
    

    </div>
</template>

<script>
import componentelista from './ComponenteLista';

export default {
    name: "employeelist",
    components: {
        componentelista
    },
    data(){
        return{
            isLogged: false,
            fields:[
                {key: 'nome', label: 'Nome', sortable: true},
                {key: `Departamento`, label: "Departamento", sortable: true},
                {key: `Cargo`, label: "Cargo", sortable: true},
                {key: `eval.competencia1`, label: "comp1", sortable: true},
                {key: `eval.competencia2`, label: "comp2", sortable: true},
                {key: `eval.competencia3`, label: "comp3", sortable: true},
                {key: `eval.competencia4`, label: "comp4", sortable: true}
                ],
            employees:[
                {
                id: 0,
                nome: {forname: "vini", surname:"henri"},
                age: 0,
                sector: "a",
                jobTitle: "a",
                email:"a",
                phoneNumber: "a",            
                eval:{competencia1:"a", competencia2:"a", competencia3:"a", competencia4:"a"},
                }
            ],

            users:[
                {
                _id: 0,
                forname:"",
                surname:"",
                age: 0,
                sector: "",
                jobTitle: "",
                email:"",
                phoneNumber: ""
                }
            ],
        }
    },
        methods: {
            encurta: function(forname, surname){
                return forname.charAt(0).toUpperCase() + ". " + surname;
            },
            clickRowHandler: function(record, index){
                return console.log(record.nome.surname)
            }
        }
}
</script>

<style scoped>
.container-fluid{
    background-color: white;
}
</style>
