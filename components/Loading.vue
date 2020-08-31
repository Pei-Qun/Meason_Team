<template>
  <div class="bg">
    <img src="~/assets/img/loading.svg" alt="迷聲">
  </div>
</template>

<style lang="scss" scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#222,.5);
  z-index: 100000;
  img{
    width: 150px;
    height: 150px;
  }
}
</style>
