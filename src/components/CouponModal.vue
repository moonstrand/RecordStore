<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark text-light">
          <h5 class="modal-title">新增優惠券</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row g-2 align-items-center">
            <div class="col-6">
              <label for="couponTitle" class="form-label">優惠券名稱</label>
              <input
                type="text"
                id="couponTitle"
                class="form-control"
                v-model="tempCoupon.title"
              />
            </div>
            <div class="col-6">
              <label for="percent" class="form-label">折扣成數</label>
              <input
                type="number"
                id="percent"
                class="form-control"
                min="0"
                v-model="tempCoupon.percent"
              />
            </div>
            <div class="col-6">
              <label for="code" class="form-label">優惠碼</label>
              <input
                type="text"
                id="code"
                class="form-control mt-0"
                v-model="tempCoupon.code"
              />
            </div>
            <div class="col-6">
              <label for="due_date" class="form-label">到期日</label>
              <input
                type="date"
                id="due_date"
                class="form-control"
                v-model="due_date"
              />
            </div>
            <div class="col">
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  id="is_enabled"
                  v-model="tempCoupon.is_enabled"
                />
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-coupon', tempCoupon)"
          >
            更新優惠券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../assets/mixins/modalMixin';

export default {
  props: {
    coupon: {},
  },
  emits: ['update-coupon'],
  data() {
    return {
      tempCoupon: {},
      due_date: '',
    };
  },
  mixins: [modalMixin],
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
      const toDate = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = toDate;
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
  },
};
</script>
