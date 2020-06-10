<template>
  <main>
    <Menu />
    <Banner :zone="'publication'" title="投稿專區" />
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3">
          <div class="card classify">
            <div class="card-header">
              主題分類
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="fas fa-list-ul" /> 全部投稿
              </li>
              <li class="list-group-item">
                <i class="far fa-laugh-wink" /> 梗圖分享
              </li>
              <li class="list-group-item">
                <i class="fas fa-scroll" /> 文章分享
              </li>
              <li class="list-group-item">
                <i class="far fa-heart" /> 心情分享
              </li>
              <nuxt-link to="/posts/add_post" class="list-group-item add" tag="li">
                <i class="fas fa-edit" /> 我要投稿
              </nuxt-link>
            </ul>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9">
          <ul class="row">
            <div class="col-12 title">
              <h3>全部投稿</h3>
              <ul>
                <li>
                  <button class="btn btn-sm btn-outline-primary">
                    已引用
                  </button>
                </li>
                <li>
                  <button class="btn btn-sm btn-outline-primary">
                    未引用
                  </button>
                </li>
                <li>
                  <button class="btn btn-sm btn-outline-secondary">
                    已違規
                  </button>
                </li>
              </ul>
            </div>
            <li v-for="(item, index) in list" :key="index" class="col-lg-4 col-md-6 mb-4">
              <Card :data="item" />
            </li>
          </ul>
          <nav aria-label="Page navigation" class="d-flex justify-content-center mt-5">
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
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'
import Card from '~/components/Card.vue'

export default {
  components: {
    Menu, Banner, Card
  },
  data () {
    return {
      list: null
    }
  },
  created () {
    const vm = this
    vm.list = [
      {
        uid: '11111',
        content: '這是內文',
        classify: '這是分類',
        img: 'https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559__340.jpg',
        status: 'publish',
        authName: '作者名稱',
        authID: '作者ID',
        incognito: true,
        timestamp: '1591696005476'
      }, {
        uid: '22222',
        content: '這是內文2',
        classify: '這是分類2',
        img: 'https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722__340.jpg',
        status: 'reject',
        authName: '作者名稱2',
        authID: '作者ID2',
        incognito: false,
        timestamp: '1591696905476'
      }, {
        uid: '33333',
        content: '這是內文3',
        classify: '這是分類2',
        img: 'https://cdn.pixabay.com/photo/2020/06/03/15/11/tree-5255288__340.jpg',
        status: 'unpublish',
        authName: '作者名稱3',
        authID: '作者ID3',
        incognito: true,
        timestamp: '1491696905476'
      }
    ]
  },
  head: () => {
    return {
      title: 'About Page',
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
