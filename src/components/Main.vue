<div id="wrapper">
  <button v-on:click="signup" style="width:100px; height:100px;"></button>
  <!-- <span><router-link v-bind:to="{ name: 'counter-page' }">Counter</router-link></span> -->
        
  <SignModal v-if="showModal" @close="showModal = false">          
  </SignModal>


  <header></header>
  <img id="main-image" />
  <tag></tag>
  <map></map>
  <footer></footer>
</div>
</template>


<script type="text/javascript">
import SignModal from './SignModal.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Map from './Map.vue'
import Friend from './Friend.vue'
import Tag from './Tag.vue'

export default {
  name: 'main',
  components: { Header, Footer, Map, Friend, Tag, SignModal },
  data(){
    return{
      showModal : false
    }
  },
  methods:{
    signup(){
      this.showModal = !this.showModal
    }
  }
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
