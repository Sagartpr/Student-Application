<template>
<div>
<header/>
    <h1>Hello student,Welcome to add student page!!!!!!!!</h1>
    <form class="add">
    <input type="text" name="name" placeholder="enter name" v-model ="student.name"/>
    <input type="text" name="address" placeholder="enter address" v-model ="student.address"/>
    <input type="text" name="contact" placeholder="enter contact" v-model ="student.contact"/>
    <button type="button" v-on:click="addstudent">Add new student</button>
    </form>
</template>
<script>
import header from './header.vue'
export default{
    name:'add',
    components:{
        header
    },
    data()
    {
        return{
            student :{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
        async addstudent()
        {
            console.warn(this.student)
            const result = await axios.post("http://localhost:3000/student",{
                name:this.student.name,
                address:this.student.address,
                contact:this.student.contact,
            });
            if(result.status==201)
            {
                this.$router.push({name:'home'});
            }
            console.warn("result",result)
        }
    },
mounted()
{
 let user = localStorage.getItem('user-info');
 if(!user)
 {
    this.$router.push({name:'signUp'})
 }
}
}
</script>

<style>
.add input{
    width:10px;
    height:50px;
    padding-left: 20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    border:1px solid blue;
}
.add button{
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

