<template>
  <!-- banner -->
  <div class="products-banner d-flex justify-content-center align-items-center">
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title">專輯列表</p>
      <p class="h3 pt-3 mb-0">「讓音樂帶給你全新的感動。」</p>
    </div>
  </div>
  <div class="products-h bg-color">
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
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '全部' }"
              @click.prevent="categoryChange('全部')"
              >所有類別</a
            >
          </li>
          <li>
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '西洋' }"
              @click.prevent="categoryChange('西洋')"
              >西洋</a
            >
          </li>
          <li>
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '東洋' }"
              @click.prevent="categoryChange('東洋')"
              >東洋</a
            >
          </li>
          <li>
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '華語' }"
              @click.prevent="categoryChange('華語')"
              >華語</a
            >
          </li>
          <li>
            <a
              class="category-link"
              href="#"
              :class="{ categoryActive: category == '純音樂' }"
              @click.prevent="categoryChange('純音樂')"
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
    <!-- Products list -->
    <section class="products container pt-xl-3 pt-0 pb-xl-5 pb-0">
      <div class="row">
        <div
          class="col-xxl-3 col-lg-4 col-sm-6 mb-xxl-0"
          v-for="item in filterProducts"
          :key="item.id"
        >
          <div class="card mb-4">
            <a href="#" :title="item.title" @click.prevent="toDetail(item.id)">
              <img :src="item.imageUrl" class="card-img-top" alt="" />
            </a>
            <div class="card-body p-2">
              <div class="d-flex justify-content-between align-items-center">
                <p class="fs-5 ps-2 mt-1 mb-0">{{ item.title }}</p>
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
                  @click.prevent="addCart(item.id, item.title)"
                >
                  加入購物車
                </button>
                <p class="fs-5 text-end pe-2 mb-0">NT.{{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        :pages="pagination"
        @emit-pages="getProducts"
        class="mt-4"
        v-if="!filterMode"
      ></Pagination>
    </section>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';
import Pagination from '../components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      filterMode: false,
      search: '',
      pagination: {},
      category: '全部',
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    categoryChange(category) {
      if (category !== '全部') {
        this.filterMode = true;
      } else if (category === '全部') {
        this.filterMode = false;
      }
      this.category = category;
    },
    toDetail(id) {
      this.$router.push(`/products/${id}`);
    },
    addCart(id, title) {
      const toast = useToast();
      const cart = {
        product_id: id,
        qty: +1,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          toast.success(`已將 ${title} 加入購物車`);
        } else {
          toast.error('加入購物車失敗');
        }
      });
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
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import "../assets/components/_clientProducts.scss";
</style>
