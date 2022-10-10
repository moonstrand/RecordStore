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
      <div class="cart-step bg-light h4 py-3 px-4 border border-dark text-dark">
        <i
          class="
            bi bi-check-lg
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
      <div class="cart-step h4 py-3 px-4 border border-dark text-light">
        <i
          class="
            bi bi-3-square
            pe-4
            border-end border-light border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-credit-card ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">確認付款</span>
      </div>
    </section>
    <section class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-9">
          <div class="cart-bg py-4 px-4">
            <ul class="list-group list-group-horizontal text-center flex-fill">
              <li
                class="list-group-item list-group-item-action cart-text active"
                data-bs-toggle="list"
                href="#list-order"
                role="tab"
              >
                訂單資訊
              </li>
              <li
                class="list-group-item list-group-item-action cart-text"
                data-bs-toggle="list"
                href="#list-products"
                role="tab"
              >
                訂購商品
              </li>
              <li
                class="list-group-item list-group-item-action cart-text"
                data-bs-toggle="list"
                href="#list-info"
                role="tab"
              >
                訂購須知
              </li>
            </ul>
            <div class="tab-content pt-3 px-sm-3 px-0" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-order"
                role="tabpanel"
              >
                <table
                  class="
                    table table-hover
                    cart-text
                    align-middle
                    d-sm-table d-none
                  "
                >
                  <tbody>
                    <tr>
                      <th width="140px">訂單編號</th>
                      <td class="d-flex align-items-center">
                        {{ order.id }}
                        <button
                          type="button"
                          class="btn btn-link p-0 ms-2"
                          @click="copyCode"
                        >
                          <i
                            class="
                              bi bi-clipboard-check
                              text-secondary
                              btn-copy
                            "
                          ></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                      <th>收件人姓名</th>
                      <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                      <th>收件人電話</th>
                      <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                      <th>取貨方式</th>
                      <td v-if="order.user.address === '到店自取'">自取</td>
                      <td v-else>宅配</td>
                    </tr>
                    <tr>
                      <th>收件人地址</th>
                      <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                      <th>備註</th>
                      <td>{{ order.message }}</td>
                    </tr>
                    <tr>
                      <th>訂單成立時間</th>
                      <td>{{ $filters.date(order.create_at) }}</td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td v-if="!order.is_paid" class="text-danger">
                        尚未付款
                      </td>
                      <td v-else class="text-success">已付款</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-sm-none d-block">
                  <h5 class="cart-title border-bottom py-2">訂單編號</h5>
                  <p class="cart-text d-flex align-items-center">
                    {{ order.id }}
                    <button
                      type="button"
                      class="btn btn-link p-0 ms-2"
                      @click="copyCode"
                    >
                      <i
                        class="bi bi-clipboard-check text-secondary btn-copy"
                      ></i>
                    </button>
                  </p>
                  <h5 class="cart-title border-bottom py-2">Email</h5>
                  <p class="cart-text">{{ order.user.email }}</p>
                  <h5 class="cart-title border-bottom py-2">收件人姓名</h5>
                  <p class="cart-text">{{ order.user.name }}</p>
                  <h5 class="cart-title border-bottom py-2">收件人電話</h5>
                  <p class="cart-text">{{ order.user.tel }}</p>
                  <h5 class="cart-title border-bottom py-2">取貨方式</h5>
                  <p class="cart-text" v-if="(order.user.address = '到店自取')">
                    自取
                  </p>
                  <p class="cart-text" v-else>宅配</p>
                  <h5 class="cart-title border-bottom py-2">收件人地址</h5>
                  <p class="cart-text">{{ order.user.address }}</p>
                  <h5 class="cart-title border-bottom py-2">備註</h5>
                  <p class="cart-text">"{{ order.message }}"</p>
                  <h5 class="cart-title border-bottom py-2">訂單成立時間</h5>
                  <p class="cart-text">{{ $filters.date(order.create_at) }}</p>
                  <h5 class="cart-title border-bottom py-2">付款狀態</h5>
                  <p v-if="!order.is_paid" class="text-danger">尚未付款</p>
                  <p v-else class="text-success">已付款</p>
                </div>
                <button class="btn btn-secondary w-100 mt-2" @click="payOrder">
                  確認付款
                </button>
              </div>
              <div class="tab-pane fade" id="list-products" role="tabpanel">
                <div
                  class="
                    d-flex
                    flex-sm-row flex-column
                    align-items-center
                    cart-border
                    px-3
                    py-4
                  "
                  v-for="(item, i) in order.products"
                  :key="i"
                >
                  <img :src="item.product.imageUrl" class="cart-img" :alt="item.product.title" />
                  <div
                    class="
                      cart-text
                      h5
                      fs-sm-5
                      ps-sm-5 ps-sm-3 ps-0
                      pt-sm-0 pt-3
                    "
                  >
                    <p class="mb-0">{{ item.product.title }}</p>
                    <p class="py-2 mb-0">{{ item.qty }} 張</p>
                    <p class="mb-0">
                      NT. {{ $filters.currency(item.final_total) }}
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
                    mb-0
                  "
                >
                  <p>訂單總額：</p>
                  <p>NT. {{ $filters.currency(order.total) }}</p>
                </div>
              </div>
              <div class="tab-pane fade" id="list-info" role="tabpanel">
                <p class="cart-text lh-lg h5">出貨須知：</p>
                <p class="cart-text lh-lg">
                  在您下標後將立即處理您的訂單，現貨商品將於三個工作天內寄出 （
                  不含週六日及國定例假日 ）， 若商品無庫存將由店家與您電話聯繫。
                </p>
                <p class="cart-text lh-lg h5">退換貨須知：</p>
                <ul class="cart-text lh-lg mb-0">
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
                <p class="cart-text lh-lg h5 pt-4">防詐騙提醒：</p>
                <p class="cart-text lh-lg mb-0">
                  本店不會主動要求客戶提供個人資料，或是以分期付款、扣款失敗、
                  更改結帳方式為由等名義請客戶提供銀行帳戶、信用卡資料或操作ATM轉帳匯款
                  ，還請您提高警覺，若有接到不明來電請來電詢問或是撥打165防詐騙專線查證
                  ，以免遭詐！
                </p>
              </div>
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
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getId() {
      this.orderId = this.$route.params.orderId;
    },
    getOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.order = res.data.order;
        }
      });
    },
    payOrder() {
      this.isLoading = true;
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          toast.success(res.data.message);
          this.$router.push('/success');
        }
      });
    },
    copyCode() {
      const toast = useToast();
      navigator.clipboard.writeText(this.orderId).then(() => {
        toast.success('訂單編號複製成功');
      });
    },
  },
  created() {
    this.getId();
    this.getOrder();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_userCart.scss';
</style>
