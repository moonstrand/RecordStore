<template>
  <div class="nav-bg"></div>
  <section class="success-banner">
    <div class="container d-flex align-items-center h-100">
      <div class="row w-100 d-flex justify-content-center">
        <div
          class="banner-content text-center text-light col-10 p-md-5 py-4 px-2"
        >
          <i class="bi bi-check-circle pe-4"></i>
          <span>付款完成，感謝惠顧</span>
          <p class="pt-4">
            現貨商品將於三個工作天內寄出， <br />
            若商品無庫存將由店家與您電話聯繫。
          </p>
          <router-link to="products" class="btn btn-outline-light rounded-0">
              再去逛逛
            </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/components/_clientSuccess.scss";
</style>
