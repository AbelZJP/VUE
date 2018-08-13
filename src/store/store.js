import Vue from "vue";
import Vuex, { Store } from "vuex";
//引入axios
import axios from "axios";
// 安装vuex
Vue.use(Vuex);
//安装axios
Vue.prototype.$http = axios;
//创建store
export default new Store({
	state: {
		word: ""
	},
	//同步消息
	mutations: {
		updateWord(state, word){
			state.word = word;
		}
	}
})








