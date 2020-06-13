<template>
  <main>
    <Menu />
    <Banner zone="publication" title="新增投稿" bio="如有梗圖或是文章欲投稿到<a class='text-warning' href='https://www.facebook.com/measonmusic/'>【紛絲專頁】</a>上，可至本站進行投稿" />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 mt-5">
          <form action="" @submit.prevent="">
            <ValidationProvider v-slot="{ errors, validate }"  rules="ext:jpg,png|size:100" class="img-area" tag="div" name="圖片">
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
                  name="img"
                  type="file"
                  multiple="true"
                  accept="image/*"
                  @change="validate"
                >
                <p class="text-danger mt-1 small">
                  {{ errors[0] }}
                </p>
                <!-- <button type="button" class="btn btn-primary" @click="uploadImg()">
                  上傳圖片
                </button> -->
              </label>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="form-group" name="商品種類">
              <label for="classify_option">投稿分類</label>
              <select id="classify_option" v-model="formData.classify" class="form-control">
                <option value="" disabled>
                  請選擇
                </option>
                <option v-for="item in classifyOption" :key="item">
                  {{ item }}
                </option>
              </select>
              <small v-if="errors.length > 0" class="text-danger text-small">{{ errors[0] }}</small>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="form-group" name="匿名">
              <label for="incognito">是否匿名</label>
              <select id="incognito" v-model="formData.incognito" class="form-control">
                <option value="true">
                  是
                </option>
                <option value="false">
                  否
                </option>
              </select>
              <small v-if="errors.length > 0" class="text-danger text-small">{{ errors[0] }}</small>
            </ValidationProvider>
            <div class="original form-group">
              <label for="original_select">是否為原創</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <select id="original_select" v-model="tempDom.original" name="original_select" class="btn btn-outline-secondary dropdown-toggle">
                    <option value="false">
                      非原創
                    </option>
                    <option value="true">
                      原創
                    </option>
                  </select>
                </div>
                <input
                  v-if="formData.original != 'original'"
                  v-model="formData.original"
                  type="text"
                  class="form-control"
                  aria-label="是否為原創投稿"
                  placeholder="請註明出處"
                >
                <input
                  v-else
                  type="text"
                  class="form-control"
                  aria-label="是否為原創投稿"
                  placeholder="本文為個人原創"
                  disabled
                >
              </div>
              <small class="text-danger text-small">123</small>
            </div>
            <div class="form-group">
              <label for="content">貼文內容</label>
              <textarea id="content" v-model="formData.content" class="form-control mt-1" placeholder="貼文內容" />
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
import { ValidationProvider, extend, localize } from 'vee-validate'
import { required, min, max, ext, size } from 'vee-validate/dist/rules'
import zhTW from 'vee-validate/dist/locale/zh_TW.json'
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'

// Override the default message.
extend('required', required)
extend('min', min)
extend('max', max)
extend('ext', ext)
extend('size', size)

// Install and Activate the Arabic locale.
localize('zhTW', zhTW)

export default {
  components: {
    Menu, Banner, ValidationProvider
  },
  data () {
    return {
      isLoading: false,
      userData: {
        uid: 'text'
      },
      tempDom: {
        imgurl: '',
        original: 'false',
        imgChange: ''
      },
      formData: {
        uid: '',
        content: '',
        classify: '',
        img: '',
        status: 'unpublish',
        authName: '',
        authID: '',
        incognito: false,
        timestamp: '',
        original: ''
      }
    }
  },
  computed: {
    classifyOption () {
      return this.$store.state.option.classify
    }
  },
  watch: {
    'tempDom.original': {
      handler: function originalInput (val) {
        const vm = this
        if (val === 'true') {
          vm.formData.original = 'original'
        } else {
          vm.formData.original = ''
        }
      }
    },
    'formData.content': {
      handler: function autogrow (val) {
        const textarea = document.getElementById('content')
        let adjustedHeight = textarea.clientHeight
        adjustedHeight = Math.max(textarea.scrollHeight, adjustedHeight)
        if (adjustedHeight > textarea.clientHeight) {
          textarea.style.height = `${adjustedHeight} + px`
        }
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
      vm.formData.img = ''
    },
    cvs () {
      const vm = this
      // 圖片新寬度
      const imgNewWidth = 800
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
      if (!vm.formData.img) {
        // 檔名設定
        const timestamp = Number(new Date())
        const fileName = timestamp.toString() + vm.userData.uid
        // 資料夾+黨名
        const storageRef = firebase.storage().ref('post_photo/' + fileName)
        const file = vm.dataURLtoFile(vm.cvs(), 'fileName')
        storageRef.put(file).then((snapshot) => {
          // 取得圖片位置
          snapshot.ref.getDownloadURL().then(function (downloadURL) {
            vm.formData.img = downloadURL
            vm.isLoading = false
          })
        })
      } else {
        vm.isLoading = false
      }
    },
    dataURLtoFile (dataurl, filename) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
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
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 30px;
  label{
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  input{
    margin-top: 15px;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    height: calc(1.5em + 0.75rem + 2px);
    &:focus {
      border: none;
      outline: none;
    }
  }
  img{
    width: 200px;
    transition: all 0.3s ease-in-out;
  }
  &:hover{
    img{
      transform: scale(1.1, 1.1);
      opacity: .8;
    }
  }
}
#content{
  resize: none;
  min-height: 200px;
}
</style>
