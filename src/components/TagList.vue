<template>
  <div id="wrapper">
	  <Tag v-for="item in items" :data="item" />
  </div>
</template>


<script type="text/javascript">
import Tag from './Tag.vue'

export default {
  name: 'tag-list',
  components: { Tag, },
  props: [ 'items' ]
}

</script>


<style scoped>
#wrapper {
  margin-top: 25px;
  width: 748px;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  /*flex-direction: row;*/
  /*align-items: center;*/
  justify-content: center;
}
</style>