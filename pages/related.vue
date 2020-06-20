<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="相關連結及文章" />
  </main>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Menu, Banner
  },
  head () {
    return {
      title: '迷聲相關連結',
      meta: [
        {
          hid: '迷聲相關連結',
          name: '迷聲相關連結',
          content: 'Meason 迷聲相關連結及文章分想'
        }, {
          name: 'twitter:title',
          content: '迷聲相關連結'
        }, {
          name: 'twitter:description',
          content: 'Meason 迷聲相關連結及文章分想'
        }, {
          name: 'twitter:image',
          content: this.$store.state.metaImg
        }, {
          name: 'twitter:card',
          content: this.$store.state.metaImg
        }, {
          name: 'og:title',
          content: '迷聲相關連結'
        }, {
          name: 'og:description',
          content: 'Meason 迷聲相關連結及文章分想'
        }, {
          name: 'og:type',
          content: 'music'
        }, {
          name: 'og:image',
          content: this.$store.state.metaImg
        }, {
          itemprop: 'image',
          content: this.$store.state.metaImg
        }, {
          itemprop: 'description',
          content: 'Meason 迷聲相關連結及文章分想'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
