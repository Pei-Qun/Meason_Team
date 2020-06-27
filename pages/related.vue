<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="相關連結及文章" />
    <button class="btn btn-primary" @click="tryFuc">
      try
    </button>
    {{ aaa }}
  </main>
</template>

<script>
// import axios from 'axios'
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Menu, Banner
  },
  data () {
    return {
      aaa: process.env.API
    }
  },
  methods: {
    tryFuc () {
      this.fetchSomething()
      // const url = 'https://infinite-dawn-78404.herokuapp.com'
      // axios.get(url, { uid: '123' }).then((response) => {
      //   console.log('登入/註冊成功', response)
      // })
    },
    async fetchSomething () {
      const vm = this
      await vm.$axios.$post('https://infinite-dawn-78404.herokuapp.com/add').then((response) => {
        console.log('登入/註冊成功', response)
      })
    }
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
</style>
