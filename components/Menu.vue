<template>
  <header id="navbar" class="menu navbar navbar-expand-md navbar-dark fixed-top">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <h1 class="mb-0">
          Meason 迷聲音樂
        </h1>
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <nav id="navbarText" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              關於<span>迷聲</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">
              團隊<span>介紹</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/instruction" class="nav-link">
              使用<span>說明</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/related" class="nav-link">
              相關<span>文章</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scope>
  .navbar-dark .navbar-toggler{
    color: rgba(255, 255, 255, 1);
    border: none;
  }
  .navbar-expand-md .navbar-nav .nav-link{
    padding-left: 20px;
    padding-right: 20px;
  }
  .nuxt-link-exact-active{
    color: #fff !important;
  }
  .menu{
    justify-content: space-between;
    box-shadow: 0 0px 20px rgba(114,200,213,0.0);
    transition: all 0.5s ease-in-out;
    padding-top: 15px;
    padding-bottom: 15px;
    nav{
      flex-grow: 0;
    }
    h1{
      color: #fff;
      font-size: 36px;
      font-weight: 100;
      text-shadow: 3px 2px 3px #72c8d5;
    }
    ul{
      a{
        display: flex;
        flex-wrap: wrap;
        font-size: 18px;
        padding: 10px 20px;
        color: #333;
      }
    }
    &::after{
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
      transition: all 0.3s ease-in;
      background-image: linear-gradient(to right, #0b0f2a, #4e4c71);
    }
    @media (max-width: 767.98px) {
      padding-top: 8px;
      padding-bottom: 8px;
      background-image: linear-gradient(to right, #0b0f2a, #4e4c71);
      h1{
        font-size: 24px;
      }
    }
  }
  .shrink{
    box-shadow: 0 0px 20px rgba(114,200,213,0.8);
    &::after{
      content: '';
      opacity: .95;
    }
  }
</style>

<script>

export default {
  mounted () {
    const vm = this
    vm.$nextTick(() => {
      window.addEventListener('scroll', () => {
        vm.scrollFuc()
      })
    })
  },
  methods: {
    scrollFuc () {
      const nav = document.getElementById('navbar').classList
      if (document.documentElement.scrollTop >= 150) {
        if (nav.contains('shrink') === false) {
          nav.toggle('shrink')
          console.log('document.documentElement.scrollTop >= 150')
        }
      } else if (nav.contains('shrink') === true) {
        nav.toggle('shrink')
        console.log('nav.contains("shrink") === true')
      }
    }
  }
}
</script>
