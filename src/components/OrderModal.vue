<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark text-light">
          <h5 class="modal-title" id="exampleModalLabel">訂單明細</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row py-2">
            <div class="col-5">
              <span class="h4 fw-bold ms-1">用戶資料</span>
              <table class="table mt-2 mb-4">
                <tbody v-if="order.user">
                  <tr>
                    <th>姓名</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td colspan="2">{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td colspan="2">{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </table>
              <span class="h4 fw-bold ms-1">訂單備註</span>
              <p class="h5 ms-1 mt-3">"{{ order.message }}"</p>
            </div>
            <div class="col-7">
              <span class="h4 fw-bold ms-1">訂單細節</span>
              <table class="table mt-2 mb-4">
                <tbody>
                  <tr>
                    <th>訂單編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(order.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="order.is_paid">{{ $filters.date(order.paid_date) }}</span>
                      <span class="text-danger fw-bold" v-else>未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span class="text-success fw-bold" v-if="order.is_paid">已付款</span>
                      <span class="text-danger fw-bold" v-else>未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>NT. {{ $filters.currency(order.total) }}</td>
                  </tr>
                </tbody>
              </table>
              <span class="h4 fw-bold ms-1">選購商品</span>
              <table class="table mt-2">
                <tbody>
                  <tr v-for="(item, i) in order.products" :key="i">
                    <th>{{ item.product.title }}</th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td>NT. {{ $filters.currency(item.product.price) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      modal: '',
    };
  },
  props: {
    order: {},
  },
  mixins: [modalMixin],
};
</script>
