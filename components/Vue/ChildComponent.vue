<template>
  <div class="container">
      {{ message }}
  </div>
</template>

<script>
export default {
    name: 'ChildComponent',
    props: {
        message: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>
.container {
    background: blue;
}
</style>