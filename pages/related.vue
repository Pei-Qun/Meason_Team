<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="相關連結及文章" />
    <button class="btn btn-primary" @click="tryFuc">
      try
    </button>
    {{ aaa }}
    <h2>{{ pyAPI }}</h2>
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
      aaa: process.env.API,
      list: null
    }
  },
  computed: {
    pyAPI () {
      return this.$store.state.pyAPI
    }
  },
  methods: {
    tryFuc () {
      this.insertSomething()
      // const url = 'https://infinite-dawn-78404.herokuapp.com'
      // axios.get(url, { uid: '123' }).then((response) => {
      //   console.log('登入/註冊成功', response)
      // })
    },
    async fetchSomething () {
      const vm = this
      const req = 'column_name=*'
      await vm.$axios.$post(`${vm.pyAPI}/query`, req).then((response) => {
        const res = JSON.parse(response)
        console.log(res)
        vm.list = res
      }).catch((e) => {
        console.error(e)
      })
    },
    async insertSomething () {
      const vm = this
      const testJson = {
        content: '這是內文2這是內文2這是內文2這是內文2這是內文2這是內文2',
        classify: '文章分享',
        img: 'https://cdn.pixabay.com/photo/2020/04/23/03/35/the-leaves-5080909_1280.jpg',
        status: 'unpublish',
        authName: 'ㄆㄌㄌ',
        authID: 'id1345id',
        incognito: true,
        timestamp: JSON.stringify(Date.now()),
        original: '12314'
      }
      await vm.$axios.$post(`${vm.pyAPI}/insert`, testJson).then((response) => {
        // console.log(response, 'test')
        const res = JSON.parse(response)
        vm.list = res
      }).catch((e) => {
        console.error(e)
      })
    },
    formTypeMethod (obj) {
      let str = ''
      Object.keys(obj).forEach((item, index, arr) => {
        if (index !== arr.length - 1) {
          str += `${item.toLocaleLowerCase()}=${obj[item]}&`
          console.log(item)
        } else {
          str += `${item.toLocaleLowerCase()}=${obj[item]}`
        }
      })
      console.log(str)
      return str
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
