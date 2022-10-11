<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-opacity-0 fixed-top px-4 py-0"
    :class="{ navShow: navScroll }"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img class="nav-logo" src="@/assets/images/logo/logo.svg" alt="logo" />
      </router-link>
      <button
        class="btn d-lg-none d-block"
        type="button"
        @click="offcanvasToggle"
      >
        <span class="bi bi-list fs-2 text-light"></span>
      </button>
      <div
        class="offcanvas offcanvas-end w-100 d-lg-none d-block navShow"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        ref="offcanvas"
      >
        <div class="offcanvas-header pb-0">
          <button
            type="button"
            class="btn bi bi-x-lg fs-4 text-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body pt-0">
          <ul class="navbar-nav text-center me-auto mb-2 mb-lg-0">
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-light"
                to="/"
                @click="offcanvasHide"
                >返回首頁</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-light"
                to="/products"
                @click="offcanvasHide"
                >專輯列表</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-light"
                to="/order"
                @click="offcanvasHide"
                >訂單查詢</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-light"
                to="/favor"
                @click="offcanvasHide"
                >最愛商品</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-light"
                to="/cart"
                @click="offcanvasHide"
                >購物車</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link
                class="canvas-link text-light"
                to="/login"
                @click="offcanvasHide"
                >後台登入</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse nav-user" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-flex d-none">
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/products"
              >專輯列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/order"
              >訂單查詢</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-icon text-light fs-4 d-lg-block d-none"
              to="/favor"
              >
              <i class="bi bi-star"></i>
              <sup v-if="favorLength"><small>{{ favorLength }}</small></sup>
            </router-link>
          </li>
          <li class="nav-item my-md-0 my-2">
            <router-link
              class="nav-icon text-light fs-4 d-lg-block d-none"
              to="/cart"
            >
              <i class="bi bi-cart2"></i>
              <sup v-if="cartQty"><small>{{ cartQty }}</small></sup>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-icon text-light fs-4 d-lg-block d-none"
              to="/login"
              ><i class="bi bi-person-workspace"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import offcanvasMixin from '@/mixins/offcanvasMixin';

export default {
  data() {
    return {
      navScroll: false,
      cartQty: '',
      favorLength: '',
    };
  },
  inject: ['emitter'],
  mixins: [offcanvasMixin],
  methods: {
    navShow() {
      this.navScroll = window.scrollY > 25;
    },
    offcanvasToggle() {
      this.canvasToggle();
    },
    offcanvasHide() {
      this.canvasHide();
    },
    getCartQty() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          if (res.data.data.carts.length !== 0) {
            this.cartQty = res.data.data.carts.map((item) => item.qty).reduce((a, b) => a + b);
          } else {
            this.cartQty = 0;
          }
        }
      });
    },
    getFavorLength() {
      this.favorLength = JSON.parse(localStorage.getItem('favor')).length;
    },
  },
  mounted() {
    this.emitter.on('update-cart', this.getCartQty);
    this.emitter.on('update-favor', this.getFavorLength);
  },
  created() {
    window.addEventListener('scroll', this.navShow);
    this.getCartQty();
    this.getFavorLength();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_navbar.scss';
</style>
