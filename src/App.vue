<template>
  <button @click="$router.push('/products')">go Products</button>
<Header/>
</template>
<script>
import Header from './pages/Header.vue';
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
@import'./common.scss';
.active{
  font-weight: 700;color: orange;
}
button{
  padding: 3px 30px; border: 1px solid gray; background-color: #fff;
}
</style>
