<template>
  <Loading :active="isLoading"></Loading>
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
            <td>NT. {{ $filters.currency(order.total) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  :checked="order.is_paid"
                  v-model="order.is_paid"
                  @change="updatePaid(order)"
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
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="openDelModal(order)"
                      >刪除</a
                    >
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder"></OrderModal>
  <DelOrderModal ref="delOrderModal" :order="tempOrder" @delOrder="delOrder"></DelOrderModal>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
</template>

<script>
import { useToast } from 'vue-toastification';
import OrderModal from '@/components/OrderModal.vue';
import DelOrderModal from '@/components/DelOrderModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    OrderModal,
    DelOrderModal,
    Pagination,
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(order) {
      const orderComponents = this.$refs.orderModal;
      this.tempOrder = { ...order };
      orderComponents.modalShow();
    },
    openDelModal(order) {
      const delComponents = this.$refs.delOrderModal;
      this.tempOrder = { ...order };
      delComponents.modalShow();
    },
    delOrder() {
      this.isLoading = true;
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      const delComponents = this.$refs.delOrderModal;
      delComponents.modalHide();
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            toast.success(`已刪除 ${this.tempOrder.id}`);
            this.getOrders();
          }
        });
    },
    updatePaid(order) {
      const toast = useToast();
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.$http.put(api, { data: { ...order } })
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
          }
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style lang="scss">
@import '@/assets/components/_admin.scss';
</style>
