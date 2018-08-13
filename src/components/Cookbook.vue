<template>
  <div class="wrap">
   
    <!-- 选项卡 -->
    <ul class="cookbook">
      <li v-for="(item, index) in cookbook" :class="{cur: index ==num}" :key="index"  @click="tab(index)">
        {{item.type}}
      </li>
    </ul>
    <ul class="cookbook-list">
      <li v-for="(item, index) in cookbook" :key="index" v-show="index == num">
        <span v-for="(i, index) in item.list" :key="index">{{i}}</span>
      </li>
    </ul>
  </div>  
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        cookbook: [
          {id: 1, type: "蔬菜", list: ["土豆","茄子","菠菜","南瓜","白菜","豆角","山药"]},
          {id: 2, type: "主食", list: ["面条","包子","水饺","米饭","馒头","春卷","盒子","汉堡","拌饭","馅饼"]},
          {id: 3, type: "肉类", list: ["排骨","五花肉","肘子","火腿","鸡腿","牛排"]},
          {id: 4, type: "海鲜", list: ["皮皮虾","草鱼","鲢鱼","鳕鱼","金枪鱼","鱿鱼","花蛤"]},
          {id: 5, type: "豆制品", list: ["豆腐","香干","臭豆腐","麻豆腐","鸡蛋","鸭蛋","鹅蛋"]},
          {id: 6, type: "母婴", list: ["孕妇食谱","宝宝辅食","月子餐","产妇食谱"]},
          {id: 7, type: "杂粮", list: ["玉米","大米","小米","黑米","粳米","大麦"]},
          {id: 8, type: "口味", list: ["清淡","辣","家常味","酸","甜","咸","原味"]}
        ],
        num: 1
      }
    },
    methods: {
      tab(index) {
        this.num = index;
      },
      back() {
        this.$router.go(-1)
      }
    }
  }

</script>

<style type="text/css" lang="scss">
  @import "../base.scss";
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
 .wrap{
  @include clearfix;
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
  
  .cookbook {
    width: 80px;
    background-color: #333;
    color: #fff;
    float:left;
    li {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
  .cur {
    background-color: #fff;
    color: #333;
  }
  .cookbook-list {
    width: 70%;
    float: left;
    li {
      span {
        display: inline-block;
        width: 70px;
        height: 30px;
        font-size: 16px;
        text-align: center;
        text-align: center;
        border: 1px solid #ccc;
        margin: 5px;
      }
    }
  }
} 
</style>