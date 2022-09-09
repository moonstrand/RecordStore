import { createApp } from 'vue';
//  axios 套件
import axios from 'axios';
import VueAxios from 'vue-axios';
// 讀取動畫套件
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// Bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css';
// Bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min';
// AOS 動畫套件
import AOS from 'aos';
import 'aos/dist/aos.css';
// 吐司訊息套件
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import router from './router';

AOS.init();

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(Toast, {
  timeout: 2500,
  maxToasts: 5,
  hideProgressBar: true,
});
app.component('Loading', Loading);
app.mount('#app');
