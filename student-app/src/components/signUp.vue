<template>
<div>
<img class ="logo" src="/vanila/School.png"/>
<h1>STUDENT SIGNUP PAGE</h1>
    <div class="register">
        <input type ="text" v-model="name" placeholder="enter name" />
        <input type ="text" v-model="email" placeholder="enter email" />
        <input type ="password" v-model="password" placeholder="enter password" />
        <button v-on:click="signUp">SIGN-UP</button>
        <p>
            <router-link to="/login" >login</router-link>
        </p>
     </div>   
     </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'signUp',
    data()
    {
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
       async signUp()
        {
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            
            console.warn(result);
            if(result.status==201)
            {
                localStorage.setItem("user-info",JSON.stringify(result.data))
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