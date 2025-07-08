import { createApp } from 'vue';
import App from './App.vue';
import router from './router';//생략가능

createApp(App).use(router).mount('#root');//.use(router)사용자 객체정의
