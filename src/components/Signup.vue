<template>
  <transition name="modal">
    <div class="modal-mask" v-on:click="temp">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="slot" slot="header">
                <div class="wrapper">
                    <span id="signup">회원가입</span>
                    <span id="signin">로그인</span>
                </div>
                <!-- v-on:click="showModal = false -->
            </div>
            <div class="slot" slot="body">
                <div class="wrapper">
                    <div class="inputbox id">
                        <input type="text" placeholder="아이디" v-model="email">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="inputbox ps">
                        <input type="password" placeholder="비밀번호" v-model="password">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="inputbox ps_check">
                        <input type="password" placeholder="비밀번호 확인" v-model="passwordCheck">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="inputbox nickname">
                        <input type="text" placeholder="닉네임" disabled>
                        <i class="fas fa-check"></i>
                    </div>  
                </div>
                <div class="notice">익명성을 보장하기 위해 닉네임은 장보고가 설정해드려요.</div>
                <div wrapper>
                    <div class="inputbox age">
                        <input type="text" placeholder="출생년도" v-model="age">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="inputbox sex" v-bind:class="{checked : getSex == 0}" v-on:click="toggleFemale">여자</div>
                    <div class="inputbox sex" v-bind:class="{checked : getSex == 1}" v-on:click="toggleMale">남자</div>
                </div>
                <div class="wrapper">
                    <div class="inputbox postcode">
                        <input type="text" id="sample4_postcode" placeholder="우편번호">
                    </div>
                    <div class="searchBtn" v-on:click="execDaumPostcode">
                        우편번호 찾기
                    </div>
                </div>
                <div class="wrapper">
                    <div class="inputbox address">
                        <input type="text" id="sample4_roadAddress" placeholder="주소 검색">
                        <i class="fas fa-check"></i>
                    </div>  
                </div>
                <div class="wrapper">
                    <div class="inputbox address">
                        <input type="text" id="sample4_jibunAddress" placeholder="상세 주소">
                        <i class="fas fa-check"></i>
                    </div>  
                </div>
                <div class="wrapper">
                    <div class="submit" v-on:click="postUserInfoToServer">
                        회원가입
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </transition>
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
        age: {
            get(){return this.$store.getters["signup/getAge"]},
            set( value ){
                this.$store.commit("signup/setAge", value);
                this.$store.commit("signup/checkAgeValid");
            }
        },
        ...mapGetters("signup", {
            getEmail: "getEmail",
            getPassword: "getPassword",
            getSex: "getSexState",
        }),
    },
    methods:{
        temp(){
            console.log('click');
        },
        ...mapMutations("signup", {
            toggleFemale: "toggleFemale",
            toggleMale: "toggleMale",
            setPostCode: "setPostCode",
            setRoadAddress: "setRoadAddress",
            setJibunAddress: "setJibunAddress"
        }),
        ...mapActions("signup", {
            postUserInfoToServer : 'postUserInfoToServer',
        }),
        execDaumPostcode() {
            var getComponent = this;
            new daum.Postcode({
                oncomplete(data) {
                    // console.log(getComponent.setPostCode)
                    // getComponent.setPostCode('1', {root:true});
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
                    // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                    var extraRoadAddr = ''; // 도로명 조합형 주소 변수

                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraRoadAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraRoadAddr !== ''){
                        extraRoadAddr = ' (' + extraRoadAddr + ')';
                    }
                    // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                    if(fullRoadAddr !== ''){
                        fullRoadAddr += extraRoadAddr;
                    }

                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    getComponent.setPostCode(data.zonecode);
                    getComponent.setRoadAddress(fullRoadAddr);
                    getComponent.setJibunAddress(data.jibunAddress);
                    document.getElementById('sample4_postcode').value = data.zonecode; //5자리 새우편번호 사용
                    document.getElementById('sample4_roadAddress').value = fullRoadAddr;
                    document.getElementById('sample4_jibunAddress').value = data.jibunAddress;

                    // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
                    if(data.autoRoadAddress) {
                        //예상되는 도로명 주소에 조합형 주소를 추가한다.
                        var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                        document.getElementById('guide').innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';

                    } else if(data.autoJibunAddress) {
                        var expJibunAddr = data.autoJibunAddress;
                        document.getElementById('guide').innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';

                    } else {
                        document.getElementById('guide').innerHTML = '';
                    }
                }
            }).open();
        }
    }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  text-align: left;
  width: 584px;
  padding: 32px 0px; /*마진 병합 현상*/
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  color: #6f6f6f;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.slot > div{
    margin: 10px 32px;
}
.wrapper{
    margin: 32px 32px;
}
#signin{
    position: relative;
    left: 16px;
    color: #d5d5d5;
    font-size: 24px;
    font-weight: bold;
}
#signup{
    font-size: 24px;
    font-weight: bold;
}
.inputbox{
    border: solid 1px #979797;
    padding: 15px 18px;
}
.inputbox > *{
    display: inline;
}
.inputbox > input{
    /* margin-left: 15px; */
    width: 450px;
    font-size: 16px;
    border-style: none;
    color: #6f6f6f;
}
.inputbox > i{
    position: relative;
    left: 15px;
}
.nickname, .nickname > *{
    background-color: #e8e8e8;
}
.notice{
    font-size: 12px;
}
.age{
    display: inline-block;
    width: 184px;
}
.age > input{
    width: 100px;
}
.age > i{
    left: 70px;
}
.sex{
    display: inline-block;
    /* margin-left: 1.25px; */
    margin-left: 2.75px;
    width: 104px;
    text-align: center;
}
.checked{
    background-color: #e8e8e8;
}
.postcode{
    display: inline-block;
    width: 335px;
}
.postcode > input{
    width: 100px;
}
.searchBtn{
    display: inline-block;
    text-align: center;
    width: 104px;
    margin-left: 2.75px;
    padding: 15px 18px;
    background-color: #e8e8e8;
}
.address > *{
    background-color: #FFFFFF;
}
.submit{
    text-align: center;
    padding: 15px 23px;
    background-color: #e8e8e8;
}
</style>
