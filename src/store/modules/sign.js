//현재 모달의 상태(회원가입, 로그인)을 관리하는 vuex
export default{
    namespaced: true,
    state: {
        signState: 0,
        signUpState: [
            {name : "signUp", state : true},
            {name : "selectTag", state : false}
        ]
    },
    getters: {
        getSignState( state ){
            return state.signState;
        },
        getSignUpState( state ){
            return state.signUpState;
            
        }
    },
    mutations: {
        setSignState( state, payload ){
            state.signState = payload;
        },
        setSignUpState( state, payload ){
            state.signUpState.forEach(value =>{
                value.state = false;

                if(value.name === payload){
                    value.state = true;
                }
            }) 
        }
    }
}