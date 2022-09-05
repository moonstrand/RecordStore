<template>
  <div class="order-banner d-flex justify-content-center align-items-center">
    <div class="banner-content text-center h1 text-light">
      <p class="banner-title">訂單查詢</p>
      <p class="h3 pt-3 mb-0">「隨時追蹤你的專輯訂單。」</p>
    </div>
  </div>
  <div class="order-h bg-color d-flex align-items-center">
    <section class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-8 py-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-secondary"
              placeholder="請輸入訂單編號"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
          <div class="pt-5">
            <p class="order-title border-start border-danger border-5 h4 ps-3">
              使用方法
            </p>
            <div
              class="alert alert-secondary method-bg rounded-0 mt-4"
              role="alert"
            >
              <ul class="lh-lg order-text">
                <li>訂單編號格式： -N9VLDX-dLpfFDGdZx3H</li>
                <li>
                  在您下標後將立即處理您的訂單，現貨商品將於三個工作天內寄出（不含週六日及國定例假日）
                </li>
                <li>商品若無庫存將由店家與您電話聯繫。</li>
                <li>
                  限量商品因數量有限，若庫存不足時，將無法提供換貨，敬請包涵見諒。
                </li>
              </ul>
              <p class="order-text lh-lg h5 px-2">防詐騙提醒：</p>
              <p class="order-text lh-lg mb-0 px-2">
                本店不會主動要求客戶提供個人資料，或是以分期付款、扣款失敗、
                更改結帳方式為由等名義請客戶提供銀行帳戶、信用卡資料或操作ATM轉帳匯款
                ，還請您提高警覺，若有接到不明來電請來電詢問或是撥打165防詐騙專線查證
                ，以免遭詐！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "../assets/components/_clientOrder.scss";
</style>
