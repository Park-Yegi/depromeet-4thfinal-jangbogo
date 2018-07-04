<template>
<div id="wrapper">
  <header></header>
  <img id="main-image" />
  <tag></tag>
  <map></map>
  <footer></footer>
</div>
</template>


<script type="text/javascript">
import Header from './Header.vue'
import Footer from './Footer.vue'
import Map from './Map.vue'
import Friend from './Friend.vue'
import Tag from './Tag.vue'

export default {
  name: 'main',
  components: { Header, Footer, Map, Friend, Tag }

}
</script>


<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
}

#main-image {
  width: 100%;
  height: 540px;
}

</style>