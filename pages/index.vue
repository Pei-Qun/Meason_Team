<template>
  <main>
    <Menu />
    <div class="banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 text">
            <article>
              <hr class="line">
              <h2 class="text-light">
                <span>Meason</span>
                迷聲音樂素人交流平台
              </h2>
              <p>網站製作</p>
              <a href="https://meason.music/" target="_blank" class="btn sonar-btn white-btn">了解更多</a>
            </article>
          </div>
          <div class="col-lg-6 pic" />
        </div>
      </div>
    </div>
    <div class="container">
      <h1>Home page 🚀</h1>
      <NuxtLink to="/about">
        About page
      </NuxtLink>
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
      title: '迷聲音樂開發團隊 🚀',
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
    height: auto;
    @media (min-width: 992px) {
      height: 100vh;
    }
  }
  .text{
    display: flex;
    justify-content: center;
    align-items: center;
    article{
      max-width: 80%;
      color: #fff;
    }
    a{
      display: block;
    }
    h2{
      display: flex;
      flex-wrap: wrap;
      span{
        margin-right: 10px;
      }
    }
  }
  .pic{
    background-image: url('https://pei-qun.github.io/colorVision/img/bg-img/g-0/banner.jpg');
  }
}
</style>
