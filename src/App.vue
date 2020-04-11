<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="less">
@import './assets/styles/reset.css';
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2845;
}
body {
  background: #fff;
}
</style>
