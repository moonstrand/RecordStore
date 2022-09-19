<template>
  <div class="product-banner d-flex justify-content-center align-items-center">
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title mb-0">{{ product.title }}</p>
    </div>
  </div>
  <div class="bg-color">
    <section class="container border-bottom py-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb py-3">
          <li class="breadcrumb-item">
            <router-link to="/products">專輯列表</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <strong>{{ product.title }}</strong>
          </li>
        </ol>
      </nav>
      <div class="row my-4">
        <div class="col-lg-6 text-lg-start text-center">
          <img class="product-img" :src="product.imageUrl" alt="そばにいて" />
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-between py-4">
          <div class="product-intro">
            <div class="d-flex justify-content-between align-items-center">
              <p class="title h2 mb-0">{{ product.title }}</p>
              <a href="" class="favor">
                <i class="bi bi-star h4"></i>
              </a>
            </div>
            <div class="py-3">
              <span class="badge bg-dark me-2">{{ product.category }}</span>
              <span class="badge bg-secondary me-2">{{ product.class }}</span>
            </div>
            <div class="content h5">
              <p class="lh-lg mb-md-0 mb-4">
                {{ product.description }}
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fw-bold h4 text-danger">NT.{{ product.price }}</p>
            <div class="input-group product-input">
              <select
                class="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                v-model.number="qty"
              >
                <option :value="qty" v-for="qty in 15" :key="qty">
                  {{ qty }}
                </option>
              </select>
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addCart(product, qty)"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container product-intro border-bottom py-xl-5 py-4">
      <p class="title border-start border-info border-5 h2 ps-3">曲目</p>
      <p class="content wrap lh-lg ps-3 pt-4">
        {{ product.track }}
      </p>
    </section>
    <section class="container product-intro border-bottom py-xl-5 py-4">
      <p class="title border-start border-danger border-5 h2 ps-3">購買須知</p>
      <p class="content lh-lg h5 pt-4">運送方式：</p>
      <p class="content lh-lg h6">
        <i class="bi bi-truck"></i> 宅配可取貨點：臺灣、蘭嶼、綠島 <br />
        <i class="bi bi-shop"></i> 超商可取貨點：臺灣、蘭嶼、綠島、澎湖 <br />
      </p>
      <p class="content lh-lg h5 pt-4">退換貨須知：</p>
      <ul class="content lh-lg h6">
        <li>
          收到商品後有7天猶豫期，若商品有問題請於到貨後7天內於平日上班時間9點至17點來電，
          我們將盡速為您處理。
        </li>
        <li>
          退貨的商品必須必須回復原狀，包含商品主體、附件、內外包裝、隨機文件、贈品、活動贈品等，我們會安排貨運前往收回商品。
        </li>
        <li>
          限量商品因數量有限，若庫存不足時，將無法提供換貨，敬請包涵見諒。
        </li>
      </ul>
      <p class="content lh-lg h5 pt-4">防詐騙提醒：</p>
      <p class="content lh-lg h6">
        本店不會主動要求客戶提供個人資料，或是以分期付款、扣款失敗、
        更改結帳方式為由等名義請客戶提供銀行帳戶、信用卡資料或操作ATM轉帳匯款
        ，還請您提高警覺，若有接到不明來電請來電詢問或是撥打165防詐騙專線查證
        ，以免遭詐！
      </p>
    </section>
    <section class="container product-intro py-xl-5 py-4">
      <p
        class="title border-start border-success border-5 h2 ps-3 mb-xl-5 mb-4"
      >
        你可能會喜歡
      </p>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
          <div class="card">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
              <p class="fs-5 text-end pe-2 mb-1">NT.350</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
          <div class="card">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
              <p class="fs-5 text-end pe-2 mb-1">NT.350</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
          <div class="card">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
              <p class="fs-5 text-end pe-2 mb-1">NT.350</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
          <div class="card">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
              <p class="fs-5 text-end pe-2 mb-1">NT.350</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      product: {},
      id: '',
      qty: 1,
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res);
          this.product = res.data.product;
        }
      });
    },
    getID() {
      this.id = this.$route.params.id;
    },
    addCart(item, qty) {
      const toast = useToast();
      const carts = {
        product_id: item.id,
        qty,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(api, { data: carts }).then((res) => {
        if (res.data.success) {
          toast.success(`已將 ${item.title} 加入購物車`);
        }
      });
    },
  },
  created() {
    this.getID();
    this.getProduct();
  },
};
</script>

<style lang="scss">
@import "../assets/components/_clientProduct.scss";
</style>
