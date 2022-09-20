<template>
  <div class="row justify-content-center mt-5">
    <div class="col-10">
      <table class="table table-hover server-text align-middle">
        <thead>
          <tr>
            <th>購買時間</th>
            <th>Email</th>
            <th>訂單明細</th>
            <th width="120">應付金額</th>
            <th width="120">是否付款</th>
            <th class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ $filters.date(order.create_at) }}</td>
            <td>{{ order.user.email }}</td>
            <td>
              <ul
                class="list-unstyled mb-0"
                v-for="item in order.products"
                :key="item.id"
              >
                <li>
                  <small>{{ item.product.title }} 數量：{{ item.qty }}</small>
                </li>
              </ul>
            </td>
            <td>NT. {{ order.total }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  v-model="order.is_paid"
                />
                <label class="form-check-label">
                  <span class="text-success fw-bold" v-if="order.is_paid"
                    >已付款</span
                  >
                  <span class="text-danger fw-bold" v-else>未付款</span>
                </label>
              </div>
            </td>
            <td class="text-center">
              <div class="dropdown">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  編輯
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="openModal(order)"
                      >詳細</a
                    >
                  </li>
                  <li><a class="dropdown-item" href="#">刪除</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder"></OrderModal>
</template>

<script>
import OrderModal from '../components/OrderModal.vue';

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
    };
  },
  components: {
    OrderModal,
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=1`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.orders = res.data.orders;
        }
      });
    },
    openModal(order) {
      this.tempOrder = { ...order };
      const orderComponents = this.$refs.orderModal;
      orderComponents.modalShow();
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style lang="scss">
@import "../assets/components/_Server.scss";
</style>
