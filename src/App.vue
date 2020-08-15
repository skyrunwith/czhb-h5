<template>
  <div id="app">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/rank" icon="search">
        排名
      </van-tabbar-item>
      <van-tabbar-item replace to="/warning" icon="home-o">
        预警
      </van-tabbar-item>
      <van-tabbar-item replace to="/other" icon="home-o">
        其他
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        active: 0
      }
    }
  };
</script>
<style>
  body {
    font-size: 16px;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
  }
</style>
