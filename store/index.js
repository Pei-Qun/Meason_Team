export const state = () => ({
  option: {
    classify: ['梗圖分享', '文章分享', '心情分享']
  },
  pyAPI: 'https://infinite-dawn-78404.herokuapp.com',
  metaImg: 'https://firebasestorage.googleapis.com/v0/b/meason-music.appspot.com/o/post_photo%2Finstruction-banner.jpg?alt=media&token=b247546d-ee70-4840-ab0f-2083034ce40e',
  metaData: [],
  donateURL: 'https://p.ecpay.com.tw/4A1478E'
})

export const mutations = {
  metaRender (state, data) {
    state.metaData = [
      {
        hid: data.title,
        name: data.title,
        content: data.content
      }, {
        name: 'twitter:title',
        hid: 'twitter:title',
        property: 'twitter:title',
        content: data.title
      }, {
        name: 'twitter:description',
        hid: 'twitter:description',
        property: 'twitter:description',
        content: data.content
      }, {
        name: 'twitter:image',
        hid: 'twitter:image',
        property: 'twitter:image',
        content: data.img
      }, {
        name: 'twitter:card',
        hid: 'twitter:card',
        property: 'twitter:card',
        content: data.img
      }, {
        name: 'og:title',
        hid: 'og:title',
        property: 'og:title',
        content: data.title
      }, {
        name: 'og:description',
        hid: 'og:description',
        property: 'og:description',
        content: data.content
      }, {
        name: 'og:type',
        hid: 'og:type',
        property: 'og:type',
        content: 'music'
      }, {
        name: 'og:image',
        hid: 'og:image',
        property: 'og:image',
        content: data.img
      }
    ]
  }
}
