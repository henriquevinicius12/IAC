<template>
    <div>
        
        <br>
        <br>
        <div class="container-fluid">
            <router-link to="/performance-survey"> Go to performance survey</router-link>
            <br>
            <br>
            <router-link to="/profilepage">Go To profile page</router-link>
             <br>
                <h1>{{ employees.forname }}</h1>
            <br>
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
    components: {
        componentelista
    },
    data(){
        return{

            employees:[
                {
                id: 0,
                nome:{forname:"testando", surname:"haha"},
                age: 0,
                sector: "",
                jobTitle: "",
                email:"",
                phoneNumber: "",            
                eval:{competencia1:"", competencia2:"", competencia3:"", competencia4:""},
                isActive: true
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
            ]
        }
    }
}
</script>

<style scoped>
.container-fluid{
    background-color: white;
}
</style>
