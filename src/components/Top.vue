<template>
	<div id="wrapper">
		<button id="makeRoom" @click="clickNewRoom()">방만들기</button>
    <!-- 회원가입 어디에 넣어야할까요? -->
		<button id="loginButton" @click="clickSignModal(1)">로그인</button>
    <router-link id="chatButton" v-bind:to="{ name: 'Chat' }">채팅</router-link>
		<button id="homeButton">홈</button>
	</div>
</template>

<script type="text/javascript">
import eventBus from './EventBus.vue'

export default {
  name: 'top',
  methods: {
    clickNewRoom: function() {
      eventBus.$emit('click-new-room')
    },
    clickSignModal(state){
      eventBus.$emit('click-sign-modal', state)
    }
  }
}
</script>

<style scoped>
@import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);

#wrapper {
  width: 1920px;
  height: 633px;
  background-image: url("../assets/banner.png");
  background-color: transparent;
  font-family: 'NanumSquare';
  background-repeat: no-repeat;
}


#makeRoom {
	float: right;
	width: 110px;
	height: 40px;
	border-radius: 4px;
	font-size: 15px;
	background-color: #ffffff;
	box-shadow: 1.4px 1.4px 8px 0 rgba(73, 116, 17, 0.32);
	border: 0;
	margin-top: 21px;
	margin-right: 182px;
  font-family: 'NanumSquare';
}


#loginButton {
  float: right;
  font-family: 'NanumSquare';
  background-color: transparent;
  border: 0;
  margin-top: 34px;
  margin-right: 50px;
  color: #badb8f;
  font-size: 15px;
}


#chatButton {
  float: right;
  font-family: 'NanumSquare';
  background-color: transparent;
  border: 0;
  margin-top: 34px;
  margin-right: 50px;
  color: #badb8f;
  font-size: 15px;
}


#homeButton {
  float: right;
  font-family: 'NanumSquare';
  background-color: transparent;
  border: 0;
  margin-top: 34px;
  margin-right: 50px;
  color: #ffffff;
  font-size: 15px;
}

</style>