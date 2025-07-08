<template>
  <section class="HomePage" :style="styled">
    <h1>Home Page...</h1>
    <h3>현재 라우터의 경로 : {{ $route.fullPath }}</h3><!-- 특수객체 $route -->
  </section>

</template>

<script>
export default {
  data(){
    return{
      styled:{
        color:'royalblue',
        fontSize:'30px',
        padding:'30px',
        border:'5px solid orange',
        height: 'calc(100vh - 116px)'
      }
    }
  },
  mounted(){
    console.log(this.$route);//현재 페이지 정보
    console.log(this.$router);//페리디 이동에 대한
  }
}
</script>
