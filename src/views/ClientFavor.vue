<template>
  <div class="favor-banner d-flex justify-content-center align-items-center">
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title">願望清單</p>
      <p class="banner-title h3 pt-3 mb-0">
        「願望清單是用來買的不是用來看的，還不快下手。」
      </p>
    </div>
  </div>
  <!-- <section class="bg-color">
    <div
      class="
        favor-need
        container
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <i class="bi bi-cart-x"></i>
      <p class="h3 pb-4">願望清單內無任何商品</p>
      <router-link to="products" class="btn btn-outline-secondary">
        來去逛逛
      </router-link>
    </div>
  </section> -->
  <section class="favor-table container py-5">
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
          <tr class="text-center align-middle">
            <th>
              <div class="text-center">
                <img
                  src="https://i.imgur.com/42dQvlj.jpg"
                  class="favor-item"
                  alt="cd"
                />
                <p class="favor-content d-md-none d-block pt-2 mb-0">
                  そばにいて。
                </p>
              </div>
            </th>
            <td class="favor-content h5 d-md-table-cell d-none">そばにいて。</td>
            <td class="favor-content h5">NT.350</td>
            <td class="favor-content h5">未特價</td>
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
                  <li><a class="dropdown-item" href="#">加入購物車</a></li>
                  <li><a class="dropdown-item" href="#">刪除最愛</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr class="text-center">
            <th>
              <div class="text-center">
                <img
                  src="https://i.imgur.com/42dQvlj.jpg"
                  class="favor-item"
                  alt="cd"
                />
                <p class="favor-content d-md-none d-block pt-2 mb-0">
                  そばにいて。
                </p>
              </div>
            </th>
            <td class="h5 favor-content d-md-table-cell d-none">そばにいて。</td>
            <td class="h5 favor-content">NT.350</td>
            <td class="h5 favor-content">未特價</td>
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
                  <li><a class="dropdown-item" href="#">加入購物車</a></li>
                  <li><a class="dropdown-item" href="#">刪除最愛</a></li>
                </ul>
              </div>
            </td>
          </tr>
          <tr class="text-center">
            <th>
              <div class="text-center">
                <img
                  src="https://i.imgur.com/42dQvlj.jpg"
                  class="favor-item"
                  alt="cd"
                />
                <p class="favor-content d-md-none d-block pt-2 mb-0">
                  そばにいて。
                </p>
              </div>
            </th>
            <td class="h5 favor-content d-md-table-cell d-none">そばにいて。</td>
            <td class="h5 favor-content">NT.350</td>
            <td class="h5 favor-content">未特價</td>
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
                  <li><a class="dropdown-item" href="#">加入購物車</a></li>
                  <li><a class="dropdown-item" href="#">刪除最愛</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/components/_clientFavor.scss";
</style>
