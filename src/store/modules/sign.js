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
            // state.signUpState.forEach(value, index => {
            //     if(value.state === true){
            //         return state.signUpState[index].name;
            //     }
            // });
        }
    },
    mutations: {
        setSignState( state, payload ){
            state.signState = payload;
        }
    }
}