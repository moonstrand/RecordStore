<template>
  <UserNavbar />
  <div class="nav-bg"></div>
  <div class="notfound-bg">
    <div class="container d-flex flex-column justify-content-center h-100">
      <p class="notfound-title fw-bold text-light">
        糟糕！<br />
        <span class="subtitle">您似乎走錯地方了。</span>
      </p>
      <RouterLink class="back text-light fs-4 fw-bold pt-4" to="/">
        <i class="bi bi-chevron-right pe-2"></i>點我帶您回唱片行
      </RouterLink>
    </div>
  </div>
</template>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    UserNavbar,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_404page.scss";
</style>
