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
          <tr>
            <td>2022/8/15</td>
            <td>test@email.com</td>
            <td>
              <ul class="list-unstyled mb-0">
                <li>
                  <small>そばにいて。 數量：1</small>
                </li>
              </ul>
            </td>
            <td>NT.350</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" />
                <label class="form-check-label">
                  <span class="text-success fw-bold">已付款</span>
                  <!-- <span class="text-danger fw-bold">未付款</span> -->
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
                  <li><a class="dropdown-item" href="#">詳細</a></li>
                  <li><a class="dropdown-item" href="#">刪除</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/components/_Server.scss";
</style>
