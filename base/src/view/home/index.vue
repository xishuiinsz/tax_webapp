<template>
  <div class="home-page">
    <div class="my-swiper">
      <van-swipe :autoplay="3000" @change="onChange">
        <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
          <img v-lazy="image">
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">
          <i
            :class="{indicator: true,'indicator--active': n==index+1}"
            v-for="n in swipeImages.length"
            :key="n"
          ></i>
        </div>
      </van-swipe>
    </div>

    <div class="search">
      <van-search v-model="value" placeholder="搜索服务" shape="round" @search="onSearch">
        <div slot="left-icon" @click="onSearch"></div>
        <div slot="label" class="location">
          深圳&nbsp;&nbsp;
          <van-icon name="arrow-down"/>
        </div>
      </van-search>
      <van-icon class="applicaton" name="apps-o"/>
    </div>

    <div class="nav">
      <div class="nav-item" v-for="nav in navList" :key="nav.id">
        <div class="nav-item__avatar">
          <img :src="nav.avatar" :alt="nav.avatar">
        </div>
        <div class="nav-item__label">{{nav.label}}</div>
      </div>
    </div>

    <div class="news">
      <img class="industry" src="/static/news/5b88af7c7c471_18.png" alt="5b88af7c7c471_18.png">
      <img class="toutiao" src="/static/news/5b88af7c7c471_19.png" alt="5b88af7c7c471_18.png">
      <span class="gongshan">工商咨询</span>
      <span class="news-item">2018香港公司年审需要知道哪些？</span>
    </div>

    <div class="bannerList">
      <van-swipe :autoplay="300000" @change="onChange">
        <van-swipe-item v-for="banner in bannerList" :key="banner.id">
          <div class="bannerList-left">
            <div class="bannerList-left__title" v-html="banner.title"></div>
            <div class="bannerList-left__desc" v-html="banner.desc"></div>
          </div>
          <div class="bannerList-right">
            <img :src="banner.pic" :alt="banner.pic">
          </div>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">
          <i
            :class="{indicator: true,'indicator--active': n==index+1}"
            v-for="n in bannerList.length"
            :key="n"
          ></i>
        </div>
      </van-swipe>
    </div>
    <!-- 本地生活 -->
    <div class="local">
      <div class="local-head">
        <div class="left">
          <i class="vertical-line"></i>
          <span class="local-title">周边服务</span>
        </div>
        <div class="middle">&nbsp;</div>
        <div class="right"></div>
      </div>
      <div class="local-items-wraper">
        <div class="local-item-wraper">
          <img src="/static/local/service1.png" alt="本地服务" class="local-item__avatar">
          <div class="local-item-right">
            <div class="local-item-top">
              <div class="local-item-body">
                <div class="local-item__title">深圳注册公司</div>
                <div class="local-item-stars">
                  <van-rate v-model="rateValue" allow-half void-icon="star" void-color="#eee"/>
                  <div class="local-item-stars__scores">2.5分</div>
                  <div class="local-item-stars__turnover">月成交325单</div>
                </div>
                <div class="local-item-tags">
                  <van-tag type="danger">伯爵</van-tag>
                  <van-tag type="primary">上海</van-tag>
                  <van-tag type="success">企业</van-tag>
                </div>
              </div>
              <div class="local-item-price">&yen;160.00</div>
            </div>
            <div class="local-item-footer">
              <img src="static/local/logo.png" class="local-item-footer__avatar">
              <div class="local-item-footer__title">深圳xxxx科技有限公司</div>
            </div>
          </div>
        </div>
        <div class="local-item-wraper">
          <img src="/static/local/service1.png" alt="本地服务" class="local-item__avatar">
          <div class="local-item-right">
            <div class="local-item-top">
              <div class="local-item-body">
                <div class="local-item__title">深圳注册公司</div>
                <div class="local-item-stars">
                  <van-rate v-model="rateValue" allow-half void-icon="star" void-color="#eee"/>
                  <div class="local-item-stars__scores">2.5分</div>
                  <div class="local-item-stars__turnover">月成交325单</div>
                </div>
                <div class="local-item-tags">
                  <van-tag type="danger">伯爵</van-tag>
                  <van-tag type="primary">上海</van-tag>
                  <van-tag type="success">企业</van-tag>
                </div>
              </div>
              <div class="local-item-price">&yen;160.00</div>
            </div>
            <div class="local-item-footer">
              <img src="static/local/logo.png" class="local-item-footer__avatar">
              <div class="local-item-footer__title">深圳xxxx科技有限公司</div>
            </div>
          </div>
        </div>
        <div class="local-item-wraper">
          <img src="/static/local/service1.png" alt="本地服务" class="local-item__avatar">
          <div class="local-item-right">
            <div class="local-item-top">
              <div class="local-item-body">
                <div class="local-item__title">深圳注册公司</div>
                <div class="local-item-stars">
                  <van-rate v-model="rateValue" allow-half void-icon="star" void-color="#eee"/>
                  <div class="local-item-stars__scores">2.5分</div>
                  <div class="local-item-stars__turnover">月成交325单</div>
                </div>
                <div class="local-item-tags">
                  <van-tag type="danger">伯爵</van-tag>
                  <van-tag type="primary">上海</van-tag>
                  <van-tag type="success">企业</van-tag>
                </div>
              </div>
              <div class="local-item-price">&yen;160.00</div>
            </div>
            <div class="local-item-footer">
              <img src="static/local/logo.png" class="local-item-footer__avatar">
              <div class="local-item-footer__title">深圳xxxx科技有限公司</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search, Icon } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
    [Icon.name]: Icon
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      swipeImages: [
        `/static/home-swiper01.png`,
        `/static/home-swiper01.png`,
        `/static/home-swiper01.png`,
        `/static/home-swiper01.png`,
        `/static/home-swiper01.png`
      ],
      index: 0, //当前激活项索引
      value: "", //搜索关键字
      navList: [
        { id: 1, label: "工商服务", avatar: "/static/navList-avatar-01.png" },
        { id: 2, label: "财税管理", avatar: "/static/navList-avatar-02.png" },
        { id: 3, label: "法律服务", avatar: "/static/navList-avatar-03.png" },
        { id: 4, label: "质询问答", avatar: "/static/navList-avatar-04.png" },
        { id: 5, label: "代理记帐", avatar: "/static/navList-avatar-05.png" },
        { id: 6, label: "创业支持", avatar: "/static/navList-avatar-06.png" },
        { id: 7, label: "公司变更", avatar: "/static/navList-avatar-07.png" },
        { id: 8, label: "更新", avatar: "/static/navList-avatar-08.png" }
      ],
      bannerList: [
        {
          id: 1,
          title:
            '<span>公司注册</span><span style="color: rgb(47,155,254);">专业代办一对一服务</span>',
          desc: '<span style="color: rgb(166,166,166);">专注中小微企业</span>',
          pic: "/static/bannerList/bannerList-pic01.png"
        },
        {
          id: 2,
          title:
            '<span>公司注册</span><span style="color: rgb(47,155,254);">专业代办一对一服务</span>',
          desc: '<span style="color: rgb(166,166,166);">专注中小微企业</span>',
          pic: "/static/bannerList/bannerList-pic01.png"
        },
        {
          id: 3,
          title:
            '<span>公司注册</span><span style="color: rgb(47,155,254);">专业代办一对一服务</span>',
          desc: '<span style="color: rgb(166,166,166);">专注中小微企业</span>',
          pic: "/static/bannerList/bannerList-pic01.png"
        }
      ],
      rateValue: 1.5
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },

    // 点击搜索事件
    onSearch() {}
  },
  mounted() {
    // console.log(process.env.BASE_URL)
  }
};
</script>

