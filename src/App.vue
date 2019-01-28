<template>
  <div id="app">
    <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="@/assets/img/logo.png" height="48">
        </a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;

  .navbar {
    background-color: #1fc1aa;
  }
}
</style>
