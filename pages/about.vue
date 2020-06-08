<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="開發團隊介紹" />
    <div class="member">
      <div class="container-fluid">
        <div class="row flex-lg-wrap-reverse flex-md-wrap-reverse">
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
    <section class="bg-gray">
      <ul class="process">
        <li class="list">
          <div class="con">
            <article>
              <p>2018 / <span>02</span></p>
              <h3>迷聲構想誕生</h3>
              <h5>文字文字文字文字文字文字文字文字文字文字文字文字文字</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2019 / <span>01</span></p>
              <h3>迷聲 1.0 正式上線</h3>
              <h5>文字文字文字文字文字文字文字文字文字文字文字文字文字</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2019 / <span>05</span></p>
              <h3>參加放視大賞</h3>
              <h5>文字文字文字文字文字文字文字文字文字文字文字文字文字</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2019 / <span>09</span></p>
              <h3>迷聲 2.0 正式上線</h3>
              <h5>文字文字文字文字文字文字文字文字文字文字文字文字文字</h5>
            </article>
          </div>
        </li>
        <li class="list">
          <div class="con">
            <article>
              <p>2020 / <span>05</span></p>
              <h3>里程碑: 會員破千名</h3>
              <h5>文字文字文字文字文字文字文字文字文字文字文字文字文字</h5>
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
.bg-gray{
  background: #f6f6f6;
  padding: 30px 0 50px 0;
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
      span{
        // font-size: 24px;
      }
    }
    h5{
      font-size: 16px;
    }
    h3{
      font-size: 20px;
      color: #5f2385;
      font-weight: bold;
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
