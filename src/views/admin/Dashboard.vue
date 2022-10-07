<template>
  <ServerNavbar></ServerNavbar>
  <router-view />
</template>

<script>
import { useToast } from 'vue-toastification';
import ServerNavbar from '@/components/AdminNavbar.vue';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    ServerNavbar,
  },
  created() {
    const toast = useToast();
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)recordToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (res.data.success) {
        toast.success('登入成功');
      } else {
        toast.error('驗證錯誤，請重新登入');
        this.$router.push('/login');
      }
    });
  },
};
</script>
