<template>
  <div class="home-newslist">
    <ul class="mui-table-view">
      <li
        class="mui-table-view-cell mui-media"
        v-for="(item, index) in newsList.message"
        :key="index"
      >
        <router-link :to="'/home/newslist/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <span>{{ item.title }}</span>
            <p class="mui-ellipsis">
              <span>发表时间: {{ item.add_time | DateFormat }}</span>
              <span>点击: {{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: {
        message: [
          {
            id: 1,
            title: "湖南卫视跨年阵容",
            add_time: null,
            zhaiyao:
              "湖南卫视跨年官宣阵容：TFBOYS组合、火箭少女101、R1SE、UNINE、时代...",
            click: 0,
            img_url:
              "https://wx2.sinaimg.cn/large/6ff51fefly1g9iik2agfij20dw0dw0ux.jpg",
            content: null
          }
        ]
      }
    };
  },
  created: function() {
    this.getNewslist();
  },
  methods: {
    getNewslist() {
      this.$http.get("api/getnewslist").then(
        response => {
          this.newsList = response.body;
        },
        response => {
          this.newsList = response.body;
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  .mui-ellipsis {
    display: flex;
    justify-content: space-between;

    span {
      color: #21a1f1;
      font-size: 12px;
    }
  }
}
</style>