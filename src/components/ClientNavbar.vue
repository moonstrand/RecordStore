<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-opacity-0 fixed-top px-4"
    :class="{ navShow: navScroll }"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img class="nav-logo" src="../assets/images/logo.svg" alt="logo" />
      </router-link>
      <button
        class="btn d-lg-none d-block"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="bi bi-list fs-2 text-light"></span>
      </button>
      <div
        class="offcanvas offcanvas-end w-100 d-lg-none d-block navShow"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
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
              <router-link class="canvas-link text-light" to="/"
                >返回首頁</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link class="canvas-link text-light" to="products"
                >專輯列表</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link class="canvas-link text-light" to="favor"
                >最愛商品</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link class="canvas-link text-light" to="cart"
                >購物車</router-link
              >
            </li>
            <li class="nav-item py-2 fs-4">
              <router-link class="canvas-link text-light" to="index"
                >後台登入</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse nav-shift" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-lg-flex d-none">
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="products"
              >專輯列表</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-icon text-light fs-4 d-lg-block d-none"
              to="favor"
              ><i class="bi bi-star"></i
            ></router-link>
          </li>
          <li class="nav-item my-md-0 my-2">
            <router-link
              class="nav-icon text-light fs-4 d-lg-block d-none"
              to="cart"
              ><i class="bi bi-cart2"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-icon text-light fs-4 d-lg-block d-none"
              to="/"
              ><i class="bi bi-person-workspace"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navScroll: false,
    };
  },
  methods: {
    navShow() {
      this.navScroll = window.scrollY > 100;
    },
  },
  created() {
    window.addEventListener('scroll', this.navShow);
  },
};
</script>

<style lang="scss">
@import "../assets/components/navbar.scss";
</style>
