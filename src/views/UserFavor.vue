<template>
  <Loading :active="isLoading" loader="bars" color="#555" />
  <div class="banner favor-banner d-flex justify-content-center align-items-center">
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title">願望清單</p>
      <p class="banner-title h3 pt-3 mb-0">
        「願望清單是用來買的不是用來看的，還不快下手。」
      </p>
    </div>
  </div>
  <section class="favor-table container min-h py-5" v-if="favor.length !== 0">
    <div class="table-responsive">
      <table class="table table-hover align-middle">
        <thead>
          <tr class="favor-title bg-dark align-middle text-center h5">
            <th scope="col">專輯</th>
            <th scope="col" class="d-md-table-cell d-none">名稱</th>
            <th scope="col">價格</th>
            <th scope="col">狀態</th>
            <th scope="col">編輯</th>
          </tr>
        </thead>
        <tbody class="bg-light">
          <tr
            class="text-center align-middle"
            v-for="(item, i) in favor"
            :key="i"
          >
            <th>
              <div class="text-center">
                <img :src="item.imageUrl" class="favor-item" :alt="item.title" />
                <p class="favor-content d-md-none d-block pt-2 mb-0">
                  {{ item.title }}
                </p>
              </div>
            </th>
            <td class="favor-content h5 d-md-table-cell d-none">
              {{ item.title }}
            </td>
            <td
              class="favor-content h5"
              :class="{ 'text-danger': item.origin_price !== item.price }"
            >
              NT.{{ $filters.currency(item.price) }}
            </td>
            <td
              class="favor-content h5"
              v-if="item.origin_price === item.price"
            >
              未特價
            </td>
            <td class="favor-content h5 text-danger" v-else>特價中</td>
            <td>
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
                      @click.prevent="addCart(item.id, item.title)"
                      >加入購物車</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="removeFavor(item)"
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
  </section>
  <section class="bg-color" v-else>
    <div
      class="
        favor-need
        container
        min-h
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <i class="bi bi-cart-x"></i>
      <p class="h3 pb-4">願望清單內無任何商品</p>
      <RouterLink to="/products" class="btn btn-outline-secondary">
        來去逛逛
      </RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      favor: [],
    };
  },
  inject: ['emitter', 'toast'],
  methods: {
    getFavor() {
      this.isLoading = true;
      this.favor = JSON.parse(localStorage.getItem('favor')) || [];
      this.isLoading = false;
    },
    removeFavor(product) {
      const favorId = product.id;
      const delFavor = this.favor.find((item) => item.id === favorId);
      this.favor.splice(this.favor.indexOf(delFavor), 1);
      localStorage.setItem('favor', JSON.stringify(this.favor));
      this.emitter.emit('update-favor');
      this.toast.success(`${product.title} 已從願望清單移除`);
      this.getFavor();
    },
    addCart(id, title) {
      this.isLoading = true;
      const cart = {
        product_id: id,
        qty: +1,
      };
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.emitter.emit('update-cart');
          this.toast.success(`已將 ${title} 加入購物車`);
        } else {
          this.toast.error('加入購物車失敗');
        }
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getFavor();
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/components/_userFavor.scss';
</style>
