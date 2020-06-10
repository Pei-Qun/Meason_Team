<template>
  <main>
    <Menu />
    <Banner zone="publication" title="貼文投稿區" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 mt-5">
          <form action="" @submit.prevent="">
            <div class="img-area">
              <label for="file-input" class="files">
                <img
                  v-if="!tempDom.imgurl"
                  src="~/assets/img/images-select.svg"
                  alt="貼文圖片選擇"
                  class="select-img"
                >
                <div v-else class="img-preview">
                  <img id="scream" :src="tempDom.imgurl">
                </div>
                <input
                  id="file-input"
                  name="photo"
                  type="file"
                  multiple="true"
                  accept="image/*"
                  @change="preview"
                >
                <p class="text-danger mt-1 small">
                  請選擇小於 5MB 的圖片
                </p>
                <button type="button" class="btn btn-primary" @click="uploadImg()">
                  上傳圖片
                </button>
              </label>
            </div>
            <div class="form-group">
              <label for="content">貼文內容</label>
              <input id="content" class="form-control" type="text" placeholder="貼文內容">
              <small class="text-danger text-small">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="content">貼文內容</label>
              <textarea id="content" class="form-control mt-1" placeholder="貼文內容" />
              <small class="text-danger text-small">We'll never share your email with anyone else.</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase'
import $ from 'jquery'
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Menu, Banner
  },
  data () {
    return {
      isLoading: false,
      userData: {
        uid: 'text'
      },
      tempDom: {
        imgurl: ''
      },
      formData: {
        photo: ''
      }
    }
  },
  mounted () {
    const firebaseConfig = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId
    }
    firebase.initializeApp(firebaseConfig)
  },
  methods: {
    preview (e) {
      const vm = this
      const file = e.target.files[0]
      vm.tempDom.imgurl = URL.createObjectURL(file)
      vm.formData.photo = ''
    },
    cvs () {
      const vm = this
      // 圖片新寬度
      const imgNewWidth = 600
      const canvas = document.createElement('canvas')
      const img = new Image()
      const context = canvas.getContext('2d')

      const imgfile = $('#scream')
      const imgH = imgfile.height()
      const imgW = imgfile.width()
      // 圖片新高度
      const imgNewHeight = imgNewWidth * imgH / imgW
      // const newImg = ''
      img.src = vm.tempDom.imgurl
      canvas.width = imgNewWidth
      canvas.height = imgNewHeight
      context.clearRect(0, 0, imgNewWidth, imgNewHeight)
      context.drawImage(img, 0, 0, imgNewWidth, imgNewHeight) // 調整圖片尺寸
      const newImg = canvas.toDataURL('image/jpeg', 1)
      return newImg
    },
    uploadImg () {
      const vm = this
      vm.isLoading = true
      // 如果不是選預設圖在上傳
      if (!vm.formData.photo) {
        // 檔名設定
        const timestamp = Number(new Date())
        const fileName = timestamp.toString() + vm.userData.uid
        // 資料夾+黨名
        const storageRef = firebase.storage().ref('post_photo/' + fileName)
        const file = vm.dataURLtoFile(vm.cvs(), 'fileName')
        storageRef.put(file).then((snapshot) => {
          // 取得圖片位置
          snapshot.ref.getDownloadURL().then(function (downloadURL) {
            vm.formData.photo = downloadURL
            vm.isLoading = false
          })
        })
      } else {
        vm.isLoading = false
      }
    }
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
.img-area{
  border: 1px solid #999;
  border-radius: 10px;
  padding: 10px;
  label{
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  img{
    width: 200px;
  }
}
</style>
