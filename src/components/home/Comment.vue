<!--  -->
<template>
  <div class="home-comment">
    <div class="title">
      <h3>发表评论</h3>
    </div>
    <hr />
    <div class="comment-info">
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="请输入评论内容(最多120个字)"
        maxlength="120"
      ></textarea>
    </div>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="comments">
      <div class="comment" v-for="(item, index) in comments" :key="index">
        <div class="comment-user">
          第{{ index + 1 }}楼&nbsp;&nbsp;&nbsp;&nbsp;用户:{{ item.username }}&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{
            item.add_time | DateFormat
          }}
        </div>
        <div class="comment-content">{{ item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getComment">发表评论</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      comments: []
    };
  },
  created: function() {
    this.getComment();
  },
  methods: {
    // /api/getcomments/:artid?pageindex=1
    getComment() {
      this.$http
        .get(
          "api/getcomments/" +
            this.artid +
            "?" +
            "pageindex=" +
            this.pageindex++
        )
        .then(response => {
          this.comments = this.comments.concat(response.body.message);
        });
    }
  },
  props: ["artid"]
};
</script>
<style lang='less' scoped>
.home-comment {
  .title {
    font-size: 18px;
  }
  .comment-info {
    textarea {
      margin: 0;
    }
  }
  .comments {
    font-size: 15px;
    .comment-user {
      background-color: #d4d3d3;
      line-height: 30px;
    }
    .comment-content {
        line-height: 30px;
        text-indent: 1em;
    }
  }
}
</style>