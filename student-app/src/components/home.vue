<template>
<div>
<header/>
    <h1>Hello {{ name }},Welcome to student home page!!!!!!!!</h1>
    <table border="1">
        <tr>
            <td>id</td>
            <td>name</td>
            <td>phone</td>
            <td>address</td>
        </tr>    
        <tr v-for="item in student" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.address}}</td>
            <td>
                <router-link :to="'/update/'+item.id">update</router-link>
            <button v-on:click="deletestudent(item.id)">delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import header from './header.vue'
import axios from 'axios'
export default{
    name:'home',
    data(){
        return{
            name:'',
            student:[],
        }
    },
    components:{
        header
    },
    methods:{
        async deletestudent(id){
             let result = await axios.delete("http://localhost:3000/student/"+id);
             console.warn(result)
             if(result.status==200)
             {
                 this.loaddata();
             }  
        },
        async loaddata(){
            let user = localStorage.getItem('user-info');
 this.name= JSON.parse(user).name;
 if(!user)
 {
    this.$router.push({name:'signUp'})
 }
 let result = await axios.get("http://localhost:3000/student");
 console.warn(result)
        }
    },
async mounted()
{
    this.loaddata();
}
}
</script>
<style>
td{
width:160px;
height:40px
}
</style>