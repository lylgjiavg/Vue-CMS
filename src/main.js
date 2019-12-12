// 程序入口文件
// 导入 Vue
import Vue from 'vue'

// 导入根组件
import app from './App.vue'

// 导入 MUI 组件
import './lib/mui/css/mui.min.css'

// 按需导入 Mint-UI 组件
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);

var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(app)
})