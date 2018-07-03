<template>
    <div>
        <button v-on:click="signup" style="width:100px; height:100px;"></button>
        <!-- <span><router-link v-bind:to="{ name: 'counter-page' }">Counter</router-link></span> -->
        
        <Signup v-if="showModal" @close="showModal = false">
            
        </Signup>
    </div>
</template>

<script>
import Signup from './signup.vue'

export default {
    data(){
        return{
            showModal : false
        }
    },
    methods:{
        signup(){
            this.showModal = !this.showModal
        }
    },
    components:{
        Signup
    }
}
</script>

<style scope>

</style>
