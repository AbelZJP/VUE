<template>
  <div class="wrap">
    <!--  -->
    <div class="home">
      <!-- icons -->
      <ul class="icons">
        <router-link v-for="(item, index) in icons" :key="index" :to="'/' + item.type" tag="li">
          <img :src="'img/icon/' + item.img" alt="">
          <p>{{item.text}}</p>
        </router-link>
      </ul>
      <!-- 跳转路由模块 -->
      <ul class="router-list">
        <router-link v-for="(item, index) in routerList" :key="index" :to="'/' + item.type" tag="li"><span>{{item.text}}</span></router-link>
      </ul>
      <!-- 精选部分 -->
      <div class="chosen">
        <h2 class="title">精选最新</h2>
        <ul class="list-item">
          <router-link v-for="(item, index) in dealList" :key="index" :to="'/Hot'" tag="li">
            <img :src="item.img" alt="">
            <div class="content">
              <h2 class="text">{{item.n}}</h2>
              <p class=an>{{item.an}}</p>
              <span class="see">{{item.vc}}</span>
              <span class="collect">{{item.fc}}</span>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      icons: [
        { img: "01.png", text: "菜谱分类", id: 1, type: "CookBook"},
        { img: "02.png", text: "健康管理", id: 2},
        { img: "03.png", text: "签到领现金", id: 3},
        { img: "04.png", text: "关注动态", id: 4},
        { img: "05.png", text: "热门活动", id: 5},
        { img: "06.png", text: "吃货联盟", id: 6},
        { img: "07.png", text: "视频菜谱", id: 7},
        { img: "08.png", text: "精品菜单", id: 8}
      ],
      routerList: [
        { type: "Home", text: "首页", id: 0},
        { type: "Class", text: "课堂", id: 1 },
        { type: "Note", text: "笔记", id: 2 },
        { type: "ShoppingMall", text: "商城", id: 3 },
        { type: "Menu", text: "热门", id: 4 }
      ],
      list: [],
      msg: ""
    }
  },
  methods: {
    toSearch() {
      //提交数据到store
      this.$store.commit("updateWord", this.msg);
      this.msg = ""
    }
  },
  computed: {
    dealList() {
     // console.log(this.$store.state.word)
      return this.list.filter(item => item.n.indexOf(this.$store.state.word) >= 0)
    }
  },
  //发送请求
  created() {
    this.$http.get("/data/home.json")
      .then(({data}) => {
        //console.log(data)
        this.list = data.list;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
@import "../base.scss";
.home {
  padding: 0 20px;
  .icons {
    @include clearfix;
    margin-bottom: 10px;
    li {
      float: left;
      width: (100%/4);
      text-align: center;
      img {
        width: 60%;
      }
      p {
        font-size: 12px;
        margin: 5px 0 10px;
      }
    }
  }
}
  
 /* .router-list {
    padding: 10px 20px;
     @include clearfix;
    li {
      float: left;
      width: 47%;
      background-color: #c6e7fc;
      color: #fff;
      font-weight: bold;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 20px;
      margin-bottom: 15px;
      border-radius: 10px;
      &:nth-child(odd) {
        margin-right: 6%;
      }
    }
  }*/
  .router-list {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #fff;
    border-top: 1px solid #e1e2e3;
    @inclued clearfix;
    li {
      float: left;
      width: 20%;
      font-size: 16px;
      text-align: center;
      line-height: 60px;
    }
  }
  .chosen {
    margin-bottom: 60px;
    h2 {
      /*padding-bottom: 20px;*/
    }
    .list-item {
      li {
        padding: 20px 0;
        border-bottom: 1px solid #f3f3f3;
        display: flex;
        img {
          width: 160px;
          height: 100px;
          border-radius: 10px;
        }
        .content {
          flex: 1;
          padding:0 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .text {
            font-size: 14px;
            line-height: 26px;
          }
          .an {
              font-size: 14px;
              color: #999;
              padding: 15px 0;
          }
          .see {
            color: #999;
            font-size: 14px;
            margin-right: 6px;
            &:before {
              content: "";
              width: 12px;
              height: 12px;
              display: inline-block;
              margin-right: 3px;
              background: url("/img/icon/see.png") no-repeat;
              background-size: 12px;
            }
          }
          .collect {
            @extend .see;
            &:before {
              background-image: url("/img/icon/star.png");
            }
          }
        }
      }
    }
  }
</style>
