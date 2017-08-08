//es6加载模块
import Vue from 'vue';
import Vuex from 'vuex';
import $ from 'jquery';
import axios from 'axios';
import app from './views/index.vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
});
store.commit('increment');
console.log(store.state.count) // -> 1
Vue.filter('uppercase', function(value) {
    return value.toUpperCase();
});
new Vue({ //创建一个vue实例, 挂载在body上面
    el: '#app',
    components: {
        'index': app
    }
});
axios.get("http://192.168.204.61/upkey?name=35892.mp4&size=8290785").then((response) => {
    console.log("->", response.data)
}).catch(function(error) {
    console.log(error);
});
console.log($("#app"));
let datasource = { tabs: [{ text: "巴士" }, { text: "快车" }, { text: "专车" }, { text: "顺风车" }, { text: "出租车" }, { text: "代驾" }] };
new Vue({ el: "#example", data: datasource });
setTimeout(() => {
    datasource.tabs.push({ text: "大卡车" }, { text: "xssdsd" });
    store.commit('increment');
}, 2000);
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count() {
            return store.state.count
        }
    }
};
const vuexv = new Vue({
    el: '#vuex',
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    store,
    components: { Counter },
    template: `<div class="app"><counter></counter></div>`
});