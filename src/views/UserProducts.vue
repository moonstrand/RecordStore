<template>
  <Loading :active="isLoading" loader="bars" color="#555" />
  <div
    class="
      banner
      products-banner
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title">專輯列表</p>
      <p class="h3 pt-3 mb-0">「讓音樂帶給你全新的感動。」</p>
    </div>
  </div>
  <div class="min-h bg-color">
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
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '全部' }"
              @click.prevent="toCategory('全部')"
              >所有類別</a
            >
          </li>
          <li>
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '西洋' }"
              @click.prevent="toCategory('西洋')"
              >西洋</a
            >
          </li>
          <li>
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '東洋' }"
              @click.prevent="toCategory('東洋')"
              >東洋</a
            >
          </li>
          <li>
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '華語' }"
              @click.prevent="toCategory('華語')"
              >華語</a
            >
          </li>
          <li class="border-end-0">
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '純音樂' }"
              @click.prevent="toCategory('純音樂')"
              >純音樂</a
            >
          </li>
        </ul>
        <div class="col-lg-4 d-flex justify-content-end mt-lg-0 mt-3">
          <div class="input-group mb-3">
            <span
              class="input-group-text bg-white border-secondary"
              id="basic-addon1"
              ><i class="bi bi-search"></i
            ></span>
            <input
              type="search"
              class="form-control border-secondary"
              placeholder="請輸入關鍵字"
              v-model="search"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="products container pt-xl-3 pt-0 pb-xl-5 pb-0 h-100">
      <div class="row" v-if="filterProducts.length !== 0">
        <div
          class="col-xxl-3 col-lg-4 col-sm-6 mb-xxl-0"
          v-for="item in filterProducts"
          :key="item.id"
        >
          <div class="card mb-4" @click="toDetail(item.id)">
            <img :src="item.imageUrl" class="card-img-top" :alt="item.title" />
            <div class="card-body p-2">
              <div class="d-flex justify-content-between align-items-center">
                <p class="fs-5 ps-2 mt-1 mb-0">{{ item.title }}</p>
                <button
                  type="button"
                  class="btn btn-link"
                  @click.stop="toggleFavor(item)"
                >
                  <i
                    :class="
                      favor.some((favor) => favor.id === item.id)
                        ? 'bi bi-star-fill text-warning'
                        : 'bi bi-star'
                    "
                  ></i>
                </button>
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
                <div class="d-flex align-items-center">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm ms-2"
                    :disabled="status.itemLoading === item.id"
                    @click.stop="addCart(item.id, item.title)"
                  >
                    加入購物車
                  </button>
                  <div
                    class="spinner-grow spinner-grow-sm text-secondary ms-3"
                    role="status"
                    v-if="status.itemLoading === item.id"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div class="d-flex align-items-end">
                  <small
                    class="text-secondary pe-2 mb-0"
                    v-if="item.origin_price !== item.price"
                  >
                    <s>NT.{{ $filters.currency(item.origin_price) }}</s>
                  </small>
                  <p
                    class="fs-5 text-end pe-2 mb-0"
                    :class="{ 'text-danger': item.origin_price !== item.price }"
                  >
                    NT.{{ $filters.currency(item.price) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-5" v-else>
        <p class="text-center h1 fw-bold">
          <i class="bi bi-emoji-dizzy pe-2"></i>
          找不到 {{ search }} 這張專輯
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      products: [],
      search: '',
      category: '全部',
      favor: [],
      status: {
        itemLoading: '',
      },
    };
  },
  inject: ['emitter', 'toast'],
  methods: {
    getProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
          }
          this.isLoading = false;
        })
        .catch((err) => {
          this.toast.error(`請求失敗，代碼：${err.response.status}`);
          this.isLoading = false;
        });
    },
    toDetail(id) {
      this.$router.push(`/products/${id}`);
    },
    toCategory(category) {
      this.category = category;
    },
    addCart(id, title) {
      this.status.itemLoading = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.toast.success(`已將 ${title} 加入購物車`);
            this.emitter.emit('update-cart');
          } else {
            this.toast.error('加入購物車失敗');
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
  },
  computed: {
    filterProducts() {
      let filterItems;
      if (this.category === '全部') {
        filterItems = this.products.filter((value) => value);
      } else if (this.category !== '全部') {
        filterItems = this.products.filter((value) => value.category === this.category);
      }
      if (this.search) {
        const item = this.search.toLowerCase();
        filterItems = this.products.filter((value) => value.title.toLowerCase().match(item));
      }
      return filterItems;
    },
  },
  watch: {
    search(n) {
      if (n) {
        this.category = '全部';
      }
    },
  },
  created() {
    this.getProducts();
    this.getFavor();
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/_userProducts.scss";
</style>
