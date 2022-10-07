<template>
  <Loading :active="isLoading"></Loading>
  <div class="row justify-content-center mt-4">
    <div class="col-10">
      <div class="text-end me-3 mb-4">
        <button
          type="button"
          class="btn btn-secondary"
          @click="openModal(true)"
        >
          建立新的優惠券
        </button>
      </div>
      <table class="table server-text align-middle">
        <thead>
          <tr>
            <th>優惠碼</th>
            <th>折扣成數</th>
            <th>到期日</th>
            <th class="text-center">是否啟用</th>
            <th class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.code">
            <td>{{ item.code }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filters.date(item.due_date) }}</td>
            <td class="text-center">
              <strong class="text-success" v-if="item.is_enabled">啟用</strong>
              <span class="text-muted" v-else>未啟用</span>
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
                      @click.prevent="openModal(false, item)"
                      >編輯</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="openDelModal(item)"
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
  <Pagination :pages="pagination" @emit-pages="getCoupon"></Pagination>
  <CouponModal
    ref="couponModal"
    @update-coupon="updateCoupon"
    :coupon="tempCoupon"
  ></CouponModal>
  <DelCouponModal ref="delCouponModal" :coupon="tempCoupon" @delCoupon="delCoupon"></DelCouponModal>
</template>

<script>
import { useToast } from 'vue-toastification';
import Pagination from '@/components/Pagination.vue';
import CouponModal from '@/components/CouponModal.vue';
import DelCouponModal from '@/components/DelCouponModal.vue';

export default {
  data() {
    return {
      coupons: {},
      pagination: {},
      isNew: false,
      tempCoupon: {},
      isLoading: false,
    };
  },
  components: {
    Pagination,
    CouponModal,
    DelCouponModal,
  },
  methods: {
    getCoupon(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
          is_enabled: 0,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      const couponComponents = this.$refs.couponModal;
      couponComponents.modalShow();
    },
    updateCoupon(tempCoupon) {
      this.isLoading = true;
      const toast = useToast();
      const couponComponents = this.$refs.couponModal;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let axiosMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`;
        axiosMethod = 'put';
      }
      couponComponents.modalHide();
      this.$http[axiosMethod](api, { data: this.tempCoupon }).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          toast.success('更新優惠券成功');
          this.getCoupon();
        }
      });
    },
    openDelModal(item) {
      const delComponents = this.$refs.delCouponModal;
      this.tempCoupon = { ...item };
      delComponents.modalShow();
    },
    delCoupon() {
      this.isLoading = true;
      const toast = useToast();
      const delComponents = this.$refs.delCouponModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      delComponents.modalHide();
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            toast.success(`已刪除 ${this.tempCoupon.title} 優惠券`);
            this.getCoupon();
          }
        });
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>

<style lang="scss">
@import '@/assets/components/_admin.scss';
</style>
