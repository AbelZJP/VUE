<template>
  <div class="shoppingMall">
     <div class="header1">
         <span>课堂</span>        
     </div>
     <div class="img">
        <ul>
          <li><img src="../../public/image/轮播图1.png" alt=""></li>
        </ul>
     </div>
    <ul class="menu">
      <router-link v-for="(item,index) in icons" :key="index" class="menu-li" tag="li" to="/" >
        <img :src="item.img" alt="">
        <p>{{item.te}}</p>
      </router-link>
    </ul>
  
      <h1>热门课程</h1>
      <ul class="flash">
        <router-link v-for="(item, index) in classList" :key="index" :to="'/'" tag="li">
          <img :src="item.c.i" alt="">
          <span>{{item.c.t}}</span>
        
        </router-link>
      </ul>
        <!-- 限时抢购 -->
      <h1>电子书籍</h1>
      <ul class="flash">
        <router-link v-for="(item, index) in classList" :key="index" :to="'/'" tag="li">
         <img :src="item.c.i" alt="">
          <span>{{item.c.t}}</span>
        </router-link>
      </ul>
     
      
      <h1>全部课程</h1>
      <ul class="all">
        <router-link v-for="item in classList" :key="item.id" :to="'/ShoppingMall'" tag="li">
          <img :src="item.c.i" alt="">
          <p>{{item.c.t}}</p>
        </router-link>
      </ul>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          img: "image/1.png",
          te: "面包"
        },
        {
          img: "image/2.png",
          te: "甜点"
        },
        {
          img: "image/3.png",
          te: "中式面包"
        },
        {
          img: "image/4.png",
          te: "蛋糕"
        },
        {
          img: "image/5.png",
          te: "饮品"
        },
        {
          img: "image/6.png",
          te: "特色小吃"
        },
        {
          img: "image/7.png",
          te: "美容养生"
        },
        {
          img: "image/8.png",
          te: "面包"
        }
      ],

      classList: []
    };
  },

  created() {
    this.$http.get("data/class.json").then(res => {
      console.log(res.data);
      this.classList = res.data.list;
    });
  }
};
</script>

<style lang="scss">
ul {
  list-style: none;
}
@import "../base.scss";
@import "../qiubase.scss";
.shoppingMall {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.header1 {
  /*position: fixed;*/
 
  height: 32px;
  line-height: 32px;
  display: flex;
  padding: 10px 10px;
  text-align: center;
  width: 100%;
  background-color: #fff;
  .mall {
    font-size: 20px;
    margin-right: 20px;
    width: 40px;
    position: absolute;
  }

  .car {
    width: 60px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
.img { 
   text-align: center;
}
.menu {
  padding: 10px 20px;
   @include clearfix;
  .menu-li {
    width: 25%;

    float: left;
    padding-bottom: 10px;
    box-sizing:border-box;
    text-align: center;
    img {
      height: 40px;
    }
    p {
      line-height: 20px;
    }
  }

}
.main {
  margin-top: 52px;
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
    p {
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      background-color: #efefef;
      margin: 6px 0 8px 6px;
    }
    /*h3 {
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
    }*/
  }
}
</style>
