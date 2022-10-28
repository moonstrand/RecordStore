<template>
  <Loading :active="isLoading" loader="bars" color="#555" />
  <div
    class="
      banner
      product-banner
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title mb-0">{{ product.title }}</p>
    </div>
  </div>
  <div class="bg-color">
    <section class="container border-bottom py-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb py-3 mb-0 ps-sm-0 ps-2">
          <li class="breadcrumb-item">
            <RouterLink to="/products">專輯列表</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <strong>{{ product.title }}</strong>
          </li>
        </ol>
      </nav>
      <div class="row my-4">
        <div class="col-lg-6 text-lg-start text-center">
          <img
            class="product-img"
            :src="product.imageUrl"
            :alt="product.title"
          />
        </div>
        <div
          class="
            col-lg-6
            d-flex
            flex-column
            justify-content-between
            py-4
            px-sm-0 px-4
          "
        >
          <div class="product-intro">
            <div class="d-flex justify-content-between align-items-center">
              <p class="title h2 mb-0">{{ product.title }}</p>
              <a href="#" class="favor" @click.prevent="toggleFavor(product)">
                <i
                  class="h4"
                  :class="
                    favor.some((item) => item.id === product.id)
                      ? 'bi bi-star-fill text-warning'
                      : 'bi bi-star'
                  "
                ></i>
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
            <div class="product-intro d-flex align-items-end">
              <small
                class="text-secondary pe-2 mb-0"
                v-if="product.origin_price !== product.price"
              >
                <s>NT.{{ $filters.currency(product.origin_price) }}</s>
              </small>
              <p
                class="title h4 mb-0"
                :class="{
                  'text-danger': product.origin_price !== product.price,
                }"
              >
                NT.{{ $filters.currency(product.price) }}
              </p>
            </div>
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
                :disabled="status.itemLoading === product.id"
                @click="addCart(product, qty)"
              >
                <div
                  class="spinner-grow spinner-grow-sm text-lighty me-2"
                  role="status"
                  v-if="status.itemLoading === product.id"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="container product-intro border-bottom py-xl-5 py-4 px-sm-0 px-4"
    >
      <p class="title border-start border-info border-5 h2 ps-3">曲目</p>
      <p class="content wrap lh-lg ps-3 pt-4">
        {{ product.track }}
      </p>
    </section>
    <section
      class="container product-intro border-bottom py-xl-5 py-4 px-sm-0 px-4"
    >
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
    <section class="container product-intro py-xl-5 py-4 px-sm-0 px-4">
      <p
        class="title border-start border-success border-5 h2 ps-3 mb-xl-5 mb-4"
      >
        精選推薦
      </p>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4"
          v-for="item in recommend"
          :key="item.id"
        >
          <div class="card" @click="toDetail(item.id)">
            <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
            <div class="card-body p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">{{ item.title }}</p>
              <p class="fs-5 text-end pe-2 mb-1">
                NT. {{ $filters.currency(item.price) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      product: {},
      id: '',
      qty: 1,
      favor: [],
      recommend: [],
      status: {
        itemLoading: '',
      },
    };
  },
  inject: ['emitter', 'toast'],
  methods: {
    getProduct() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.toast.error(`請求失敗，代碼：${err.response.status}`);
          this.isLoading = false;
        });
    },
    getID() {
      this.id = this.$route.params.id;
    },
    addCart(item, qty) {
      this.status.itemLoading = item.id;
      const carts = {
        product_id: item.id,
        qty,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(api, { data: carts })
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('update-cart');
            this.toast.success(`已將 ${item.title} 加入購物車`);
            this.qty = 1;
          }
          this.status.itemLoading = '';
        })
        .catch((err) => {
          this.toast.error(`請求失敗，代碼：${err.response.status}`);
          this.isLoading = false;
        });
    },
    getFavor() {
      this.favor = JSON.parse(localStorage.getItem('favor')) || [];
    },
    toggleFavor(product) {
      const favorId = product.id;
      const isFavor = this.favor.some((item) => item.id === favorId);
      if (!isFavor) {
        this.favor.push(product);
        localStorage.setItem('favor', JSON.stringify(this.favor));
        this.toast.success(`${product.title} 已加入願望清單`);
      } else {
        const delFavor = this.favor.find((item) => item.id === favorId);
        this.favor.splice(this.favor.indexOf(delFavor), 1);
        localStorage.setItem('favor', JSON.stringify(this.favor));
        this.toast.success(`${product.title} 已從願望清單中移除`);
      }
      this.emitter.emit('update-favor');
      this.getFavor();
    },
    randomItem() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.recommend = res.data.products
              .filter((item) => item.id !== this.id)
              .sort(() => Math.random() - 0.5)
              .slice(0, 4);
          }
        })
        .catch((err) => {
          this.toast.error(`請求失敗，代碼：${err.response.status}`);
          this.isLoading = false;
        });
    },
    toDetail(id) {
      this.$router.push(id);
      this.id = id;
      this.init();
    },
    init() {
      this.getProduct();
      this.getFavor();
      this.randomItem();
    },
  },
  created() {
    this.getID();
    this.init();
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_userProduct.scss";
</style>
