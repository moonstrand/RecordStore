<template>
  <div class="row justify-content-center mt-4">
    <div class="col-10">
      <div class="text-end me-3 mb-4">
        <button class="btn btn-secondary" type="button">新增產品</button>
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
          <tbody>
            <tr>
              <td>東洋</td>
              <td>そばにいて。</td>
              <td class="text-center">NT.350</td>
              <td class="text-center">NT.350</td>
              <td class="text-center">
                <span class="text-secondary">未啟用</span>
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
  </div>
</template>

<style lang="scss">
@import "../assets/components/_Server.scss";
</style>
