<template>
  <div class="accordion-bg pt-2 pb-5">
    <div class="container">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              我該怎麼樣付款，你們有提供哪些付款方式？
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body lh-lg">
              <span>您可以使用以下付款方式： <br /></span>
              <ul>
                <li>信用卡付款 （ VISA / MasterCard / JCB ）</li>
                <li>ATM付款 / 銀行轉帳</li>
                <li>宅配取貨付款</li>
                <li>超商門市取貨付款</li>
                <li>LINE Pay</li>
                <li>Apple Pay</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              若商品有問題，我該如何退換貨？
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body lh-lg">
              收到商品後如發現有瑕疵或破損或是配件短缺的狀況，需要辦理換貨，請於到貨後7天內於平日上班時間9點至17點來電，
              我們將盡速為您處理，退貨的商品必須必須回復原狀，亦即必須回復至您收到商品時的原始狀態
              ( 包含商品主體、附件、內外包裝、隨機文件、贈品、活動贈品等
              )，我們會安排貨運前往收回商品。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              當我下標付款後，大約多久會寄出？
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body lh-lg">
              在您下標後將立即處理您的訂單，現貨商品將於三個工作天內寄出 （
              不含週六日及國定例假日 ）， 若商品無庫存將由店家與您電話聯繫。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              優惠券該如何使用？
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body lh-lg">
              請於購物車內優惠券欄位輸入優惠碼即可使用，但須注意以下事項：
              <ul>
                <li>每次線上結帳，只能使用一張折價券，門市及櫃點使用則以另行公告為主。</li>
                <li>折價券僅能使用一次且不找零，一經使用無法恢復。</li>
                <li>使用折價券的訂單如退貨或取消部分商品，折價券將失效不會歸還。</li>
                <li>折價券有使用效期，逾期後則無法使用，且無法恢復。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
