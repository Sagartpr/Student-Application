<template>
<div>
<header/>
    <h1>Hello student,Welcome to update student page!!!!!!!!</h1>
    <form class="update">
    <input type="text" name="name" placeholder="enter name" v-model ="student.name"/>
    <input type="text" name="address" placeholder="enter address" v-model ="student.address"/>
    <input type="text" name="contact" placeholder="enter contact" v-model ="student.contact"/>
    <button type="button" v-on:click="updatestudent">update student</button>
    </form>
</template>
<script>
import header from './header.vue'
import axios from 'axios';
export default{
    name:'update',
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
        async updatestudent(){
            console.warn(this.student)
            const result = await axios.put("http://localhost:3000/student/"+this.$route.params.id,{
                name:this.student.name,
                address:this.student.address,
                contact:this.student.contact,
            });
            if(result.status==200)
            {
                this.$router.push({name:'home'});
            }
        }
    },
async mounted()
{
 let user = localStorage.getItem('user-info');
 if(!user)
 {
    this.$router.push({name:'signUp'})
 }
 const result = await axios.get('http://localhost:3000/student/'+this.$route.params.id)
 //console.warn(this.$route.params.id)
 console.warn(result.data)
 this.student=result.data
}
}
</script>