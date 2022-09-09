<template>
  <div class="row justify-content-center mt-4">
    <div class="col-10">
      <div class="text-end me-3 mb-4">
        <button class="btn btn-secondary" type="button" @click="openModal">
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
              <td class="text-center">NT.{{ item.origin_price }}</td>
              <td class="text-center">NT.{{ item.price }}</td>
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
                    <li><a class="dropdown-item" href="#">編輯</a></li>
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
  <DeleteModal :product="tempProduct" @del-product="delProduct" ref="deleteModal"></DeleteModal>
</template>

<script>
import { useToast } from 'vue-toastification';
import ProductsModal from '../components/ProductsModal.vue';
import DeleteModal from '../components/DeleteModal.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
    };
  },
  components: {
    ProductsModal,
    DeleteModal,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=1`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
        }
      });
    },
    openModal() {
      this.tempProduct = {};
      const productComponent = this.$refs.productsModal;
      productComponent.modalShow();
    },
    updateProduct() {
      const toast = useToast();
      const productComponent = this.$refs.productsModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      this.$http.post(api, { data: this.tempProduct }).then((res) => {
        if (res.data.success) {
          productComponent.modalHide();
          this.getProducts();
          toast.success('新增商品成功');
        }
      });
    },
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.deleteModal;
      delComponent.modalShow();
    },
    delProduct() {
      const toast = useToast();
      const delComponent = this.$refs.deleteModal;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(api)
        .then((res) => {
          delComponent.modalHide();
          if (res.data.success) {
            console.log(res);
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
@import "../assets/components/_Server.scss";
</style>
