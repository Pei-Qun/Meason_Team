<template>
  <main>
    <Menu />
    <Banner :zone="$nuxt.$route.name" title="相關連結及文章"/>
  </main>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Menu, Banner
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
.container {
  text-align: center;
}
</style>
