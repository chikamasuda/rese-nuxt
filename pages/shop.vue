<template>
  <div>
    <NuxtChild />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shopList: '',
      };
    },
    methods: {
      async getShopList() {
        await this.$axios.get('/api/v1/shops')
        .then((response) => {
          this.shopList = response.data.shops;
        })
        .catch((error) => {
          console.log(error.response);
        })
      },
    },
    created() {
      this.getShopList();
    }
  }
</script>