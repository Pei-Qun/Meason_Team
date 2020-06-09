<template>
  <div v-if="data" class="card">
    <nuxt-link
      class="card-img-top img"
      :to="`/posts/${data.uid}`"
      :style="{'background-image': `url(${data.img})`}"
    />
    <div class="card-body">
      <h3 class="card-title">
        {{ data.content }}
      </h3>
      <article class="card-text">
        <span>{{ time }}</span>
        <h5 v-if="data.status == 'publish'" style="background: #fde097" class="status">
          已引用
        </h5>
        <h5 v-if="data.status == 'reject'" style="background: #f7b59b" class="status">
          已違規
        </h5>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => null
    }
  },
  computed: {
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
  }
}
</script>

<style lang="scss" scoped>
.img{
  min-height: 160px;
  background-size: cover;
  background-position: center;
}
.card-title{
  margin-bottom: 5px;
  .card-title{
    font-size: 18px;
  }
}
.card-body{
  padding: 0.75rem 1.25rem;
}
.card-text{
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    color: #999;
    font-size: 14px;
  }
  .status {
    padding: 3px 5px;
    border-radius: 3px;
  }
}
</style>
