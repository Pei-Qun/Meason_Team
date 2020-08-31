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
</style>
