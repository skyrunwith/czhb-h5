<template>
  <div id="app">
    <router-view/>
    <van-tabbar route>
      <van-tabbar-item replace to="/air" icon="home-o">
        空气
      </van-tabbar-item>
      <van-tabbar-item replace to="/water" icon="home-o">
        水质
      </van-tabbar-item>
      <van-tabbar-item replace to="/warn" icon="home-o">
        预警
      </van-tabbar-item>
      <van-tabbar-item replace to="/rank" icon="search">
        排名
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
