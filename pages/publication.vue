<template>
  <main>
    <Loading v-if="isLoading" />
    <Menu />
    <Banner zone="publication" title="新增投稿" bio="如有梗圖或是文章欲投稿到<a class='text-warning' href='https://www.facebook.com/measonmusic/'>【紛絲專頁】</a>上，可至本站進行投稿" />
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="card classify">
            <div class="card-header">
              主題分類
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" @click="getData()">
                <i class="fas fa-list-ul" /> 全部投稿
              </li>
              <li class="list-group-item" @click="classifyData('classify', '梗圖分享')">
                <i class="far fa-laugh-wink" /> 梗圖分享
              </li>
              <li class="list-group-item" @click="classifyData('classify', '文章分享')">
                <i class="fas fa-scroll" /> 文章分享
              </li>
              <li class="list-group-item" @click="classifyData('classify', '心情分享')">
                <i class="far fa-heart" /> 心情分享
              </li>
              <nuxt-link to="/posts/add_post" class="list-group-item add" tag="li">
                <i class="fas fa-edit" /> 我要投稿
              </nuxt-link>
            </ul>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9">
          <ul v-if="list" class="row">
            <li class="col-12 title">
              <h3>{{ dom.status }}</h3>
              <ul>
                <li>
                  <button class="btn btn-sm btn-outline-primary" @click="classifyData('status', 'publish')">
                    已引用
                  </button>
                </li>
                <li>
                  <button class="btn btn-sm btn-outline-primary" @click="classifyData('status', 'unpublish')">
                    未引用
                  </button>
                </li>
                <li>
                  <button class="btn btn-sm btn-outline-secondary" @click="classifyData('status', 'reject')">
                    已違規
                  </button>
                </li>
              </ul>
            </li>
            <li v-for="(item, index) in list" :key="index" class="col-lg-4 col-md-6 mb-4">
              <Card :data="item" />
            </li>
          </ul>
          <p v-else>
            尚無資料
          </p>
          <!-- <nav aria-label="Page navigation" class="d-flex justify-content-center mt-5">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">上一頁</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">下一頁</a>
              </li>
            </ul>
          </nav> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'
import Card from '~/components/Card.vue'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Menu, Banner, Card, Loading
  },
  data () {
    return {
      list: null,
      isLoading: false,
      dom: {
        status: '全部投稿'
      }
    }
  },
  computed: {
    pyAPI () {
      return this.$store.state.pyAPI
    }
  },
  created () {
    const vm = this
    vm.getData()
  },
  methods: {
    async getData () {
      const vm = this
      vm.isLoading = true
      await vm.$axios.$post(`${vm.pyAPI}/query`, { column: '*' }).then((response) => {
        const res = JSON.parse(response)
        vm.list = res
        vm.dom.status = '全部投稿'
      }).then(() => {
        vm.isLoading = false
      }).catch((e) => {
        console.error(e)
      })
    },
    async classifyData (col, val) {
      const vm = this
      vm.isLoading = true
      await vm.$axios.$post(`${vm.pyAPI}/where`, { column: col, valuse: val }).then((response) => {
        const res = JSON.parse(response)
        vm.list = res
        if (col === 'status') {
          switch (val) {
            case 'publish':
              vm.dom.status = '已引用'
              break
            case 'unpublish':
              vm.dom.status = '未引用'
              break
            case 'reject':
              vm.dom.status = '已違規'
              break
          }
        } else {
          vm.dom.status = val
        }
      }).then(() => {
        vm.isLoading = false
      }).catch((e) => {
        console.error(e)
      })
    }
  },
  head () {
    return {
      title: '粉專投稿專區',
      meta: [
        {
          hid: '投稿專區',
          name: '投稿專區',
          content: '如有梗圖或是文章欲投稿到【紛絲專頁】上，可至本站進行投稿'
        }, {
          name: 'twitter:title',
          content: '粉專投稿專區'
        }, {
          name: 'twitter:description',
          content: '如有梗圖或是文章欲投稿到【紛絲專頁】上，可至本站進行投稿'
        }, {
          name: 'twitter:image',
          content: this.$store.state.metaImg
        }, {
          name: 'twitter:card',
          content: this.$store.state.metaImg
        }, {
          name: 'og:title',
          content: '粉專投稿專區'
        }, {
          name: 'og:description',
          content: '如有梗圖或是文章欲投稿到【紛絲專頁】上，可至本站進行投稿'
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
          content: '如有梗圖或是文章欲投稿到【紛絲專頁】上，可至本站進行投稿'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  h3{
    font-size: 24px;
    font-weight: bold;
    color: #fdc83b;
  }
  ul{
    display: flex;
    li{
      padding: 0 3px;
    }
  }
}
.classify{
  text-align: center;
  margin-bottom: 50px;
  .card-header{
    background-color: #6368cf;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  li{
    color: #333;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    svg{
      margin-right: 5px;
      color: #999;
      transition: all 0.2s ease-in-out;
    }
    &:hover{
      background-color: #eee;
      color: #000;
      svg{
        transform: scale(1.3, 1.3);
        color: #333;
      }
    }
  }
  .add{
    background-color: lighten(#fcd87e, 5);
    &:hover{
      background-color: lighten(#fcd87e, 0);
    }
  }
}
</style>
