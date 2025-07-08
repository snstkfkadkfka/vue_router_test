import { createRouter, createWebHistory } from "vue-router";//최상위 맨위에 넣기 createRouter라우터생성 createWebHistory현재 페이지 루트로 지정
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";//가져오기
import ProdusPage from "@/pages/ProdusPage.vue";//"@ path alias 경로 이 기점으로 연결

const routes =[//데이터화
  {path : "/",component : HomePage},
  {path : "/about",component : AboutPage},//about 클릭하면AboutPage실행
  // 덤 {path : "/about:usename",component : AboutPage},//매개변수 :usename 응용 가능
  {path : "/products",component : ProdusPage},
];

const router = createRouter({
  history : createWebHistory('/'), // '/'가 루트가 최상위로 지정
  routes //단축 router:router
})
export default router;//router 밖으로 내보내기