<template>
  <main>
    <div class="container py-5">
      <div class="d-flex align-items-center justify-content-between">
        <nuxt-link to="/publication" class="btn btn-outline-secondary">
          回投稿區
        </nuxt-link>
        <h3 class="h3">
          投稿內文
        </h3>
        <nuxt-link to="/post/add_post" class="btn btn-outline-primary">
          立即發文
        </nuxt-link>
      </div>
      <section class="con row justify-content-center">
        <div class="col-lg-8">
          <article class="pic" :style="{'background-image': `url(${data.img})`}" />
          <article>
            <p>發文者</p>
            <h4>{{ data.authName }}</h4>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      path: '',
      data: {}
    }
  },
  created () {
    this.path = this.$route.params.id
    this.data = {
      uid: '11111',
      content: '這是內文',
      classify: '這是分類',
      img: 'https://cdn.pixabay.com/photo/2020/05/26/15/42/eagle-5223559__340.jpg',
      status: 'publish',
      authName: '作者名稱',
      authID: '作者ID',
      incognito: true,
      timestamp: '1591696005476'
    }
  },
  head () {
    return {
      title: `${this.data.content.slice(0, 10)} | Meason Team`,
      meta: [
        {
          hid: `${this.data.content.slice(0, 10)} | Meason Team`,
          name: 'Meason Team',
          content: '迷聲音樂粉絲專頁投稿貼文'
        }, {
          name: 'twitter:title',
          content: `${this.data.content.slice(0, 10)} | Meason Team`
        }, {
          name: 'twitter:description',
          content: '迷聲音樂粉絲專頁投稿貼文'
        }, {
          name: 'twitter:image',
          content: this.data.img
        }, {
          name: 'twitter:card',
          content: this.data.img
        }, {
          name: 'og:title',
          content: `${this.data.content.slice(0, 10)} | Meason Team`
        }, {
          name: 'og:description',
          content: '迷聲音樂粉絲專頁投稿貼文'
        }, {
          name: 'og:type',
          content: 'music'
        }, {
          name: 'og:image',
          content: this.data.img
        }, {
          itemprop: 'image',
          content: this.data.img
        }, {
          itemprop: 'description',
          content: '迷聲音樂粉絲專頁投稿貼文'
        }
      ]
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
  }
}
</style>
