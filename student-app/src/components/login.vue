<template>
<div>
<img class ="logo" src="/vanila/School.png"/>
<h1>STUDENT LOGIN PAGE</h1>
    <div class="login">
        <input type ="text" v-model="email" placeholder="enter email" />
        <input type ="password" v-model="password" placeholder="enter password" />
        <button v-on:click="login">LOGIN</button>
        <p>
            <router-link to="/signUp" >signUp</router-link>
        </p>
     </div>   
</template>
<script>
import axios from 'axios'
export default {
    name:'login',
    data()
    {
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login()
        {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)   
            if(result.status==200 && result.data.length>0);
            {
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'home'})
            }
        }
    },
        mounted()
{
 let user = localStorage.getItem('user-info');
 if(!user)
 {
    this.$router.push({name:'home'})
 }
}
}
</script>

<style>
.logo{
    width:100px
}
.register input{
    width:10px;
    height:50px;
    padding-left: 20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    border:1px solid blue;
}
.register button{
    width:10px;
    height:50px;
    padding-left: 20px;
    display:block;
    background:blue;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    color: aquamarine;
    border:1px solid blue;
    cursor:pointer;
}

</style>