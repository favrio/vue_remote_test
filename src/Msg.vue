<template>
<div>
  <h1 v-text="msg"></h1>
</div>
</template>

<script>
export default {
  name: 'Msg',

  data() {
    return {
      msg: 'hello gd vue-component!'
    }
  }
}
</script>

<style>
h1 {
  color: #4fc08d;
}
</style>
