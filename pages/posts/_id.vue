<template>
  <main>
    <Menu />
    <Banner zone="publication" title="新增投稿" bio="如有梗圖或是文章欲投稿到<a class='text-warning' href='https://www.facebook.com/measonmusic/'>【紛絲專頁】</a>上，可至本站進行投稿" />
    <div class="container py-5">
      <div class="d-flex align-items-center justify-content-between">
        <nuxt-link to="/publication" class="btn btn-outline-secondary">
          回投稿區
        </nuxt-link>
        <h3 class="h3">
          投稿內文
        </h3>
        <nuxt-link to="/posts/add_post" class="btn btn-outline-primary">
          立即發文
        </nuxt-link>
      </div>
      <section v-if="data" class="con row justify-content-center">
        <div class="col-lg-8">
          <article class="pic" :style="{'background-image': `url(${data.img})`}" />
          <article v-if="!data.incognito">
            <p>發文者</p>
            <h4>{{ data.authname }}</h4>
          </article>
          <article v-else>
            <p>發文者</p>
            <h4>匿名</h4>
          </article>
          <article>
            <p>投稿類型</p>
            <h4>{{ data.classify }}</h4>
          </article>
          <article>
            <p>發布日期</p>
            <h4>{{ time }}</h4>
          </article>
          <article>
            <p>投稿狀態</p>
            <h4 v-if="data.status === 'unpublish'" class="badge badge-info">
              未引用
            </h4>
            <h4 v-if="data.status === 'publish'" class="badge badge-success">
              已引用
            </h4>
            <h4 v-if="data.status === 'reject'" class="badge badge-danger">
              已違規
            </h4>
          </article>
          <article>
            <p>貼文內容</p>
            <pre>{{ data.content }}</pre>
          </article>
        </div>
      </section>
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
  data () {
    return {
      path: '',
      data: {}
    }
  },
  computed: {
    pyAPI () {
      return this.$store.state.pyAPI
    },
    time () {
      const dateTimeStamp = this.data.timestamp
      const minute = 1000 * 60
      const hour = minute * 60
      const day = hour * 24
      const month = day * 30
      const now = new Date().getTime()
      const diffValue = now - dateTimeStamp
      if (diffValue < 0) { return }
      const monthC = diffValue / month
      const weekC = diffValue / (7 * day)
      const dayC = diffValue / day
      const hourC = diffValue / hour
      const minC = diffValue / minute
      let result = ''
      if (monthC >= 1) {
        result = '' + parseInt(monthC) + '月前'
      } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周前'
      } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + '天前'
      } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小時前'
      } else if (minC >= 1) {
        result = '' + parseInt(minC) + '分鐘前'
      } else {
        result = '剛剛'
      }
      return result
    }
  },
  created () {
    this.path = this.$route.params.id
    this.getData()
  },
  methods: {
    async getData () {
      const vm = this
      await vm.$axios.$post(`${vm.pyAPI}/where`, { column: 'uid', valuse: vm.path }).then((response) => {
        const res = JSON.parse(response)
        vm.data = res[0]
      }).catch((e) => {
        console.error(e)
      })
    }
  },
  head () {
    return {
      // title: `${this.data.content.slice(0, 10)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.con{
  .pic{
    min-height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 30px;
  }
  article{
    display: flex;
    margin: 5px 0;
    p{
      flex: 0 0 100px
    }
    pre{
      white-space: pre-wrap;
    }
  }
}
</style>
