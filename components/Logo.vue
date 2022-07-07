<template>
  <img class="logo-image" alt="logo" src="/image/logo.png" @click="toIndex()">
</template>

<script>
export default {
  methods: {
    toIndex() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.logo-image {
  width: 140px;
  height: 44px;
  cursor: pointer;
}
</style>