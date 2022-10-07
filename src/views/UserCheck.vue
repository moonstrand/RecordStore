<template>
  <Loading :active="isLoading"></Loading>
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
      <div class="row d-flex flex-xl-row flex-column-reverse g-3">
        <Form class="col-xl-7" @submit="submitData" v-slot="{ errors }">
          <div class="cart-bg pb-4 px-4">
            <p class="text-center h3 py-4 mb-0 cart-title">客戶資料</p>
            <div class="form-floating mb-3">
              <field
                name="email"
                type="email"
                class="form-control"
                id="floatingInput"
                rules="email|required"
                placeholder="name@example.com"
                :class="{ 'is-invalid': errors['email']}"
                v-model="form.user.email"
              ></field>
              <label for="floatingInput">Email</label>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <field
                name="姓名"
                type="text"
                class="form-control"
                id="floatingInput"
                rules="required"
                placeholder="收件人姓名"
                :class="{ 'is-invalid': errors['姓名']}"
                v-model="form.user.name"
              ></field>
              <label name="姓名" for="floatingInput">收件人姓名</label>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <field
                name="電話"
                type="phone"
                class="form-control"
                id="floatingInput"
                :rules="isPhone"
                placeholder="收件人電話"
                :class="{ 'is-invalid': errors['電話']}"
                v-model="form.user.tel"
              ></field>
              <label name="電話" for="floatingInput">收件人電話</label>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <field
                name="地址"
                type="text"
                class="form-control"
                id="floatingInput"
                rules="required"
                placeholder="收件人地址"
                :class="{ 'is-invalid': errors['地址']}"
                :disabled="selfPick"
                v-model="form.user.address"
              ></field>
              <label name="地址" for="floatingInput" :class="{ 'text-secondary': selfPick }"
                >收件人地址</label
              >
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="有任何備註請留言"
                id="floatingTextarea2"
                style="height: 150px"
                v-model="form.message"
              ></textarea>
              <label for="floatingTextarea2">備註</label>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input rounded-0"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                v-model="selfPick"
              />
              <label class="form-check-label" for="flexCheckDefault">
                到店自取
              </label>
            </div>
            <button class="btn btn-secondary w-100">
              確認下單
            </button>
          </div>
        </form>
        <div class="col-xl-5">
          <div class="cart-bg pb-2 px-4">
            <p class="text-center h3 py-4 mb-0 cart-title">訂單明細</p>
            <div
              class="d-flex align-items-center cart-border px-3 py-4"
              v-for="item in carts.carts"
              :key="item.id"
            >
              <img :src="item.product.imageUrl" class="cart-img" alt="cd" />
              <div class="cart-text fs-sm-5 ps-sm-5 ps-3">
                <p class="mb-0">{{ item.product.title }}</p>
                <p class="py-2 mb-0">{{ item.qty }} 張</p>
                <p class="mb-0" v-if="carts.total === carts.final_total">
                  NT. {{ $filters.currency(item.final_total) }}
                </p>
                <p class="text-success mb-0" v-else>
                  折扣價： NT. {{ $filters.currency(item.final_total) }}
                </p>
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
              <p>NT. {{ $filters.currency(carts.total) }}</p>
            </div>
            <div class="cart-text h5 d-flex justify-content-between px-3">
              <p>折扣金額：</p>
              <p class="text-danger">
                NT. {{ $filters.currency(carts.total - carts.final_total) }}
              </p>
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
              <p>NT.{{ $filters.currency(carts.final_total) }}</p>
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
      carts: {},
      form: {
        user: {},
        message: '',
      },
      selfPick: false,
    };
  },
  inject: ['emitter'],
  methods: {
    getCarts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.carts = res.data.data;
        }
      });
    },
    submitData() {
      this.isLoading = true;
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('update-cart');
            toast.success(res.data.message);
            this.$router.push(`payment/${res.data.orderId}`);
          }
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  watch: {
    selfPick(n) {
      if (n === true) {
        this.form.user.address = '到店自取';
      } else {
        this.form.user.address = '';
      }
    },
  },
  created() {
    this.getCarts();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_userCart.scss';
</style>
