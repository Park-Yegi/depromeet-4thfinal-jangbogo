export default{
    namespaced : true,
    state: {
        email : '', 		  	 // 유저가 입력한 이메일
		isValidEmail : false, 	 // 해당 이메일 유효체크
		password : '', 		  	 // 유저가 입력한 비밀번호
		isValidPassword : false, // 해당 비밀번호 유효체크
        passwordCheck : '',   	 // 비밀번호 재입력
        isPasswordCheckSame : false,// 재입력 비밀번호 체크
    },
    getters: {
        getEmail(state){
            return state.email;
        },
        getIsValidEmail(state){
            return state.isValidEmail;
        },
        getPassword(state){
            return state.password;
        },
        getPasswordCheck(state){
            return state.passwordCheck;
        },
    },
    mutations: {
        setEmail( state, payload ){
            state.email = payload;
        },
        setPassword( state, payload ){
            state.password = payload;
        },
        setPasswordCheck( state, payload ){
            state.passwordCheck = payload;
        },
        checkEmailValid( state ){
            //아이디 체크 정규표현식 (숫자, 영문조합 10~15자)
            let reg = new RegExp("^[a-z0-9_-]{6,10}$");
            
            if(reg.test(state.email)){
                console.log("email is vaild")
                state.isValidEmail = true;
            }else{
                console.log("email is not vaild")
                state.isValidEmail = false;
            }
        },
        checkPasswordVaild( state ){
            //password 정규표현식 (숫자, 영문조합 10~15자)
            //TODO - 정규표현식 수정
            let reg = new RegExp("^[a-z0-9_-]{6,10}$");
            
            if(reg.test(state.password)){
                console.log("password is vaild")
                state.isValidPassword = true;
            }else{
                console.log("password is not vaild")
                state.isValidPassword = false;
            }
        },
        checkPasswordSame( state ){
            if(state.password === state.passwordCheck){
                state.isPasswordCheckSame = true
            }else{
                state.isPasswordCheckSame = false;
            }
        }, 
        checkAllFormValid(state){
            //TODO
            //빈칸 검사
            //이메일 길이
            //PW 길이 및 PWCHECK와 같은지
            alert('checkAllForm')
            if(!state.isValidEmail){
				alert("check your email");
			    return false;
			}
		    if(!state.isValidPassword){
			    alert("check your password");
			    return false;
		    }
			if(!state.isPasswordCheckSame){
				alert("passwordCheck is not same");
			    return false;
			}
            return true;
        }
    },
    actions: {
        //Todo : 서버에서 해당 아이디가 존재하는지 체크
        postUserInfoToServer ( context )
        {
            if(context.commit('checkAllFormValid'))
            {
                console.log('all form are valid')
                let baseURI = 'http://52.78.159.170/auth/join/';
                let data = {
                	"uid" : context.state.email,
                	"password" : context.state.password,
                	"gender" : "male",
                	"address" : "경기도 수원시",
                	"age" : 23,
                	"shoppingType" : ["맥주", "안주"],
                	"nickname" : "test nickname"
                };
            
                // axios.post(baseURI, JSON.stringify(data), {
                //   headers :
                //   {
                // 	'Content-Type': 'application/json'
                //   }
                // })
                // .then((result) => {
                // 	console.log("success")
                // 	console.log(result)

                // })
                // .catch((error) => {
                //   	console.log("fail")
                // 	console.log(error)
                // })
            }else{
                console.log('all form are not valid')
            }
        }
    }
}