<style lang="less" scoped>
// @font-face
// {
//     font-family: myFirstFont;
//     src: url('造字工房力黑体.otf'),
// }
.home-page {
  background-color: rgb(242, 243, 249);
  .van-swipe {
    position: relative;
    .van-swipe-item {
      img {
        width: 100%;
        height: 211.5px;
        display: block;
      }
    }

    .custom-indicator {
      display: flex;
      position: absolute;
      bottom: 8px;
      left: 50%;
      margin-left: -27px;
      .indicator {
        opacity: 0.3;
        border-radius: 100%;
        width: 9px;
        height: 3px;
        -webkit-transition: opacity 0.2s;
        transition: opacity 0.2s;
        background-color: rgb(132, 155, 255);
      }
      .indicator:not(:last-child) {
        margin-right: 5px;
      }

      .indicator--active {
        background-color: red;
        // background-color: rgb(220,230,236);
      }
    }
  }

  .search {
    display: flex;
    position: fixed;
    top: 20px;
    height: 30px;
    .van-search {
      background-color: transparent !important;
      flex: 1;
      .van-search__content {
        background-color: transparent !important;
        border: 1px solid rgb(83, 114, 216);
        .van-search__label {
          color: white;
        }
        .van-field {
          width: 234px;
          & /deep/ input {
            &::placeholder {
              color: white;
            }
          }
        }
      }
    }
    .applicaton {
      width: 30px;
      font-size: 25px;
      color: white;
    }
  }

  .nav {
    background-color: white;
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    padding: 10px 0;
    border-bottom: 1px solid rgb(242, 243, 249);
    .nav-item {
      width: 25%;
      flex: 1;
      min-width: 25%;
      max-width: 25%;
      margin-bottom: 10px;
      .nav-item__avatar {
        width: 100%;
        height: 36px;
        padding-top: 10px;
        img {
          display: block;
          width: 30px;
          height: 30px;
          margin: 0 auto;
        }
      }
      .nav-item__label {
        text-align: center;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }

  .news {
    margin-bottom: 10px;
    background-color: white;
    display: flex;
    width: 100%;
    height: 50px;
    // background-color: green;
    line-height: 50px;
    font-size: 14px;
    align-items: center;
    padding-left: 2px;
    img {
      width: 39px;
      height: 21px;
    }
    .gongshan {
      border: 1px solid rgb(61, 207, 255);
      line-height: 21px;
      font-size: 12px;
      color: rgb(61, 207, 255);
      padding: 0 2px;
    }
    .industry,
    .toutiao,
    .gongshan {
      margin-right: 2px;
    }
  }

  .bannerList {
    margin-bottom: 10px;
    height: 73px;
    background-color: white;
    width: 100%;
    .van-swipe-item {
      display: flex;
      justify-content: space-around;
      .bannerList-left {
        flex: 1;
        padding-left: 10px;
        .bannerList-left__title {
          font-size: 18px;
          line-height: 38px;
        }
      }
      .bannerList-right {
        img {
          width: 110px;
          height: 73px;
          display: block;
        }
      }
    }
  }

  .local {
    .local-head {
    margin-top:10px;
    // padding-bottom: 10px;
      height: 30px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      font-size: 14px;
      .left {
        position: relative;
        margin-left: 10px;
        & /deep/ .vertical-line {
          width: 4px;
          height: 30px;
          background-color: rgb(47, 155, 254);
          margin-right: 10px;
          position: absolute;
          height: 16px;
          top: 8px;
        }

        .local-title {
          font-size: 15px;
          margin-left: 16px;
          min-width: 80px;
        }
      }
    }

    .local-items-wraper {
        
        .local-item-wraper {
            background-color: white;
            padding-top: 10px;
            padding-left: 10px;
            display: flex;
            justify-content: space-around;
            margin-bottom: 10px;
            .local-item__avatar {
                display: block;
                width: 60px;
                height: 60px;
            }
            .local-item-right {
                flex: 1;
                margin-left: 10px;
                .local-item-top {
                    display: flex;
                    justify-content: space-between;
                    .local-item-body {
                        .local-item__title {
                            font-size: 15px;

                        }
                        .local-item-stars {
                            display: flex;
                            font-size: 12px;
                            margin:5px 0;
                           .van-rate {
                               margin-right: 5px;
                                .van-icon {
                                    font-size: 6px !important;
                                }
                            }
                            .local-item-stars__scores, .local-item-stars__turnover {
                                margin-right: 5px;
                            }
                        }
                        .local-item-tags {
                            .van-tag {
                                margin-right: 10px;
                                font-size: 13px;
                            }
                        }
                    }
                    .local-item-price {
                        width: 75px;
                    }
                }

                .local-item-footer {
                    height: 30px;
                    margin-top: 4px;
                    border-top: 1px solid rgb(243, 243, 243);
                    display: flex;
                    line-height: 30px;
                    align-items: center;
                    width: 98%;
                    .local-item-footer__avatar {
                        display: block;
                        width: 20px;
                        height: 20px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
  }
}
</style>