import axios from 'axios';

export default{
    namespaced : true,
    state: {
        signState : 0,           // 0는 signup(회원가입), 1은 signin(로그인)
        email : '', 		  	 // 유저가 입력한 이메일
		isValidEmail : false, 	 // 해당 이메일 유효체크
		password : '', 		  	 // 유저가 입력한 비밀번호
		isValidPassword : false, // 해당 비밀번호 유효체크
        passwordCheck : '',   	 // 비밀번호 재입력
        isPasswordCheckSame : false,// 재입력 비밀번호 체크
        age : '',
        isValidAge : false,
        sex : false,             //0이면 여성, 1이면 남성, default 0
        postcode : '',
        roadAddress : '',
        jibunAddress : '',
        isAllFormVaild : false,
    },
    getters: {
        getSignState(state){
            return state.signState;
        },
        getEmail(state){
            return state.email;
        },
        getIsValidEmail(state){
            return state.isValidEmail;
        },
        getPassword(state){
            return state.password;
        },
        getIsValidPassword(state){
            return state.isValidPassword;
        },
        getPasswordCheck(state){
            return state.passwordCheck;
        },
        getIsPasswordCheckSame(state){
            return state.isPasswordCheckSame;
        },
        getAge(state){
            return state.age;
        },
        getIsValidAge(state){
            return state.isValidAge;
        },
        getSexState(state){
            return state.sex;
        },
        getPostcode(state){
            return state.postcode;
        },
        getRoadAddress(state){
            return state.roadAddress;
        },
        getJibunAddress(state){
            return state.jibunAddress
        },
        getIsAllFormValid(state){
            return state.isAllFormVaild;
        }
    },
    mutations: {
        setSignState( state, payload ){
            state.signState = payload;
        },
        setEmail( state, payload ){
            state.email = payload;
        },
        setPassword( state, payload ){
            state.password = payload;
        },
        setPasswordCheck( state, payload ){
            state.passwordCheck = payload;
        },
        setAge( state, payload ){
            state.age = payload;
        },
        setPostCode( state, payload){
            console.log("setPostCode call",payload)
            state.postcode = payload;
        },
        setRoadAddress( state, payload){
            console.log("setRoadAddress call",payload)
            state.roadAddress = payload;
        },
        setJibunAddress( state, payload){
            console.log("setJibunAddress call",payload)
            state.jibunAddress = payload;
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
        checkAgeValid( state ){
            //TODO - 정규표현식 수정 (앞자리 19, 20)
            let reg = new RegExp("^[0-9]{4}$");
            
            if(reg.test(state.age)){
                console.log("age is vaild")
                state.isValidAge = true;
            }else{
                console.log("age is not vaild")
                state.isValidAge = false;
            }
        },
        toggleFemale(state){
            if(state.sex != 0)
                state.sex = !state.sex;
        },
        toggleMale(state){
            if(state.sex != 1)
                state.sex = !state.sex;
        },
        checkSignUpFormValid(state){
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
            if(!state.isValidAge){
                alert("check your age");
                return false;
            }
            if(state.roadAddress === ""){
                alert("check your postcode")
                return false;
            }
            state.isAllFormVaild = true;
        },
    },
    actions: {
        checkUserIdOverlaped ( context ){
            //Todo : 서버에서 해당 아이디가 존재하는지 체크
            
            console.log('getUserRandomNickName')
            let baseURI = 'http://52.78.159.170/auth/check/uid/' + context.state.email;
            // let data = {};
            axios.get(baseURI, {
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
        },
        getUserRandomNickName ( context ){
            // 유저의 랜덤 닉네임을 받기 위한 server api call
            console.log('getUserRandomNickName')
            let baseURI = 'http://52.78.159.170/auth/nickname';
            // let data = {};
            axios.get(baseURI, {
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
        },
        // 회원가입 server api call
        postSignUpToServer ( context )
        {
            context.commit('checkSignUpFormValid')

            if(context.state.isAllFormVaild)
            {
                console.log('all form are valid')
                let baseURI = 'http://52.78.159.170/auth/join';
                let data = {
                	"uid" : context.state.email,
                	"password" : context.state.password,
                	"gender" : context.state.sex? "gender": "female", "gender": "male",
                	"address" : context.state.jibunAddress + '||' + context.state.postcode,
                	"age" : context.state.age,
                	"shoppingType" : ["맥주", "안주"],
                    "nickname" : context.dispatch('getUserRandomNickName')
                };

                console.log(data);
            
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
            }else{
                console.log('all form are not valid')
            }
        },
       
    }
}