<template>
  <Loading :active="isLoading" loader="bars" color="#555" />
  <div class="nav-bg"></div>
  <div class="login-bg">
    <section class="container">
      <form
        class="row login-h d-flex justify-content-center align-items-center"
        @submit.prevent="signIn"
      >
        <div class="login-input col-lg-6 col-md-8 col-11 border border-1 p-5">
          <p
            class="
              h2
              login-title
              border-start border-secondary border-5
              ps-3
              mb-4
            "
          >
            後台登入
          </p>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              autofocus
              v-model="user.username"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="user.password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            class="btn btn-lg btn-secondary fw-bold w-100 mt-3"
            type="submit"
          >
            登入
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  inject: ['toast'],
  methods: {
    signIn() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `recordToken = ${token}; expires = ${new Date(expired)}`;
            this.$router.push('/dashboard/products');
          } else {
            this.toast.error(`${res.data.message}，帳號密碼有誤，請重新輸入`);
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.toast.error(`請求失敗，代碼：${err.response.status}`);
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_login.scss";
</style>
