<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="相關連結" bio="迷聲使用教學、平台相關連結及文章分享" />
    <div class="container py-5">
      <div class="row">
        <div v-for="(item, index) in list" :key="index" class="col-lg-4 col-md-6 col-sm-6 mb-3">
          <div class="card">
            <a :href="item.link" class="d-block" target="_blank" :style="{'background-image': `url(${item.img})`}">
              <img src="~/assets/img/transparent-1.png" width="100%" :alt="item.title">
            </a>
            <div class="card-body">
              <a :href="item.link" class="d-block" target="_blank">
                <h5 class="card-title h5 mb-1">
                  {{ item.title }}
                </h5>
              </a>
              <p class="card-text">
                {{ item.content.slice(0, 40) }}
                <span v-if="item.content.length >= 40">...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      list: [
        {
          img: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/95708397_2519324484999799_394446012598452224_o.jpg?_nc_cat=100&_nc_sid=825194&_nc_ohc=jRX8tFRQj5wAX8o4U3f&_nc_ht=scontent-tpe1-1.xx&oh=2fc7a87ddd48a62d3d06e194d5cc59ba&oe=5F7200BA',
          title: '迷聲 Facebook 社團',
          content: '版規很簡單～請勿放跟音樂不相干的貼文，為避免過度濫用的情況，一個人一天只會批准一則 (不重覆) 貼文 :D',
          link: 'https://www.facebook.com/groups/meason/'
        }, {
          img: 'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/e35/47583132_524309738089790_7429918852759066865_n.jpg?_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=KZkxn_PtyLsAX-_InB8&oh=7fec71672ab2ab6ebc9e5750e731ccb9&oe=5F75E319',
          title: '迷聲 instagram',
          content: '大家好，這裡想跟大家分享一個音樂平台—   迷聲音樂素人交流平台  提供組團功能、徵求表演者功能、創作分享，重點是免費使用！  平台網址:  https://meason.club/  這裡一一和大家介紹平台的使用方法以及功能介紹：【組團、媒合功能】',
          link: 'https://www.instagram.com/meason.music/'
        }, {
          img: 'https://1.bp.blogspot.com/-FKzOkURiZrU/XibH1El6XII/AAAAAAAAfjM/4V6ReorShGgQdke4I6AqgvA38X57_o7xQCLcBGAsYHQ/w1200-h630-p-k-no-nu/partner.gif',
          title: '迷聲平台使用說明',
          content: '大家好，這裡想跟大家分享一個音樂平台—   迷聲音樂素人交流平台  提供組團功能、徵求表演者功能、創作分享，重點是免費使用！  平台網址:  https://meason.club/  這裡一一和大家介紹平台的使用方法以及功能介紹：【組團、媒合功能】',
          link: 'https://measonmusic.blogspot.com/2020/01/blog-post.html'
        }, {
          img: 'https://miro.medium.com/max/700/1*JJQJ0ENU1F4Kz59Kdw16yA.jpeg',
          title: '音樂科技網文章分享',
          content: '迷聲 Meason 音樂交流平臺讓樂手找尋志同道合的樂手，一起組樂團。樂團可以找尋演出機會，站上舞台。',
          link: 'https://musictech.tw/meason-music-6a30dda7ac4b'
        }
      ]
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
          hid: 'twitter:title',
          property: 'twitter:title',
          content: '迷聲相關連結'
        }, {
          name: 'twitter:description',
          hid: 'twitter:description',
          property: 'twitter:description',
          content: 'Meason 迷聲相關連結及文章分想'
        }, {
          name: 'twitter:image',
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.$store.state.metaImg
        }, {
          name: 'twitter:card',
          hid: 'twitter:card',
          property: 'twitter:card',
          content: this.$store.state.metaImg
        }, {
          name: 'og:title',
          hid: 'og:title',
          property: 'og:title',
          content: '迷聲相關連結'
        }, {
          name: 'og:description',
          hid: 'og:description',
          property: 'og:description',
          content: 'Meason 迷聲相關連結及文章分想'
        }, {
          name: 'og:type',
          hid: 'og:type',
          property: 'og:type',
          content: 'music'
        }, {
          name: 'og:image',
          hid: 'og:image',
          property: 'og:image',
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
.card {
  height: 100%;
  .d-block{
    background-size: cover;
    background-position: center;
  }
  a{
    &:hover{
      text-decoration: none;
    }
  }
  .card-title{
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
