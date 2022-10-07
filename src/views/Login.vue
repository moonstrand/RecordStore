<template>
  <Loading :active="isLoading"></Loading>
  <div class="nav-bg"></div>
  <div class="login-bg">
    <section class="container">
      <form
        class="row login-h d-flex justify-content-center align-items-center"
        @submit.prevent="signIn"
      >
        <div class="input-bg col-lg-6 col-md-8 col-11 border border-1 p-5">
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
  methods: {
    signIn() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          const { token, expired } = res.data;
          document.cookie = `recordToken = ${token}; expires = ${new Date(expired)}`;
          this.$router.push('/dashboard/products');
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_login.scss';
</style>
