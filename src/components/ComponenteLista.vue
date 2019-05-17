<template>

    <div>
            <ul>
                <li class="ufa" v-for="(value, name) in employees" >
                    {{ value }}  wda- {{ name }}
                </li>
            </ul>
        
    </div>

</template>

<script>
export default {
    data(){
        return {employees: this.parentData}
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
