<template>
	    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <h3>새 토픽 만들기</h3>
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            <input type="text" name="topicname" placeholder="Topic Name" v-model="newtopic">
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button" @click="$emit('close'); addTopic()">Make</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript">
import eventBus from './EventBus.vue'

export default {
  name: 'new-room',
  methods: {
    addRoom: function() {
      eventBus.$emit('add-room')
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
  z-index: 9998;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  z-index: 9998;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

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
</style>