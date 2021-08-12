<template>
  <div class="vue-component" @click="handleClick">
    <h1>{{ msg }}</h1>
    <ChildComponent :message="msg" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue"

export default {
  name: "MyVueComponent",
  props: {
    msg: String,
  },
  components: {
    ChildComponent
  },
  methods: {
    handleClick() {
      alert(this.msg)
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  background: red;
}
</style>
