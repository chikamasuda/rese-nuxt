<template>
  <div>
    <div class="align-center d-flex justify-space-between mt-4">
      <Logo />
      <LoginMenu />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopList: '',
    };
  },
  async getShopList() {
    await this.$axios.get('/api/v1/shops')
    .then((response) => {
      this.shopList = response.data.shops;
    })
    .catch((error) => {
      console.log(error.response);
    })
  },
}
</script>

<style>

</style>