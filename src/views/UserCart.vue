<template>
  <Loading :active="isLoading"></Loading>
  <div class="nav-bg"></div>
  <div class="bg-color cart-h py-sm-0 py-4">
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
      <div class="row g-3 mb-3">
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
              v-for="item in tempcarts.carts"
              :key="item.id"
            >
              <div class="col-md-6 align-items-center h5 my-sm-0 my-4">
                <div class="row">
                  <div
                    class="
                      col-md-6
                      d-flex
                      justify-content-center
                      align-items-center
                      cart-text
                    "
                  >
                    <img
                      :src="item.product.imageUrl"
                      class="cart-img"
                      alt="cd"
                    />
                  </div>
                  <div
                    class="
                      col-md-6
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                      cart-text
                      pt-md-0 pt-3
                    "
                  >
                    <p class="mb-3">{{ item.product.title }}</p>
                    <p
                      class="mb-0"
                      v-if="tempcarts.final_total === tempcarts.total"
                    >
                      NT. {{ $filters.currency(item.total) }}
                    </p>
                    <p class="text-success mb-0" v-else>
                      NT. {{ $filters.currency(item.final_total) }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 my-0 h5">
                <div class="row pt-md-0 pt-4 mb-sm-0 mb-4">
                  <div
                    class="
                      col-md-6
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <div class="input-group input-group-sm cart-qty">
                      <button
                        class="btn btn-outline-secondary count rounded-0"
                        type="button"
                        id="button-addon1"
                        @click="updateCart(item, item.qty + 1)"
                      >
                        <i class="bi bi-plus h5"></i>
                      </button>
                      <input
                        type="text"
                        class="form-control border-secondary text-center"
                        placeholder=""
                        min="1"
                        v-model.number="item.qty"
                        disabled
                      />
                      <button
                        class="btn btn-outline-secondary count rounded-0"
                        type="button"
                        id="button-addon2"
                        @click="updateCart(item, item.qty - 1)"
                        :disabled="item.qty === 1"
                      >
                        <i class="bi bi-dash h5"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    class="
                      col-md-6
                      d-flex
                      justify-content-center
                      align-items-center
                      pe-4
                      pt-md-0 pt-4
                    "
                  >
                    <a
                      class="btn btn-sm btn-outline-danger"
                      href="#"
                      @click.prevent="deleteCart(item)"
                    >
                      <i class="bi bi-bag-x pe-2"></i>刪除此商品
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                container
                d-flex
                flex-column
                justify-content-center
                align-items-center
                cart-border cart-need
                pb-4
              "
              v-if="tempcarts.total === 0"
            >
              <i class="bi bi-cart-x"></i>
              <p class="h3 pb-4">購物車內無任何商品</p>
              <router-link to="/products" class="btn btn-outline-secondary">
                來去逛逛
              </router-link>
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
                justify-content-xl-between
                justify-content-sm-start
                justify-content-between
                px-3
                pt-4
              "
            >
              <p>訂單總額：</p>
              <p>NT. {{ $filters.currency(tempcarts.total) }}</p>
            </div>
            <div
              class="
                cart-text
                h5
                d-flex
                justify-content-xl-between
                justify-content-sm-start
                justify-content-between
                px-3
                mb-0
              "
            >
              <p>待折扣金額：</p>
              <p class="text-danger">
                NT.
                {{ $filters.currency(tempcarts.total - tempcarts.final_total) }}
              </p>
            </div>
            <div class="ps-3 pb-2">
              <small
                class="text-success"
                v-if="tempcarts.final_total !== tempcarts.total"
              >
                已套用優惠券
              </small>
            </div>
            <div
              class="
                row
                g-0
                d-flex
                justify-content-xl-center justify-content-md-end
                cart-border
                pt-4
                pb-2
              "
            >
              <div class="col-xl-12 col-md-5 px-2">
                <div class="input-group cart-coupon mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入優惠碼"
                    v-model="code"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    @click="applyCoupon"
                    :disabled="tempcarts.total === 0 || tempcarts.final_total !== tempcarts.total"
                  >
                    套用優惠碼
                  </button>
                </div>
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
              <router-link
                to="check"
                class="btn btn-secondary w-100 mt-4"
                :class="{ disabled: tempcarts.total === 0 }"
              >
                確認訂單
              </router-link>
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
      isLoading: false,
      tempcarts: {},
      code: '',
    };
  },
  inject: ['emitter'],
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.tempcarts = res.data.data;
        }
      });
    },
    updateCart(item, qty) {
      this.isLoading = true;
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const carts = {
        product_id: item.product_id,
        qty,
      };
      this.$http.put(api, { data: carts }).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.emitter.emit('update-cart');
          toast.success('更新購物車成功');
          this.getCart();
        }
      });
    },
    deleteCart(item) {
      this.isLoading = true;
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.emitter.emit('update-cart');
          toast.success(`已刪除 ${item.product.title}`);
          this.getCart();
        }
      });
    },
    applyCoupon() {
      this.isLoading = true;
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = { code: this.code };
      this.$http.post(api, { data: coupon }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          toast.success(res.data.message);
          this.getCart();
          this.code = '';
        } else {
          toast.error(res.data.message);
        }
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_userCart.scss';
</style>
