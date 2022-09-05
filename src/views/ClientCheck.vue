<template>
  <div class="nav-bg"></div>
  <div class="bg-color cart-h py-4">
    <section
      class="
        container
        d-flex
        flex-md-row flex-column
        justify-content-around
        align-items-center
        py-md-5
        pb-3
      "
    >
      <div class="cart-step bg-light h4 py-3 px-4 border border-dark text-dark">
        <i
          class="
            bi bi-check-lg
            pe-4
            border-end border-dark border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-cart-check ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">確認訂單</span>
      </div>
      <i class="bi bi-chevron-right d-md-block d-none h4"></i>
      <i class="bi bi-chevron-down d-md-none d-block h4"></i>
      <div class="cart-step h4 py-3 px-4 border border-dark text-light">
        <i
          class="
            bi bi-2-square
            pe-4
            border-end border-light border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-file-text ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">填寫資料</span>
      </div>
      <i class="bi bi-chevron-right d-md-block d-none h4"></i>
      <i class="bi bi-chevron-down d-md-none d-block h4"></i>
      <div class="cart-step bg-light h4 py-3 px-4 border border-dark text-dark">
        <i
          class="
            bi bi-3-square
            pe-4
            border-end border-dark border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-credit-card ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">確認付款</span>
      </div>
    </section>
    <section class="container">
      <div class="row d-flex flex-lg-row flex-column-reverse g-3">
        <div class="col-lg-7">
          <div class="cart-bg pb-4 px-4">
            <p class="text-center h3 py-4 mb-0 cart-title">客戶資料</p>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="收件人姓名"
              />
              <label for="floatingInput">收件人姓名</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="phone"
                class="form-control"
                id="floatingInput"
                placeholder="收件人電話"
              />
              <label for="floatingInput">收件人電話</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="phone"
                class="form-control"
                id="floatingInput"
                placeholder="收件人地址"
              />
              <label for="floatingInput">收件人地址</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="有任何備註請留言"
                id="floatingTextarea2"
                style="height: 150px"
              ></textarea>
              <label for="floatingTextarea2">備註</label>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input rounded-0"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                到店自取
              </label>
            </div>
            <router-link to="payment" class="btn btn-secondary w-100">
              確認下單
            </router-link>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="cart-bg pb-2 px-4">
            <p class="text-center h3 py-4 mb-0 cart-title">訂單明細</p>
            <div class="d-flex align-items-center cart-border px-3 py-4">
              <img
                src="https://i.imgur.com/42dQvlj.jpg"
                class="cart-img"
                alt="cd"
              />
              <div class="cart-text fs-sm-5 ps-sm-5 ps-3">
                <p class="mb-0">そばにいて。</p>
                <p class="py-2 mb-0">1 張</p>
                <p class="mb-0">NT.350</p>
              </div>
            </div>
            <div
              class="
                cart-text cart-border
                h5
                d-flex
                justify-content-between
                px-3
                pt-4
              "
            >
              <p>商品總額：</p>
              <p>NT.350</p>
            </div>
            <div class="cart-text h5 d-flex justify-content-between px-3">
              <p>折扣金額：</p>
              <p class="text-danger">NT.0</p>
            </div>
            <div
              class="
                cart-text cart-border
                h5
                d-flex
                justify-content-between
                px-3
                pt-4
              "
            >
              <p>訂單總額：</p>
              <p>NT.1050</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "../assets/components/_clientCart.scss";
</style>
