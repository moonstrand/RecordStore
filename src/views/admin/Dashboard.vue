<template>
  <AdminNavbar />
  <RouterView />
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import toast from '@/methods/toast';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    AdminNavbar,
  },
  provide() {
    return {
      toast,
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)recordToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http
      .post(api, this.user)
      .then((res) => {
        if (res.data.success) {
          toast.success('登入成功');
        } else {
          toast.error('驗證錯誤，請重新登入');
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        this.toast.error(`請求失敗，代碼：${err.response.status}`);
        this.isLoading = false;
      });
  },
};
</script>
