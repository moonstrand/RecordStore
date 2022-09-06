<template>
  <div class="container-fluid">
    <div class="text-end mt-4 me-3">
      <button class="btn btn-secondary" type="button">新增產品</button>
    </div>
    <table class="table mt-4 align-middle">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td class="text-right"></td>
          <td class="text-right"></td>
          <td>
            <span class="text-secondary">未啟用</span>
          </td>
          <td>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
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
</template>
