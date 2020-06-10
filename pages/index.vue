<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="開發團隊及平台介紹" />
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
        <div class="row flex-lg-wrap-reverse flex-md-wrap-reverse">
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
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic pic2">
                  <div class="detail">
                    <h3>Jennifer</h3>
                    <p>Designer</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="何嫥嫥">
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic pic3">
                  <div class="detail">
                    <h3>Sam</h3>
                    <p>Python PG</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="成竣昇">
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="pic pic4">
                  <div class="detail">
                    <h3>Wayne</h3>
                    <p>PR Practitioner</p>
                  </div>
                  <img src="~/assets/img/transparent.png" width="100%" alt="賴家緯">
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12 col-lg-4 dev-title">
            <h3>開發團隊</h3>
            <NuxtLink to="/about" class="nav-link">
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
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Menu, Banner
  },
  head: () => {
    return {
      title: '平台介紹 | Meason 迷聲',
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
