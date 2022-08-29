<template>
  <!-- banner -->
  <div class="products-banner d-flex justify-content-center align-items-center">
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title">專輯列表</p>
      <p class="h3 pt-3 mb-0">「讓音樂帶給你全新的感動。」</p>
    </div>
  </div>
  <!-- category -->
  <section class="category container py-4">
    <div class="row">
      <ul
        class="
          col-lg-8
          d-flex
          align-items-center
          justify-content-lg-start justify-content-center
          list-unstyled
        "
      >
        <li>
          <a class="category-link">所有類別</a>
        </li>
        <li>
          <a class="category-link" href="#">華語</a>
        </li>
        <li>
          <a class="category-link" href="#">東洋</a>
        </li>
        <li>
          <a class="category-link" href="#">西洋</a>
        </li>
        <li class="border-0">
          <a class="category-link" href="#">純音樂</a>
        </li>
      </ul>
      <div class="col-lg-4 d-flex justify-content-end mt-lg-0 mt-3">
        <div class="input-group mb-3">
          <button
            class="btn btn-outline-secondary rounded-0"
            type="button"
            id="button-addon1"
          >
            <i class="bi bi-search"></i>
          </button>
          <input
            type="text"
            class="form-control"
            placeholder="請輸入關鍵字"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- Products list -->
  <section class="products container pt-xl-3 pt-0 pb-xl-5 pb-0">
    <div class="row">
      <div class="col-xxl-3 col-lg-4 col-sm-6 mb-xxl-0 mb-4">
        <div class="card">
          <router-link to="product" title="好きだから。">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <div class="d-flex justify-content-between align-items-center">
                <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
                <a class="pe-2" href=""><i class="bi bi-star"></i></a>
              </div>
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  pt-3
                  pb-2
                "
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm ms-2"
                >
                  加入購物車
                </button>
                <p class="fs-5 text-end pe-2 mb-0">NT.350</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 mb-xxl-0 mb-4">
        <div class="card">
          <a href="" title="好きだから。">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <div class="d-flex justify-content-between align-items-center">
                <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
                <a class="pe-2" href=""><i class="bi bi-star"></i></a>
              </div>
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  pt-3
                  pb-2
                "
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm ms-2"
                >
                  加入購物車
                </button>
                <p class="fs-5 text-end pe-2 mb-0">NT.350</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 mb-xxl-0 mb-4">
        <div class="card">
          <a href="" title="好きだから。">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <div class="d-flex justify-content-between align-items-center">
                <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
                <a class="pe-2" href=""><i class="bi bi-star"></i></a>
              </div>
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  pt-3
                  pb-2
                "
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm ms-2"
                >
                  加入購物車
                </button>
                <p class="fs-5 text-end pe-2 mb-0">NT.350</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6 mb-xxl-0 mb-4">
        <div class="card">
          <a href="" title="好きだから。">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <div class="d-flex justify-content-between align-items-center">
                <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
                <a class="pe-2" href=""><i class="bi bi-star"></i></a>
              </div>
              <div
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  pt-3
                  pb-2
                "
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm ms-2"
                >
                  加入購物車
                </button>
                <p class="fs-5 text-end pe-2 mb-0">NT.350</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/components/_clientProducts.scss";
</style>
