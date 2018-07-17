<template>
<div id="wrapper">
  <iframe
    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCQTZK8bNoMA4xd7n44uaMbEcsptjT364E&q=Seoul"
    width="500"
    height="400"
    frameborder="0" style="border:0">
  </iframe>
</div>
</template>

<script type="text/javascript">
export default {
  name: 'location',
}
</script>

<style scoped>
#wrapper {
  width: 344px;
  height: 350px;
}
</style>