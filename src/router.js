import VueRouter from 'vue-router'

import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import cart from './components/tabbar/Cart.vue'
import search from './components/tabbar/Search.vue'
import newslist from './components/home/NewsList.vue'
import newsinfo from './components/home/NewsInfo.vue'

var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/member', component: member},
        {path: '/cart', component: cart},
        {path: '/search', component: search},
        {path: '/home/newslist', component: newslist},
        {path: '/home/newslist/newsinfo/:id', component: newsinfo},
    ],
    linkActiveClass: 'mui-active', // 设置链接激活时使用的 CSS 类名。
})

export default router