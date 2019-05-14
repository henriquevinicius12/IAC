<template>
    <div>
        
        <br>
        <br>
        <div class="container-fluid">
            <router-link to="/performance-survey"> Go to performance survey</router-link>
            <br>
            <router-link to="/profilepage">Go To profile page</router-link>
        </div>
          
        <router-view></router-view>
    

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container-fluid{
    background-color: white;
}
</style>
