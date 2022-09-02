<template>
  <div class="nav-bg"></div>
  <div class="bg-color py-4">
    <section
      class="
        container
        d-flex
        flex-md-row flex-column
        justify-content-around
        align-items-center
        py-md-5
        pb-3
      "
    >
      <div class="cart-step bg-light h4 py-3 px-4 border border-dark text-dark">
        <i
          class="
            bi bi-check-lg
            pe-4
            border-end border-dark border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-cart-check ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">確認訂單</span>
      </div>
      <i class="bi bi-chevron-right d-md-block d-none h4"></i>
      <i class="bi bi-chevron-down d-md-none d-block h4"></i>
      <div class="cart-step bg-light h4 py-3 px-4 border border-dark text-dark">
        <i
          class="
            bi bi-check-lg
            pe-4
            border-end border-dark border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-file-text ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">填寫資料</span>
      </div>
      <i class="bi bi-chevron-right d-md-block d-none h4"></i>
      <i class="bi bi-chevron-down d-md-none d-block h4"></i>
      <div class="cart-step h4 py-3 px-4 border border-dark text-light">
        <i
          class="
            bi bi-3-square
            pe-4
            border-end border-light border-2
            d-lg-inline d-none
          "
        ></i>
        <i class="bi bi-credit-card ps-lg-4 ps-0"></i>
        <span class="h5 ps-3">確認付款</span>
      </div>
    </section>
    <section class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-9">
          <div class="cart-bg py-4 px-4">
            <ul class="list-group list-group-horizontal text-center flex-fill">
              <li
                class="list-group-item list-group-item-action cart-text"
                data-bs-toggle="list"
                href="#list-order"
                role="tab"
              >
                訂單資訊
              </li>
              <li
                class="list-group-item list-group-item-action cart-text"
                data-bs-toggle="list"
                href="#list-products"
                role="tab"
              >
                訂購商品
              </li>
              <li
                class="list-group-item list-group-item-action cart-text"
                data-bs-toggle="list"
                href="#list-info"
                role="tab"
              >
                訂購須知
              </li>
            </ul>
            <div class="tab-content pt-3 px-3" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-order"
                role="tabpanel"
              >
                <table class="table table-hover cart-text">
                  <tbody>
                    <tr>
                      <th width="250px">訂單編號</th>
                      <td>1234567890</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>test@email.com</td>
                    </tr>
                    <tr>
                      <th>收件人姓名</th>
                      <td>test</td>
                    </tr>
                    <tr>
                      <th>收件人電話</th>
                      <td>0912345678</td>
                    </tr>
                    <tr>
                      <th>取貨方式</th>
                      <td>宅配</td>
                    </tr>
                    <tr>
                      <th>收件人地址</th>
                      <td>測試地址</td>
                    </tr>
                    <tr>
                      <th>備註</th>
                      <td>測試</td>
                    </tr>
                    <tr>
                      <th>訂單成立時間</th>
                      <td>2022/09/02</td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>尚未付款</td>
                    </tr>
                  </tbody>
                </table>
                <router-link
                  to="success"
                  class="btn btn-secondary rounded-0 w-100 mt-2"
                >
                  確認付款
                </router-link>
              </div>
              <div class="tab-pane fade" id="list-products" role="tabpanel">
                <div
                  class="
                    d-flex
                    flex-sm-row flex-column
                    align-items-center
                    cart-border
                    px-3
                    py-4
                  "
                >
                  <img
                    src="https://i.imgur.com/42dQvlj.jpg"
                    class="cart-img"
                    alt="cd"
                  />
                  <div class="cart-text h5 fs-sm-5 ps-sm-5 ps-3 pt-sm-0 pt-3">
                    <p class="mb-0">そばにいて。</p>
                    <p class="py-2 mb-0">1 張</p>
                    <p class="mb-0">NT.350</p>
                  </div>
                </div>
                <div
                  class="
                    cart-text cart-border
                    h5
                    d-flex
                    justify-content-between
                    px-3
                    pt-4
                    mb-0
                  "
                >
                  <p>訂單總額：</p>
                  <p>NT.350</p>
                </div>
              </div>
              <div class="tab-pane fade" id="list-info" role="tabpanel">
                <p class="cart-text lh-lg h5">出貨須知：</p>
                <p class="cart-text lh-lg">
                  在您下標後將立即處理您的訂單，現貨商品將於三個工作天內寄出 （
                  不含週六日及國定例假日 ）， 若商品無庫存將由店家與您電話聯繫。
                </p>
                <p class="cart-text lh-lg h5">退換貨須知：</p>
                <ul class="cart-text lh-lg mb-0">
                  <li>
                    收到商品後有7天猶豫期，若商品有問題請於到貨後7天內於平日上班時間9點至17點來電，
                    我們將盡速為您處理。
                  </li>
                  <li>
                    退貨的商品必須必須回復原狀，包含商品主體、附件、內外包裝、隨機文件、贈品、活動贈品等，我們會安排貨運前往收回商品。
                  </li>
                  <li>
                    限量商品因數量有限，若庫存不足時，將無法提供換貨，敬請包涵見諒。
                  </li>
                </ul>
                <p class="cart-text lh-lg h5 pt-4">防詐騙提醒：</p>
                <p class="cart-text lh-lg mb-0">
                  本店不會主動要求客戶提供個人資料，或是以分期付款、扣款失敗、
                  更改結帳方式為由等名義請客戶提供銀行帳戶、信用卡資料或操作ATM轉帳匯款
                  ，還請您提高警覺，若有接到不明來電請來電詢問或是撥打165防詐騙專線查證
                  ，以免遭詐！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "../assets/components/_clientCart.scss";
</style>
