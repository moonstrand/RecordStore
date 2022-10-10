<template>
  <Loading :active="isLoading"></Loading>
  <div class="row justify-content-center mt-4">
    <div class="col-10">
      <div class="text-end me-3 mb-4">
        <button
          class="btn btn-secondary"
          type="button"
          @click="openModal(true)"
        >
          新增產品
        </button>
      </div>
      <div>
        <table class="table table-hover server-text align-middle">
          <thead>
            <tr>
              <th width="100">分類</th>
              <th width="120">產品名稱</th>
              <th width="100" class="text-center">原價</th>
              <th width="100" class="text-center">售價</th>
              <th width="120" class="text-center">是否啟用</th>
              <th width="100" class="text-center">編輯</th>
            </tr>
          </thead>
          <tbody v-for="item in products" :key="item.key">
            <tr>
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td class="text-center">NT.{{ $filters.currency(item.origin_price) }}</td>
              <td class="text-center">NT.{{ $filters.currency(item.price) }}</td>
              <td class="text-center">
                <span class="text-success fw-bold" v-if="item.is_enabled"
                  >啟用</span
                >
                <span class="text-secondary" v-else>未啟用</span>
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
  </div>
  <ProductsModal
    :product="tempProduct"
    @update-product="updateProduct"
    ref="productsModal"
  ></ProductsModal>
  <DelProductModal
    :product="tempProduct"
    @del-product="delProduct"
    ref="deleteModal"
  ></DelProductModal>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
</template>

<script>
import { useToast } from 'vue-toastification';
import ProductsModal from '@/components/ProductsModal.vue';
import DelProductModal from '@/components/DelProductModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      isLoading: false,
      pagination: {},
    };
  },
  components: {
    ProductsModal,
    DelProductModal,
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productsModal;
      productComponent.modalShow();
    },
    updateProduct(item) {
      this.isLoading = true;
      const toast = useToast();
      this.tempProduct = item;
      const productComponent = this.$refs.productsModal;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let axiosMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        axiosMethod = 'put';
      }
      productComponent.modalHide();
      this.$http[axiosMethod](api, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.getProducts();
            toast.success('更新商品成功');
          } else {
            toast.error('更新商品失敗');
          }
        });
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.deleteModal;
      delComponent.modalShow();
    },
    delProduct() {
      this.isLoading = true;
      const toast = useToast();
      const delComponent = this.$refs.deleteModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      delComponent.modalHide();
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.getProducts();
          toast.success('刪除商品成功');
        } else {
          toast.error('刪除產品失敗');
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_admin.scss';
</style>