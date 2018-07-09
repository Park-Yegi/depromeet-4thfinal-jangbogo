<template>
    <div>
        <button v-on:click="turnOnModal(0)" style="width:100px; height:100px;">회원가입</button>
        <button v-on:click="turnOnModal(1)" style="width:100px; height:100px;">로그인</button>
        <span><router-link v-bind:to="{ name: 'Chat' }">Chat</router-link></span>
        
        <SignModal v-on:turnOffModal="turnOffModal"  
                   v-if="showModal">   
        </SignModal>
                   <!-- @close="turnOffModal" -->
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import SignModal from './SignModal.vue'

export default {
    data(){
        return{
            showModal : false,  
        }
    },
    methods:{
        ...mapMutations('sign',{
            setSignState : 'setSignState'
        }),
        ...mapMutations('signin',{
            stateInit : 'stateInit'
        }),
        turnOffModal(){
            this.showModal = false;
            this.stateInit();
        },
        turnOnModal(state){
            this.showModal = true;
            this.setSignState(state);
        },
    },
    components:{
        SignModal
    }
}
</script>

<style scope>

</style>
