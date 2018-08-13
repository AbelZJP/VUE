<template>
  <div class="shoppingMall">
   
    <!-- 主图 -->
    <div class="main">
      <img :src="imgUrl2" alt="">
    </div>
    <!-- 导航分类 -->
      <ul class="list">
        <router-link v-for="(item, index) in icons" :key="index" :to="'/Mallsecond/' + item.id" tag="li">
          <img :src="item.img" alt="">
          <h2>{{item.text}}</h2>
        </router-link>
      </ul>
      <!-- 限时抢购 -->
      <h1>限时抢购</h1>
      <ul class="flash">
        <router-link v-for="(item, index) in flash" :key="index" :to="'/ShoppingMall/'" tag="li">
          <img :src="item.img_url" alt="">
          <h3>{{item.goods_name}}</h3>
          <p class="cost">
            <span class="price">¥{{item.price}}</span>
            <span class="ori_price">¥{{item.ori_price}}</span>
          </p>
        </router-link>
      </ul>
      <!-- 好物推荐 -->
      <h1>好物推荐</h1>
      <ul class="rec">
        <router-link v-for="(item, index) in rec" :key="index" :to="'/ShoppingMall'" tag="li">
          <img :src="item.img" alt="">
          <div class="content">
            <h3>{{item.title}}</h3>
            <p class="intro">{{item.intro}}</p>
          </div>
        </router-link>
      </ul>
      <!-- 全部商品 -->
      <h1>全部商品</h1>
      <ul class="all">
        <router-link v-for="item in all" :key="item.id" :to="'/ShoppingMall'" tag="li">
          <img :src="item.ti" alt="">
          <h4>{{item.des}}</h4>
          <h3>{{item.t}}</h3>
          <div class="cost">
            <p class="price">¥{{item.p}}</p>
            <p class="ori_price" v-if="item.op > 0">
              ¥{{item.op}}
            </p>
            <p class="ori_price" v-else>
              <br />
            </p>
            <span class="sold">{{item.fi}}</span>
            <span class="baoyou">{{item.tp}}</span>
          </div>
        </router-link>
      </ul>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      icons: [
        { img: "image/01part2.png", text: "豆果我买", id: 5 },
        { img: "image/02part2.png", text: "烘培美厨", id: 0 },
        { img: "image/03part2.png", text: "厨具厨电", id: 1 },
        { img: "image/04part2.png", text: "粮油调味", id: 2 },
        { img: "image/05part2.png", text: "时令生鲜", id: 3 },
        { img: "image/06part2.png", text: "养生汤料", id: 4 }
      ],
      imgUrl: "image/inp.png",
      imgUrl1: "image/car.png",
      imgUrl2: "image/main.png",
      // 显示抢购数据
      flash: [],
      // 显示推荐数据
      rec: [],
      //显示全部数据
      all: []
    };
  },
  // 绑定动态数据
  computed: {
    // allList() {
    //   //console.log(this.$store.state.word)
    //   //return this.all;
    //   return this.all.filter(
    //     item => item.t.indexOf(this.$store.state.word) >= 0
    //   );
    // }
  },
  methods: {
    goSearch() {
      // 提交数据给store
      this.$store.commit("updateWord", this.msg);
      this.msg = "";
    }
  },
  created() {
    this.$http.get("/data/flash.json").then((res) => {
     //console.log(res.data.data);
      this.flash = res.data.list;
    });
    this.$http.get("/data/recommend.json").then((res) => {
      //console.log(res.data.data);
      this.rec = res.data.list;
    });
       this.$http.get("/data/all.json").then((res) => {
      //console.log(res.data.data);
      this.all = res.data.list;
    });
 
    //   this.$http.get("/api/all")
    //     .then((res) => {
    //       console.log(res);
    //       this.all = res.data;
    //     });
  }
};
</script>

<style lang="scss">
@import "../qiubase.scss";
.shoppingMall {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.main {
  /*margin-top: 52px;*/
  img {
    width: 100%;
  }
}
.list {
  list-style: none;
  @include scroll;
  li {
    width: (100% / 4.5);
    text-align: center;
    img {
      width: 50%;
    }
    h2 {
      font-size: 12px;
      font-weight: normal;
    }
  }
}
h1 {
  font-size: 18px;
  padding: 10px 18px 0;
}
.flash {
  @include scroll;
  padding: 0 0 0 18px;
  li {
    width: (100% / 3);
    margin-right: 5px;
    img {
      width: 100%;
    }
    h3 {
      font-size: 12px;
      @include clamp;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // line-clamp: 2;
      // display: -webkit-box;
      // -webkit-line-clamp: 2;
      // -webkit-box-orient: vertical;
      // font-weight: normal;
    }
    .cost {
      .price {
        @include price;
      }
      .ori_price {
        float: right;
        padding-top: 4px;
        @include ori_price;
      }
    }
  }
}
.rec {
  padding: 10px 10px 0 18px;
  li {
    display: flex;
    margin-bottom: 20px;
    padding-right: 20px;
    // width: 100%;
    img {
      width: 100px;
      height: 80px;
      margin-right: 10px;
    }
    .content {
      flex: 1;
      h3 {
        font-size: 14px;
        margin-bottom: 6px;
      }
      .intro {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
.all {
  padding: 10px 0px 0 18px;
  li {
    width: (100% - 10) / 2;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
    img {
      width: 100%;
      vertical-align: bottom;
    }
    h4 {
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      background-color: #efefef;
      padding: 6px 0 8px 6px;
    }
    h3 {
      @include clamp;
      font-size: 14px;
      height: 40px;
    }
    .cost {
      .price {
        @include price;
      }
      .ori_price {
        @include ori_price;
      }
      .sold {
        font-size: 12px;
        color: $color;
        float: left;
      }
      .baoyou {
        font-size: 12px;
        color: $color;
        float: right;
      }
    }
  }
}
</style>









