<template>
  <div class="row justify-content-center mt-4">
    <div class="col-10">
      <div class="text-end me-3 mb-4">
        <button type="button" class="btn btn-secondary">建立新的優惠券</button>
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
          <tr>
            <td>coupon code</td>
            <td>20%</td>
            <td>2022/08/08</td>
            <td class="text-center">
              <strong class="text-success">啟用</strong>
              <!-- <span class="text-muted">未啟用</span> -->
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
