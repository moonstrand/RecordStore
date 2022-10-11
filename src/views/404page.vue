<template>
  <div class="nav-bg"></div>
  <div class="notfound-bg">
    <div class="container d-flex flex-column justify-content-center h-100">
      <p class="notfound-title fw-bold text-light">
        糟糕！<br />
        <span class="subtitle">您似乎走錯地方了。</span>
      </p>
      <router-link class="back text-light fs-4 fw-bold pt-4" to="/">
        <i class="bi bi-chevron-right pe-2"></i>點我帶您回唱片行
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/components/_404page.scss";
</style>
