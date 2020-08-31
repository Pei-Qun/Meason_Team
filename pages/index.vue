<template>
  <main>
    <Menu />
    <div class="banner">
      <div class="container-fluid">
        <div class="row index">
          <div class="col-lg-6 text">
            <article>
              <hr class="line">
              <h2 class="text-light">
                <span>Meason 迷聲</span>
                <span>開發團隊介紹</span>
              </h2>
              <p>我們是一群熱血的畢業生，</p>
              <h3 class="h5">
                團隊尚未成立公司，計畫成立非營利組織。<br>熱愛音樂的我們，想要盡一份心力提升台灣音樂風氣
              </h3>
              <div class="d-flex">
                <a href="https://meason.club/" target="_blank" class="mr-3 links">
                  前往平台
                </a>
                <a :href="pyAPI" target="_blank" class="links bg-light text-dark">我要抖內</a>
              </div>
            </article>
          </div>
          <div class="col-lg-6 pic" :style="{'backgroundImage': `url(${require('@/assets/img/banner/index-banner.jpg')})`}" />
        </div>
      </div>
    </div>
    <div class="about-group">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>
              “
            </h2>
            <p>本網站開發目的是為了促進台灣音樂創作風氣，其主要功能有類似人力銀行之尋才功能，以往樂手希望找尋樂團時都是透過朋友與朋友之間詢問才可找到，而樂團尋找人才則是常常遇到樂風不符或是實力不合的狀況，此功能提供用戶尋找適合的團員／樂團／樂隊。 至於應徵者的音樂實力則可至本平台的個人專區查看，個人專區提供使用者上傳自己的音樂作品，各作品的瀏覽量提升也可增加該使用者的點數數量。點數設計目的是希望鼓勵使用者多發佈一些高品質作品，透過與店家的合作讓用戶可使用點數兌換錄音室、練團室以及商品的折扣。 另一項功能為提供表演者一個舞台的媒介，有很多需要樂團表演的場合，例如婚禮、尾牙等，皆可藉由本平台找尋適合的樂團／樂隊，增加很多需求者上台大展身手的機會。 </p>
            <h2 class="text-right">
              ”
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="member index">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12 col-lg-4 dev-title">
            <h3 class="h3">
              開發團隊
            </h3>
            <!-- <NuxtLink to="/about" class="nav-link">
              了解<span>更多</span>
            </NuxtLink> -->
          </div>
          <div class="col-xl-12 col-lg-8 ">
            <div class="row team">
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic pic1">
                  <div class="detail">
                    <h3>Madilyn</h3>
                    <p>Full-Stack PG</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="曾霈宭">
                </div>
                <!-- <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>Web 全端開發、網路行銷</p>
                </div> -->
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic pic2">
                  <div class="detail">
                    <h3>Jennifer</h3>
                    <p>Designer</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="何嫥嫥">
                </div>
                <!-- <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>平面設計、影片剪輯</p>
                </div> -->
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic pic3">
                  <div class="detail">
                    <h3>Sam</h3>
                    <p>Python PG</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="成竣昇">
                </div>
                <!-- <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>數據分析、後端開發</p>
                </div> -->
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic pic4">
                  <div class="detail">
                    <h3>Wayne</h3>
                    <p>PR Practitioner</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="賴家緯">
                </div>
                <!-- <div class="col-12 col-sm-6 col-md-12 py-3">
                  <h4>負責範圍</h4>
                  <p>對內外公共關係實務與宣傳</p>
                </div> -->
              </div>
            </div>
          </div>
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
              <h5>為了提升台灣音樂風氣，每個夥伴經過數百個小時的努力，一邊學習、一邊創作，將迷聲第一版完成</h5>
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
              <h5>因為受到許多音樂人支持，畢業後的我們決定繼續經營迷聲，希望可以幫助到有需要的人。為了讓使用者能操作得更為順暢，我們做了一次軟體重構</h5>
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
// import func from '../vue-temp/vue-editor-bridge'

export default {
  components: {
    Menu
  },
  computed: {
    pyAPI () {
      return this.$store.state.donateURL
    }
  },
  head () {
    return {
      title: '迷聲音樂交流平台',
      meta: [
        {
          hid: 'Meason Team',
          name: 'Meason Team',
          content: '迷聲音樂開發團隊及平台介紹'
        }, {
          name: 'twitter:title',
          hid: '',
          property: '',
          content: '迷聲音樂交流平台'
        }, {
          name: 'twitter:description',
          hid: 'twitter:description',
          property: 'twitter:description',
          content: '迷聲音樂開發團隊及平台介紹'
        }, {
          name: 'twitter:image',
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.$store.state.metaImg
        }, {
          name: 'twitter:card',
          hid: 'twitter:card',
          property: 'twitter:card',
          content: this.$store.state.metaImg
        }, {
          name: 'og:title',
          hid: 'og:title',
          property: 'og:title',
          content: '迷聲音樂交流平台'
        }, {
          name: 'og:description',
          hid: 'og:description',
          property: 'og:description',
          content: '迷聲音樂開發團隊及平台介紹'
        }, {
          name: 'og:type',
          hid: 'og:type',
          property: 'og:type',
          content: 'music'
        }, {
          name: 'og:image',
          hid: 'og:image',
          property: 'og:image',
          content: this.$store.state.metaImg
        }, {
          itemprop: 'image',
          content: this.$store.state.metaImg
        }, {
          itemprop: 'description',
          content: '迷聲音樂開發團隊及平台介紹'
        }
      ],
      noscript: [
        {
          innerHTML: 'Body No Scripts',
          body: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
