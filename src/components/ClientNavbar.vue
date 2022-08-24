<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-light
      bg-opacity-0
      fixed-top
      px-4
    "
    :class="{ navShow: navScroll }"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img class="nav-logo" src="../assets/images/logo.svg" alt="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="bi bi-list text-light"></span>
      </button>
      <div class="collapse navbar-collapse nav-shift" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/index">首頁</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">專輯</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">問與答</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-icon text-light fs-4" href="#"
              ><i class="bi bi-star"></i
            ></a>
          </li>
          <li class="nav-item my-md-0 my-2">
            <a class="nav-icon text-light fs-4" href="#"
              ><i class="bi bi-cart2"></i
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-icon text-light fs-4" href="#"
              ><i class="bi bi-person-workspace"></i
            ></a>
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
