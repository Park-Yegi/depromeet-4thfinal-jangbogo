import axios from 'axios';

export default{
    namespaced: true,
    state: {
        email: '',
        isValidEmail: false,
        password: '',
        isValidPassword: false,
        isAllFormVaild: false,
    },
    getters: {
        getEmail( state ){
            return state.email;
        },
        getPassword( state ){
            return state.password;
        },
        getEmailFormFull( state ){
            return state.isEmailFormFull;
        },
        getPaswordFormFull( state ){
            return state.isPasswordFormFull;
        }   
    },
    mutations: {
        setEmail( state, payload ){
            state.email = payload;
        },
        setPassword( state, payload ){
            state.password = payload;
        },
        checkEmailValid( state ){
            let reg = new RegExp("^[a-z0-9_-]{1,}$");
            
            if(reg.test(state.email)){
                console.log("email is vaild")
                state.isValidEmail = true;
            }else{
                console.log("email is not vaild")
                state.isValidEmail = false;
            }
        },
        checkPasswordVaild( state ){
            let reg = new RegExp("^[a-z0-9_-]{1,}$");
            
            if(reg.test(state.password)){
                console.log("password is vaild")
                state.isValidPassword = true;
            }else{
                console.log("password is not vaild")
                state.isValidPassword = false;
            }
        },
        checkSignInFormValid(state){
            if(!state.isValidEmail){
				alert("check your email");
			    return false;
			}
		    if(!state.isValidPassword){
			    alert("check your password");
			    return false;
            }
            state.isAllFormVaild = true;
        },
        initSignInState(state){
            state.email= '';
            state.isValidEmail= false;
            state.password= '';
            state.isValidPassword= false;
            state.isAllFormVaild= false;
        }
    }, 
    actions: {
        // 로그인 server api call
        postSignInToServer ( context ){
            console.log('postSignInToServer')
            context.commit('checkSignInFormValid');

            //유저 로그인을 위한 server api call
            console.log('all form are valid')
            let baseURI = 'http://52.78.159.170/auth/login';
            let data = {
                "uid" : context.state.email,
                "password" : context.state.password,
            };    
            axios.post(baseURI, JSON.stringify(data), {
                headers :
                {
                'Content-Type': 'application/json'
                }
            })
            .then((result) => {
                console.log("success")
                console.log(result)
            })
            .catch((error) => {
                console.log("fail")
                console.log(error)
            })
        }
    }
}