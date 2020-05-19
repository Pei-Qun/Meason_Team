<template>
  <main>
    <Menu />
    <div class="banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 text">
            <article>
              <hr class="line">
              <h2 class="text-light">
                <span>Meason 迷聲</span>
                <span>音樂素人交流平台</span>
              </h2>
              <p>關於迷聲</p>
              <a href="https://meason.music/" target="_blank">了解更多</a>
            </article>
          </div>
          <div class="col-md-6 pic" />
        </div>
      </div>
    </div>
    <div class="about-group">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>“</h2>
            <p>本網站開發目的是為了促進台灣音樂創作風氣，其主要功能有類似 104 人力 銀行之尋才功能，以往樂手希望找尋樂團時都是透過朋友與朋友之間詢問才可找 到，而樂團尋找人才則是常常遇到樂風不符或是實力不合的狀況，此功能提供用 戶尋找適合的團員／樂團／樂隊。 至於應徵者的音樂實力則可至本平台的個人專區查看，個人專區提供使用者 上傳自己的音樂作品，各作品的瀏覽量提升也可增加該使用者的點數數量。點數 設計目的是希望鼓勵使用者多發佈一些高品質作品，透過與店家的合作讓用戶可 使用點數兌換錄音室、練團室以及商品的折扣。 另一項功能為提供表演者一個舞台的媒介，有很多需要樂團表演的場合，例 如婚禮、尾牙等，皆可藉由本平台找尋適合的樂團／樂隊，增加很多需求者上台 大展身手的機會。 </p>
            <h2 class="text-right">”</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="member">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12 col-lg-8 ">
            <div class="row team">
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic">
                  <div class="detail">
                    <h3>曾霈宭</h3>
                    <p>Full-Stack PG</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="曾霈宭">
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic">
                  <div class="detail">
                    <h3>何嫥嫥</h3>
                    <p>Designer</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="何嫥嫥">
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic">
                  <div class="detail">
                    <h3>成竣昇</h3>
                    <p>Python PG</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="成竣昇">
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic">
                  <div class="detail">
                    <h3>賴家緯</h3>
                    <p>PR Practitioner</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="賴家緯">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-lg-4 dev-title">
            <h3>開發團隊</h3>
            <NuxtLink to="/" class="nav-link">
              了解<span>更多</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu
  },
  head: () => {
    return {
      title: '迷聲音樂',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ],
      noscript: [
        {
          innerHTML: 'Body No Scripts',
          body: true
        }
      ],
      script: [
        {
          src: '/body.js',
          body: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
  background-color: #0B0F30;
  .row{
    height: 100vh;
    @media (max-width: 767.98px) {
      height: auto;
      flex-wrap: wrap-reverse;
    }
  }
  .text{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    article{
      max-width: 80%;
      color: #fff;
    }
    a{
      margin-top: 30px;
      font-size: 14px;
      border: 1px solid #fff;
      color: #fff;
      font-weight: 400;
      width: 180px;
      height: 66px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
    }
    h2{
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 25px;
      font-size: 40px;
      font-weight: 300;
      @media (max-width: 767.98px){
        font-size: 30px;
      }
    }
    hr{
      border-color: #fff;
      width: 100px;
      margin-bottom: 30px;
    }
    @media (max-width: 767.98px) {
      padding-bottom: 100px;
    }
  }
  .pic{
    background-image: url('../assets/img/banner.jpg');
    background-size: cover;
    background-position: center;
    @media (max-width: 767.98px) {
      min-height: 50vw;
    }
  }
}
.about-group{
  padding: 80px 0 50px 0;
  h2 {
    font-size: 80px;
    font-weight: bold;
    color: #333;
    text-shadow: 1px 3px 10px rgba(114,200,213,0.7);
  }
  p {
    font-weight: 100;
    font-size: 18px;
    color: #333;
    line-height: 2;
    text-indent: 100px;
    margin-top: -60px;
    margin-bottom: -30px;
  }
}
.member{
  background-color: #eee;
  .team{
    padding: 50px 8vw 20px 8vw;
    > div{
      position: relative;
      margin-bottom: 30px;
    }
    .col-md-6:nth-child(1) .pic{
      background-image: url(~@/assets/img/team/Madilyn.jpg);
    }
    .col-md-6:nth-child(2) .pic{
      background-image: url(~@/assets/img/team/Jennifer.jpg);
    }
    .col-md-6:nth-child(3) .pic{
      background-image: url(~@/assets/img/team/Sam.jpg);
    }
    .col-md-6:nth-child(4) .pic{
      background-image: url(~@/assets/img/team/Wayne.jpg);
    }
  }
  .pic{
    background-size: cover;
    width: 80%;
    background-position: center center;
    border: 5px #eee solid;
    outline: #72c8d5 2px solid;
    box-shadow: 0 0 10px #72c8d5;
  }
  .detail {
    position: absolute;
    right: 0;
    background-color: #0b0f2a;
    padding: 20px;
    bottom: 10%;
    box-shadow: 0px 0px 10px rgba(252,227,137,0.7);
    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 0;
      color: #72c8d5;
      text-shadow: 1px 3px 10px rgba(114,200,213,0.7);
    }
    p {
      margin-bottom: 0;
      color: #fff;
      text-shadow: 1px 3px 10px rgba(255,255,255,0.8);
    }
  }
  .dev-title{
    background-image: url(~@/assets/img/bg.jpg);
    background-size: cover;
    // background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 5vw;
    h3{
      color: #fff;
      margin-bottom: 0;
    }
    a{
      border: 2px #999 solid;
      padding: 10px 20px;
      color: #fff;
    }
  }
  .row{
    @media (min-width: 767.98px) {
      flex-wrap: wrap-reverse;
    }
    @media (min-width: 992px) {
      flex-wrap: wrap-reverse;
    }
  }
}
</style>
