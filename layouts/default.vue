<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
</style>

<script>
export default {
  head: () => {
    return {
      script: [
        {
          src: '/fontawesome.js',
          body: true
        }
      ]
    }
  }
}
</script>
