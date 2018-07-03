<template>
    <div>
        <button v-on:click="signup" style="width:100px; height:100px;"></button>
        <!-- <span><router-link v-bind:to="{ name: 'counter-page' }">Counter</router-link></span> -->
        
        <SignModal v-if="showModal" @close="showModal = false">
            
        </SignModal>
    </div>
</template>

<script>
import SignModal from './SignModal.vue'

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
        SignModal
    }
}
</script>

<style scope>

</style>
