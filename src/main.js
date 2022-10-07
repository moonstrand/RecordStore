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
// 表單驗證套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 導入驗證規則
import { required, email, min } from '@vee-validate/rules';
// 導入多國語系
import { localize, setLocale } from '@vee-validate/i18n';
//  導入驗證規則繁中語系
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from '@/App.vue';
import router from '@/router';
import { currency, date } from '@/methods/filters';

AOS.init();

const app = createApp(App);
app.config.globalProperties.$filters = { currency, date };

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  // 載入繁中語系
  generateMessage: localize({ zh_TW: zhTW }),
  // 當輸入內容進行驗證
  validateOnInput: true,
});
// 設定預設語系
setLocale('zh_TW');

app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueAxios, axios);
app.use(router);
app.use(Toast, {
  timeout: 2500,
  maxToasts: 5,
  hideProgressBar: true,
});
app.mount('#app');
