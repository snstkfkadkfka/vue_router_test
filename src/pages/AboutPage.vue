<template>
  <section class="AboutPage" :style="styled">
    <h1>About Page...</h1>
    <h3>현재 라우터의 경로 : {{ $route.fullPath }}</h3>
    <button @click="goHome">go Home</button>
  </section>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
export default {
  data(){
    return{
      styled:{
        color:'orange',
        fontSize:'30px',
        padding:'30px',
        border:'5px solid red',
        height: 'calc(100vh - 116px)'
      }
    }
  },
  setup(){
    const route = useRoute();
    const router= useRouter();
    console.log('route',route);
    function goHome(){
      router.push('/')
    }
    return{
      goHome
    }
  }
}
</script>
