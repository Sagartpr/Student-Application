<template>
<div class="nav">
    <router-link href="/">home</router-link>
    <router-link href="/add">add student</router-link>
    <a v-on:click="logout" href="#">logout</a>
</div>
</template>

<script>
export default {
    name:'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'login'})
        }
     }
    }
</script>
<style>
.nav{
    background-color:#333;
    overflow:hidden;
}
.nav a {
    float:left;
    color:#fff;
    padding:14px 16px;
    text-align:center;
    font-size:17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background:#ddd;
    color:#333;
}
</style>