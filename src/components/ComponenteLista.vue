<template>

    <div>
        <div>{{ employees }}</div>
        <input type="text" v-model="texto" @click="employees.push(texto)">
        <div>{{ this.texto }}</div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            employees: this.parentData,
            texto: `texto`
            }
    },
    props:{
        parentData: Array
    },
    methods:{
        mouseOver: function(){
            return isHover
        }
    }
}
</script>

<style scoped>
    .ufa:hover{

         box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);
    }
</style>
