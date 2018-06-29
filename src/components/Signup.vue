<template>
    <div>
        <h1>{{getEmail}}</h1>
        <h1>{{getPassword}}</h1>
        <span><input type="text" v-model="email"></span>
        <span><input type="text" v-model="password"></span>
        <span><input type="text" v-model="passwordCheck"></span>
        <button v-on:click="postUserInfoToServer" style="width:100px; heihgt:30px;"></button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    computed: {
        email: {
            get(){ return this.$store.getters["signup/getEmail"]; },
            set( value ){ 
                this.$store.commit("signup/setEmail", value); 
                this.$store.commit("signup/checkEmailValid");
            }
        },
        password: {
            get(){ return this.$store.getters["signup/getPassword"]; },
            set( value ){
                this.$store.commit("signup/setPassword", value); 
                this.$store.commit("signup/checkPasswordVaild");
            }
        },
        passwordCheck: {
            get(){ return this.$store.getters["signup/getPasswordCheck"]},
            set( value ){
                this.$store.commit("signup/setPasswordCheck", value);
                this.$store.commit("signup/checkPasswordSame")
            }
        },
        ...mapGetters("signup", {
            getEmail: "getEmail",
            getPassword: "getPassword",
        })
    },
    methods:{
        ...mapActions("signup", {
            postUserInfoToServer : 'postUserInfoToServer'
        })
    }
}
</script>

<style>

</style>

