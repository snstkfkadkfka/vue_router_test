<template>
  <header>
  <div class="inner">
    <h1>COPANY Ltd.</h1>
    <nav>
      <ul class="gnb">
        <!-- 덤 RouterLink -active-class="active"- to 를 쓰면 자바스크립트의 add, remove와 같은 효과를 줄 수 있음. -->
        <li><RouterLink to="/">Home</RouterLink></li><!-- RouterLink to 라우터 기준으로 삼은 경로 심기-->
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/products">Products</RouterLink></li>
      </ul>
      <ul class="util">
        <li><a href="">
          <input type="text"/>
        </a></li>
      </ul>
    </nav>
  </div>
  </header>
  <main>
    <RouterView/> <!-- RouterView불러올때 import~~'vue' 삭제하기 -->
  </main>
</template>
<script>

</script>
<style lang="scss">
@import '../funtional.scss';
  header{
  background-color: royalblue;padding: 30px 20px;color: #fff;
  .inner{
    @include center(){
      justify-content: space-between;
    }
    gap: 100px;
    h1{
      flex: 1;
      font-weight: 700;font-size: 28px;
    }
    nav{
      flex: 5;
      @include center(){
        justify-content: space-between;
      }
      .gnb{
        @include center();
        gap: 30px;
      }
    }
  }
}
</style>