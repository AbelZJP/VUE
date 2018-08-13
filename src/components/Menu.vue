<template>
<div>
	
	<h1 class="title">热门菜单</h1>
	<ul class="content">
		<router-link v-for="(item, index) in dealList" :key="index" tag="li" :to="'/Menu/list:id'">
			<img :src="'img/' + item.img" alt="">
			<div class="text">
				<h2 class="describe">{{item.describe}}</h2>
				<p class="autor">由 {{item.autor}} 来创建</p>
				<p class="num">{{item.num}} 道菜谱</p>
			</div>
			<div class="line"></div>
		</router-link>
	</ul>
	<div>
		<span class="more" @click="showMore">点击加载更多</span>
	</div>
</div>
</template>


<style lang='scss'>
@import '../base.scss';

.top {
	width: 95%;
	height: 60px;
	line-height: 60px;
	border-bottom: 1px solid #333;
	margin: 0 auto;
	li {
		float: left;
		height: 24px;
		&.goback {
			span {
				@include arrow(10px, #333, right);
				span {
					@include arrow(10px, #fff, right);
					position: relative;
					left: 13px;
				}
			}
		}
		img {
			width: 90px;
			height: 24px;
		}
		.setup {
			width: 84px;
			height: 35px;
			background-color: #FFB31A;
			border-radius: 5px;
		}
	}
}
.title {
	font-size: 24px;
	line-height: 70px;
	margin-left: 5%;
}
.content {
	li {
		position: relative;
		top: 0;
		left: 0;
		padding: 0px 5px;
		// li的样式
		@include contins;
		img {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 200px;
			border-radius: 5px;
		}
		.text {
			width: 100%;
			height: 80;
			position: absolute;
			top: 50%;
			margin-top: -40px;
			left: 50%;
			margin-left: -50%;
			.describe {
				@include txtHide;
				font-size: 20px;
				line-height: 30px;
				padding: 0px 10px;
			}
			.autor {
				line-height: 24px;
				font-size: 16px;
			}	
		}
		.line {
			@include drawLine(100%, #f3f3f3, 1px);
			position: absolute;
			bottom: -20px;
			left: 0;
		}
	}
	li:last-child {
		border-bottom: none;
	}
}
.more {
	display: block;
	width: 90%;
	height: 50px;
	line-height: 50px;
	margin: 20px auto 40px auto;
	border-radius: 50px;
	background-color: #FFB31A;
	color: #fff;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	cursor: pointer;
}
</style>


<script>
	export default {
		data() {
			return {
				// 列表数据
				list: [],
				// 剩余列表数据
				others: []
			}
		},
		// 动态数据绑定
		computed: {
			// 列表渲染数据
			dealList() {
				return this.list
			}
		},
		// 定义方法
		methods: {
			// 点击加载更多按钮，渲染剩余的数据
			showMore() {
				// 更新数据
				this.list = this.list.concat(this.others);
				console.log(this.list);
			}
		},
		// 发送请求
		created() {
			// get请求
			this.$http.get('/data/menu.json')
				// 监听返回
				.then(({ data }) => {
					console.log(data);
					// this就是组件实例化对象
					this.list = data.list.slice(0, 10);
					// other存储剩余的
					this.others = data.list.slice(10);
					console.log(this.list);
					console.log(this.others);
				})
		}
	}
</script>


