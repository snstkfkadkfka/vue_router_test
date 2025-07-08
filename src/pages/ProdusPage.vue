<template>
  <section class="ProductsPage" :style="styled">
    <h1>Products Page...</h1>
    <h3>현재 라우터의 경로 : {{ $route.fullPath }}</h3>
  </section>

</template>

<script>
export default {
  data(){
    return{
      styled:{
        color:'blue',
        fontSize:'30px',
        padding:'30px',
        border:'5px solid tomato',
        height: 'calc(100vh - 116px)'
      }
    }
  }
}
</script>
