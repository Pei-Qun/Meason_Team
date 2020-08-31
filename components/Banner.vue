<template>
  <div class="banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 text">
          <article>
            <hr class="line">
            <h2 class="text-light">
              <span>Meason 迷聲</span>
              <span>{{ title }}</span>
            </h2>
            <p v-html="bio" />
            <!-- <a href="https://meason.music/" target="_blank" class="links">前往平台</a> -->
            <a :href="pyAPI" class="links" title="我要抖內" target="_blank">
              我要<span>抖內</span>
            </a>
          </article>
        </div>
        <div class="col-md-6 pic" :style="{'backgroundImage': `url(${require('@/assets/img/banner/' + zone + '-banner.jpg')})`}" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    zone: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    bio: {
      type: String,
      default: '音樂素人交流平台'
    }
  },
  computed: {
    pyAPI () {
      return this.$store.state.donateURL
    }
  }
}
</script>

<style lang="scss">
.banner{
  background-color: #0B0F30;
  .row{
    height: 500px;
    @media (max-width: 767.98px) {
      height: auto;
      flex-wrap: wrap-reverse;
    }
  }
  .index{
    height: 100vh;
    .text{
      padding-top: 100px;
    }
    @media (max-width: 991px) {
      // height: auto;
      flex-wrap: wrap-reverse;
      .pic{
        min-height: 300px;
      }
      .text{
        padding-top: 0;
      }
      .d-flex{
        justify-content: center;
      }
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
    .links{
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
      transition: all 0.3s ease-in-out;
      &:hover{
        text-decoration: none;
        background-color: #fff;
        color: #0B0F30;
      }
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
      @media (max-width: 767.98px){
        display: none;
      }
    }
    @media (max-width: 767.98px) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  .pic{
    // background-image: url('~@/assets/img/banner.jpg');
    background-size: cover;
    background-position: center;
    @media (max-width: 767.98px) {
      min-height: 50vw;
    }
  }
}
</style>
