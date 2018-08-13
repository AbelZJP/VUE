import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import Class from "../components/Class.vue";
//import Note from "../components/Note.vue";
import ShoppingMall from "../components/ShoppingMall.vue";
import CookBook from "../components/Cookbook.vue";
import Menu from '../components/Menu.vue';
//安装路由
Vue.use(VueRouter);


//let Home = {template: "<h1>Home</h1>"}
//let Class = {template: "<h1>Class</h1>"}
let Note = {template: "<h1>Note</h1>"}
//let Mall = {template: "<h1>Mall</h1>"}
//let Hot = {template: "<h1>Hot</h1>"}
//let CookBook = {template: "<h1>CookBook</h1>"}

//定义规则
let routes = [
	{
		path: "/Class",
		component: Class
	},
	{
		path: "/Note",
		component: Note
	},
	{
		path: "/ShoppingMall",
		component: ShoppingMall
	},
	{
		path: "/CookBook",
		component: CookBook
	},
	{
		path: '/Menu',
		component: Menu
	},
	{
		path: "*",
		component: Home
	}
]

//实例化路由
let router = new VueRouter({routes});

//暴露
export default router;











