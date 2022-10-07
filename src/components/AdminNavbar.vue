<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          class="nav-logo"
          src="@/assets/images/logo/logo-light-2.png"
          alt="logo"
        />
      </router-link>
      <button
        class="btn d-lg-none d-block"
        type="button"
        @click="offcanvasToggle"
      >
        <span class="bi bi-list fs-3 text-dark"></span>
      </button>
      <div
        class="offcanvas offcanvas-end w-100 d-lg-none d-block"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        ref="offcanvas"
      >
        <div class="offcanvas-header pb-0">
          <button
            type="button"
            class="btn bi bi-x-lg fs-4 text-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body pt-0">
          <ul class="navbar-nav text-center me-auto mb-2 mb-lg-0">
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-dark"
                to="products"
                @click="offcanvasHide"
                >產品列表</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-dark"
                to="orders"
                @click="offcanvasHide"
                >訂單列表</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-dark"
                to="coupon"
                @click="offcanvasHide"
                >優惠券</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-dark"
                to="/"
                @click="offcanvasHide"
                >登出</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse nav-server" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-flex d-none">
          <li class="nav-item">
            <router-link class="nav-link" to="products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="orders">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="coupon">優惠券</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useToast } from 'vue-toastification';
import offcanvasMixin from '@/mixins/offcanvasMixin';

export default {
  mixins: [offcanvasMixin],
  methods: {
    logout() {
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/login');
          toast.info('已登出');
        }
      });
    },
    offcanvasToggle() {
      this.canvasToggle();
    },
    offcanvasHide() {
      this.canvasHide();
    },
  },
};
</script>
