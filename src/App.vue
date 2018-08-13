<template>
  <div id="app">
    <div class="header">
      <div class="back" @click="back"><span class="arrow"></span></div>
      <div class="logo"><img src="https://i1.douguo.com//static/wap/img/m/dg_map1.png"></div>
      <div class="login">登录</div>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索菜谱">
    </div>
    <!-- 路由渲染  -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
  @import "./base.scss";
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .header {
    height: 60px;
    line-height: 60px;
    display: flex;
    text-align: center;
    color: #000;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    .back {
      width: 60px;
      .arrow {
        display: inline-block;
        width: 10px;
        height: 10px;
        @include arrow(2px, #000, -45deg);
      }        
    }
    .logo {
      flex: 1;
      line-height: 60px;
      img {
        height: 30px;
        width: 115px;
        padding-top: 12px;
      }
    }
    .login {
      width: 60px;
    }
  }
  .search {
    display: flex;
    padding: 20px 30px;
    input {
      display: block;
      flex: 1;
      padding: 10px 20px;
      outline: none;
      border: none;
      border-radius: 6px;
      background-color: #f5f5f5;
    }
  }


</style>
