<template>
  <section class="banner-bg"></section>
  <section class="bg-color pt-5">
    <div class="container">
      <p class="h1 text-center title-bold">關於角落唱片</p>
      <div class="h3 pt-4 pb-5 mb-0">
        <p class="text-center section-text hide">「隱藏在巷弄的小角落。」</p>
      </div>
    </div>
  </section>
  <section class="bg-cover intro py-5 mb-4">
    <div class="container d-flex justify-content-around align-item-center py-4">
      <div class="intro-content">
        <p class="h5 text-light lh-lg">
          角落唱片，不只是一間唱片行。 <br />
          更是給予生活疲倦的人們一個放鬆的場所， <br />
          隱藏在小巷的角落，讓您遠離城市的喧囂。
        </p>
        <div class="d-flex pt-3">
          <a class="btn btn-outline-light d-block text-center" href="#"
            >來去逛逛</a
          >
        </div>
      </div>
      <p class="h5 text-light lh-lg item-content">
        服務項目 <br />
        <i class="bi bi-music-note pe-2"></i>
        音樂試聽 <br />
        <i class="bi bi-bag pe-2"></i>
        專輯販售、海外專輯代購 <br />
        <i class="bi bi-vinyl-fill pe-2"></i>
        黑膠唱片販售
      </p>
      <p class="h5 text-light lh-lg item-content">
        營業時間 & 店家資訊 <br />
        <i class="bi bi-clock pe-2"></i>
        週一至週六 AM 10:30 ~ PM 9:30 <br />
        <i class="bi bi-geo-alt pe-2"></i>
        台北市音樂區唱片街30號1樓 <br />
        <i class="bi bi-telephone pe-2"></i>
        02 - 23456789
      </p>
    </div>
  </section>
  <section class="bg-color">
    <div class="container pt-5 pb-4">
      <p class="h1 text-center title-bold">角落唱片精選</p>
      <p class="text-center section-text h3 pt-4 pb-5">
        「選好音樂坐在角落好好享受。」
      </p>
    </div>
  </section>
  <section class="bg-cover content py-5 mb-4">
    <div class="container">
      <div class="row">
        <div class="col-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img src="../assets/images/cd-2.jpg" class="card-img-top" alt="" />
            <div class="card-body text-light p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">好きだから。</p>
              <p class="fs-5 text-end pe-2 mb-1">NT.350</p>
            </div>
          </div>
        </div>
        <div class="col-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img src="../assets/images/cd-1.jpg" class="card-img-top" alt="" />
            <div class="card-body text-light p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">そばにいて。</p>
              <p class="fs-5 text-end pe-2 mb-1">NT.350</p>
            </div>
          </div>
        </div>
        <div class="col-4 d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <img src="../assets/images/cd-3.jpg" class="card-img-top" alt="" />
            <div class="card-body text-light p-2">
              <p class="fs-5 ps-2 mt-1 mb-0">High</p>
              <p class="fs-5 text-end pe-2 mb-1">NT.400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-color">
    <div class="container pt-5 pb-4">
      <p class="h1 text-center title-bold">歡慶角落唱片開幕</p>
      <p class="text-center section-text h3 pt-4 pb-5">
        「立即抽取優惠碼享優惠。」
      </p>
    </div>
  </section>
  <section class="bg-cover coupon py-5 mb-4">
    <div class="container py-4 d-flex justify-content-center">
      <div class="d-flex flex-column align-items-center coupon-box w-100 py-5">
        <p class="section-text h3 text-light px-5">請點此抽取折扣優惠！</p>
        <button type="button" class="btn btn-lg btn-outline-light mt-4">
          試手氣
        </button>
      </div>
    </div>
  </section>
  <section class="bg-color">
    <div class="container pt-5 pb-4">
      <p class="h1 text-center title-bold">常見問題</p>
      <p class="text-center section-text h3 pt-4 pb-5">
        「若解決不了問題，就解決老闆。」
      </p>
    </div>
  </section>
  <Accordion></Accordion>
</template>

<script>
import Accordion from '@/components/Accordion.vue';

export default {
  name: 'Home',
  components: {
    Accordion,
  },
};
</script>
