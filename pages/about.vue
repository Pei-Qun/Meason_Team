<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="開發團隊介紹" />
    <div class="member py-5">
      <div class="container mt-5">
        <div class="team p-0">
          <ul class="row">
            <li class="col-lg-3 col-md-6 mb-5">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-12">
                  <div class="pic pic1">
                    <div class="detail">
                      <h3>Madilyn</h3>
                      <p>Full-Stack PG</p>
                    </div>
                    <img src="~/assets/img/transparent.png" width="100%" alt="曾霈宭">
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>Web 全端開發、網路行銷</p>
                </div>
              </div>
            </li>
            <li class="col-lg-3 col-md-6 mb-5">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-12">
                  <div class="pic pic2">
                    <div class="detail">
                      <h3>Jennifer</h3>
                      <p>Designer</p>
                    </div>
                    <img src="~/assets/img/transparent.png" width="100%" alt="何嫥嫥">
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>平面設計、影片剪輯</p>
                </div>
              </div>
            </li>
            <li class="col-lg-3 col-md-6 mb-5">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-12">
                  <div class="pic pic3">
                    <div class="detail">
                      <h3>Sam</h3>
                      <p>Python PG</p>
                    </div>
                    <img src="~/assets/img/transparent.png" width="100%" alt="成竣昇">
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>數據分析、後端開發</p>
                </div>
              </div>
            </li>
            <li class="col-lg-3 col-md-6 mb-5">
              <div class="row">
                <div class="col-12 col-sm-6 col-md-12">
                  <div class="pic pic4">
                    <div class="detail">
                      <h3>Wayne</h3>
                      <p>PR Practitioner</p>
                    </div>
                    <img src="~/assets/img/transparent.png" width="100%" alt="賴家緯">
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>對內外公共關係實務與宣傳</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section class="process-area">
      <ul class="process">
        <li class="list">
          <div class="con">
            <article>
              <p>2018 / <span>02</span></p>
              <h3>迷聲構想誕生</h3>
              <h5>當我們在煩腦<b>專題製作</b>的主題時，夥伴在煩惱樂團團員老是缺席，發現了台灣音樂圈這方面的資訊漏洞</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2019 / <span>01</span></p>
              <h3>迷聲 1.0 正式上線</h3>
              <h5>為了提升台灣音樂風氣，每個夥伴經過數百個小時的努力，一邊學習、一邊創作，將迷聲應寫出來</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2019 / <span>05</span></p>
              <h3>參加放視大賞</h3>
              <h5>以文藻外語大學的數位內容應用與管理系，主題「<b>艷視</b>」畢業專題展出，參加<b>放視大賞</b>行動應用類-軟體內容組，入圍第二階段</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2019 / <span>09</span></p>
              <h3>迷聲 2.0 正式上線</h3>
              <h5>因為受到許多音樂人支持，畢業後的我們決定繼續經營迷聲，希望可以幫助到有需要的人。為了讓使用者能操作得更為順暢，我們做了一次大改版</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2020 / <span>05</span></p>
              <h3>里程碑: 會員破千名</h3>
              <h5>會員破千名、粉絲專頁也突破三千讚，已配對 500 位樂手，每月活耀使用者突破兩千人。籌辦公司或協會中...</h5>
            </article>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Menu, Banner
  },
  head: () => {
    return {
      title: '開發團隊介紹 | Meason 迷聲',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About page description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.process-area{
  background: #f6f6f6;
  padding: 100px 0 120px 0;
}
.process{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before{
    // 直線
    content: '';
    background-image: linear-gradient(#BE93C5, rgba(#7BC6CC, 0.5));
    width: 3px;
    position: absolute;
    height: 100%;
    right: auto;
    top: 0;
  }
  &::after{
    content: '';
    background-image: linear-gradient(rgba(#7BC6CC, 0.5), rgba(#7BC6CC, 0));
    width: 3px;
    position: absolute;
    bottom: -50px;
    height: 50px;
  }
  @media (max-width: 767px){
    &::before, &::after{
      left: 5vw;
    }
  }
}
.list{
  width: 100%;
  margin: 10px 0;
  &:nth-child(odd) {
    .con{
      flex-direction: row;
      text-align: left;
    }
  }
  &:nth-child(1){
    margin-top: -5px;
  }
  @media (min-width: 768px){
    display: flex;
    &:nth-child(odd) {
      justify-content: flex-end;
      .con{
        // flex-direction: row-reverse;
        &::before{
          transform: translateX(-50%);
          left: 0;
        }
      }
    }
  }
  @media (max-width: 767px){
    padding: 0 5vw;
    margin: 20px 0;
  }
}
.con{
  position: relative;
  display: flex;
  &::before{
    content: '';
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #f6f6f6;
    border: 3px solid #7BC6CC;
  }
  article{
    max-width: 100%;
    background-color: #fff;
    padding: 15px 20px 20px 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(#000, 0.1);
    p{
      font-weight: bold;
      color: #ccc;
      margin-bottom: 0;
    }
    h5{
      font-size: 16px;
      text-align: left;
      line-height: 1.3;
      b {
        font-weight: bold;
        padding: 0 3px;
      }
    }
    h3{
      font-size: 20px;
      color: #5f2385;
      font-weight: bold;
      margin: 10px 0;
    }
  }
  @media (min-width: 768px){
    text-align: right;
    flex-direction: row-reverse;
    width: 50%;
    article{
      width: 400px;
      margin: 0 30px;
    }
    &::before{
      right: 0;
      left: auto;
      transform: translateX(50%);
      position: absolute;
    }
  }
  @media (max-width: 767px){
    article{
      margin-left: 30px;
      width: 100%;
    }
    &::before{
      position: absolute;
      left: -5px;
    }
  }
}
</style>
