<template>
  <div class="nav-bg"></div>
  <div class="bg-color py-4">
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
      <div class="cart-step h4 py-3 px-4 border border-dark text-light">
        <i
          class="
            bi bi-1-square
            pe-4
            border-end border-light border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-cart-check ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">確認訂單</span>
      </div>
      <i class="bi bi-chevron-right d-md-block d-none h4"></i>
      <i class="bi bi-chevron-down d-md-none d-block h4"></i>
      <div class="cart-step bg-light h4 py-3 px-4 border border-dark text-dark">
        <i
          class="
            bi bi-2-square
            pe-4
            border-end border-dark border-2
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
      <div class="row g-3">
        <div class="col-xl-8">
          <div class="cart-bg px-4">
            <p class="text-center h3 py-4 mb-0 cart-title">您的購物車</p>
            <div
              class="
                row
                align-items-center
                g-3
                cart-item cart-border
                py-sm-4
                pb-0
                m-0
              "
            >
              <div
                class="
                  col-md-6
                  d-flex
                  justify-content-around
                  align-items-center
                  h5
                  mb-sm-0
                  px-0
                "
              >
                <img
                  src="https://i.imgur.com/42dQvlj.jpg"
                  class="cart-img"
                  alt="cd"
                />
                <div class="cart-text">
                  <p>そばにいて。</p>
                  <p class="d-md-block d-none">NT.350</p>
                </div>
              </div>
              <div class="col-md-6 h5">
                <div class="row pt-md-0 pt-sm-4 pt-0 ps-md-0 ps-sm-2 ps-0">
                  <div
                    class="
                      col-sm-6
                      d-flex
                      justify-content-center
                      align-items-center
                      mb-sm-0 mb-3
                      px-0
                    "
                  >
                    <div class="input-group input-group-sm cart-qty">
                      <button
                        class="btn btn-outline-secondary count rounded-0"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="bi bi-plus h5"></i>
                      </button>
                      <input
                        type="text"
                        class="form-control border-secondary text-center"
                        placeholder=""
                      />
                      <button
                        class="btn btn-outline-secondary count rounded-0"
                        type="button"
                        id="button-addon2"
                      >
                        <i class="bi bi-dash h5"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    class="
                      col-sm-6
                      d-flex
                      justify-content-sm-around justify-content-between
                      align-items-center
                      mb-sm-0 mb-3
                      px-0
                    "
                  >
                    <p class="cart-text mb-0 ps-sm-0 ps-3">NT.350</p>
                    <a class="cart-text pe-3" href="#">
                      <i class="bi bi-x-lg cart-delete"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="cart-bg px-4">
            <p class="cart-title h3 py-4 mb-0 text-center">訂單價格</p>
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
              <p>NT.350</p>
            </div>
            <div class="cart-text h5 d-flex justify-content-between px-3">
              <p>待折扣金額：</p>
              <p class="text-danger">NT.0</p>
            </div>
            <div class="d-flex justify-content-center cart-border pt-4 pb-2">
              <div class="input-group cart-coupon mx-2 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠碼"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary rounded-0"
                  type="button"
                  id="button-addon2"
                >
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
          <div class="cart-bg px-4 mt-3">
            <p class="cart-title h3 py-4 mb-0 text-center">購買須知</p>
            <div class="cart-text cart-border fs-5 px-2 py-3">
              <p class="lh-base mb-0">
                在您下標後將立即處理您的訂單，現貨商品將於三個工作天內寄出 （
                不含週六日及國定例假日 ）， 若商品無庫存將由店家與您電話聯繫。
              </p>
              <router-link to="check" class="btn btn-secondary rounded-0 w-100 mt-4">
                確認訂單
              </router-link>
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
