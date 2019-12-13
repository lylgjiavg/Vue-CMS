<template>
  <div class="home-newslist">
    <h3 class="title">{{ newsinfo.message.title }}</h3>

    <p class="subtitle">
      <span>发表时间: {{ newsinfo.message.add_time | DateFormat }}</span>
      <span>点击 {{ newsinfo.message.click }} 次</span>
    </p>

    <hr />

    <div class="content" v-html="newsinfo.message.content"></div>

    <div class="comment">
      <comment :artid="id"></comment>
    </div>
  </div>
</template>

<script>
import comment from "./Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {
        message: {
          id: 1,
          title: "湖南卫视跨年阵容",
          add_time: "2015-04-16T04:05:34.000Z",
          zhaiyao:
            "湖南卫视跨年官宣阵容：TFBOYS组合、火箭少女101、R1SE、UNINE、时代...",
          click: 0,
          img_url:
            "https://wx2.sinaimg.cn/large/6ff51fefly1g9iik2agfij20dw0dw0ux.jpg"
        }
      }
    };
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(response => {
        this.newsinfo = response.body;
      });
    }
  },
  created: function() {
    this.getNewsInfo();
  },
  components: {
    comment: comment
  }
};
</script>

<style lang="less" scoped>
.home-newslist {
  padding: 5px;

  .title {
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    color: red;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    color: #209ef0;
  }

  .content {
    text-indent: 1em;
  }
}
</style>