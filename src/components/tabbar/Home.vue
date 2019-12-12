<template>
  <div class="tabbar-home-container">
    <div class="swipp">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in lunbotu.message" :key="index">
          <img :src="item.img" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- mui-content -->
    <div class="grid">
      <ul class="mui-table-view mui-grid-view mui-grid-9">

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="/src/images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
          </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="/src/images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="/src/images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="/src/images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="/src/images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <img src="/src/images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotu: {
        message: [
          {
            url: "",
            img:
              "http://img5.imgtn.bdimg.com/it/u=159312537,1900559468&fm=15&gp=0.jpg"
          }
        ]
      }
    };
  },
  methods: {
    getLunBoTu() {
      this.$http.get("api/getlunbo").then(
        response => {
          this.lunbotu = response.body;
        },
        response => {
          this.lunbotu = response.body;
        }
      );
    }
  },
  created: function() {
    // 获得轮播图数据
    this.getLunBoTu();
  }
};
</script>

<style lang="less" scoped>


.mint-swipe {
  height: 220px;

  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;

    li {
        border: none;
        font-size: 13px;

        img {
            width: 60px;
            height: 60px;
        }
    }
}
</style>