<template>
  <div>
    <van-nav-bar
      title="首页"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"></van-nav-bar>
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

<style lang="less">
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }

    &-group {
      margin-bottom: 15px;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
