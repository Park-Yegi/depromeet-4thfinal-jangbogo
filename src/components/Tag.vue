<template>
  <span>{{ data }}</span>
</template>

<script type="text/javascript">
export default {
  name: 'tag',
  props: [ 'data' ]
}
</script>

<style scoped>
@import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);

span {
	display: inline-block;
	height: 20px;
	color: #77c017;
	font-family: 'NanumSquare';
	border: 1px solid #77c017;
	border-radius: 23px;
	padding-right: 18px;
	padding-left: 18px;
	padding-top: 12px;
	padding-bottom: 12px;
	font-size: 16px;
	margin-right: 10px;
	margin-left: 0px;
	/*margin-top: 10px;*/
}
</style>