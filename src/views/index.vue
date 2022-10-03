<template>
  <!-- banner -->
  <div class="index-banner">
    <div
      class="banner-content"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="500"
      data-aos-offset="0"
      data-aos-once="true"
    >
      <p class="h1 text-light">角落唱片</p>
      <p class="h1 text-light ps-5">一個尋知音，聽知音的好場所。</p>
      <router-link to="/products" class="btn btn-outline-light ms-3 mt-4"
        >尋找知音</router-link
      >
    </div>
  </div>
  <section class="bg-color py-5">
    <div class="container">
      <p class="h1 text-center title-bold">關於角落唱片</p>
      <div class="h3 pt-4">
        <p class="text-center section-text hide">「隱藏在巷弄的小角落。」</p>
      </div>
    </div>
  </section>
  <!-- introduce -->
  <section class="bg-cover intro py-lg-5 py-3">
    <div class="container py-4">
      <div
        class="row px-md-0 px-3"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div class="col-lg-4">
          <p class="text-light lh-lg item-content">
            角落唱片，不只是一間唱片行。 <br />
            更是給予生活疲倦的人們一個放鬆的場所， <br />
            隱藏在小巷的角落，讓您遠離城市的喧囂。
          </p>
          <div class="d-flex pt-3">
            <router-link
              class="btn btn-outline-light d-block text-center"
              to="/products"
              >來去逛逛</router-link
            >
          </div>
        </div>
        <div class="col-lg-4">
          <p class="text-light lh-lg item-content py-lg-0 py-4">
            服務項目 <br />
            <i class="bi bi-music-note pe-2"></i>
            音樂試聽 <br />
            <i class="bi bi-bag pe-2"></i>
            專輯販售、海外專輯代購 <br />
            <i class="bi bi-vinyl-fill pe-2"></i>
            黑膠唱片販售
          </p>
        </div>
        <div class="col-lg-4">
          <p class="text-light lh-lg item-content">
            營業時間 & 店家資訊 <br />
            <i class="bi bi-clock pe-2"></i>
            週一至週六 AM 10:30 ~ PM 9:30 <br />
            <i class="bi bi-geo-alt pe-2"></i>
            台北市音樂區唱片街30號1樓 <br />
            <i class="bi bi-telephone pe-2"></i>
            02 - 23456789
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-color py-5">
    <div class="container">
      <p class="h1 text-center title-bold">角落唱片精選</p>
      <p class="text-center section-text h3 pt-4">
        「選好音樂坐在角落好好享受。」
      </p>
    </div>
  </section>
  <!-- recommend -->
  <section class="bg-cover recommend py-sm-5 pt-4">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-4 d-flex justify-content-center"
          data-aos="flip-left"
          data-aos-duration="1500"
          data-aos-once="true"
          v-for="item in recommend"
          :key="item.id"
        >
          <div
            class="card mb-sm-0 mb-4"
            style="width: 18rem"
            @click="toDetail(item.id)"
          >
            <img :src="item.imageUrl" class="card-img-top" alt="" />
            <div class="card-body text-light p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">{{ item.title }}</p>
              <p class="fs-5 text-end pe-2 mb-1">NT. {{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- coupon -->
  <section class="bg-color py-5">
    <div class="container">
      <p class="h1 text-center title-bold">歡慶角落唱片開幕</p>
      <p class="text-center section-text h3 pt-4">「立即抽取優惠碼享優惠。」</p>
    </div>
  </section>
  <section class="bg-cover coupon py-5">
    <div class="container py-4 d-flex justify-content-center">
      <div
        class="d-flex flex-column align-items-center coupon-box w-100 py-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        v-if="randomCode.length === 0"
      >
        <p class="section-text h3 text-light">請點此抽取折扣優惠！</p>
        <button
          type="button"
          class="btn btn-outline-light mt-4"
          @click="randomCoupon"
        >
          試手氣
        </button>
      </div>
      <div
        class="d-flex flex-column align-items-center coupon-box w-100 py-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
        v-else
        v-for="coupon in randomCode"
        :key="coupon.code"
      >
        <p class="coupon-text h3 text-light">恭喜獲得{{ coupon.title }}！</p>
        <p
          class="
            coupon-text
            h3
            text-light
            d-flex
            align-items-center
            pt-3
          "
        >
          優惠券代碼：{{ coupon.code }}
          <button type="button" class="btn btn-link p-0 ms-3" @click="copycode">
            <i class="bi bi-clipboard-check text-light btn-coupon h4"></i>
          </button>
        </p>
        <input
          type="text"
          id="coupon"
          class="d-none"
          v-model="randomCode[0].code"
        />
      </div>
    </div>
  </section>
  <!-- F&Q -->
  <section class="bg-color py-5">
    <div class="containe">
      <p class="h1 text-center title-bold">常見問題</p>
      <p class="text-center section-text h3 pt-4">
        「若解決不了問題，就解決老闆。」
      </p>
    </div>
  </section>
  <div class="accordion-bg pt-2 pb-5">
    <div class="container">
      <div class="accordion" id="accordionExample">
        <div
          class="accordion-item"
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="true"
        >
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
        <div
          class="accordion-item"
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="true"
        >
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
        <div
          class="accordion-item"
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="true"
        >
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
        <div
          class="accordion-item"
          data-aos="flip-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="true"
        >
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
                <li>
                  每次線上結帳，只能使用一張折價券，門市及櫃點使用則以另行公告為主。
                </li>
                <li>折價券僅能使用一次且不找零，一經使用無法恢復。</li>
                <li>
                  使用折價券的訂單如退貨或取消部分商品，折價券將失效不會歸還。
                </li>
                <li>折價券有使用效期，逾期後則無法使用，且無法恢復。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
  name: 'Home',
  data() {
    return {
      recommend: [],
      coupons: [
        {
          title: '歡慶開幕7折券',
          code: 'lucky777',
        },
        {
          title: '知音有你85折券',
          code: 'friend85',
        },
        {
          title: '隱藏優惠6折券',
          code: 'secret666',
        },
      ],
      randomCode: [],
    };
  },
  methods: {
    randomItem() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.recommend = res.data.products.sort(() => Math.random() - 0.5).slice(0, 3);
        }
      });
    },
    randomCoupon() {
      this.randomCode = this.coupons.sort(() => Math.random() - 0.5).slice(0, 1);
    },
    toDetail(id) {
      this.$router.push(`/products/${id}`);
    },
    copycode() {
      const toast = useToast();
      navigator.clipboard.writeText(this.randomCode[0].code)
        .then(() => {
          toast.success('優惠券複製成功');
        });
    },
  },
  created() {
    this.randomItem();
  },
};
</script>

<style lang="scss">
@import "../assets/components/index.scss";
</style>
