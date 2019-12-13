// 程序入口文件
// 导入 Vue
import Vue from 'vue'


// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入路由信息
import router from './router.js'

import moment from 'moment'

// 添加全局过滤器
Vue.filter('DateFormat', function(dateStr, formatter = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(formatter)
})

// 导入根组件
import app from './App.vue'


// 导入 MUI 组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'


// 导入 vue-resources
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:80/'

// 按需导入 Mint-UI 组件
import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(app),
    router
})