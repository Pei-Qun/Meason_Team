<template>
  <header class="menu navbar navbar-expand-md navbar-light fixed-top">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <h1>
          迷聲介紹網
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
          <li class="nav-item active">
            <NuxtLink to="/" class="nav-link">
              關於迷聲
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about" class="nav-link">
              團隊介紹
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              使用說明
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">
              相關文章
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scope>
  .menu{
    justify-content: space-between;
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
        display: block;
        padding: 10px 20px;
        color: #333;
      }
    }
  }
</style>

<script>

export default {
  mounted () {
  }
}
</script>
