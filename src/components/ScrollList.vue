<template>
  <swiper :options="swiperOption" class="swiper-container swiper-no-swiping">
    <swiper-slide class="swiper-item" v-for="item of info" :key="item.id">
      <div class="text">刚刚 尾号{{item.mobile}}({{item.name}}) 下单{{ Math.trunc(item.award.reach_num)}}课时 <span>优惠{{Math.trunc(item.award.reduction_num)}}元</span> </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// swiper 插件
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperComponent',
  data() {
    return {
      info: [
        {
          "mobile": "1423",
          "name": "卢*宁",
          "phone": "137****1423",
          "time": 3,
          "award": {
            "title": "6月屯课优惠券-活动使用1",
            "reduction_num": "2000.00",
            "reach_num": "240.00"
          }
        },
        {
          "mobile": "5781",
          "name": "徐*稀",
          "phone": "181****5781",
          "time": 4,
          "award": {
            "title": "6月屯课优惠券-活动使用3",
            "reduction_num": "1000.00",
            "reach_num": "160.00"
          }
        },
        {
          "mobile": "6072",
          "name": "孙*伟",
          "phone": "159****6072",
          "time": 6,
          "award": {
            "title": "6月屯课优惠券-活动使用4",
            "reduction_num": "500.00",
            "reach_num": "120.00"
          }
        },
        {
          "mobile": "2734",
          "name": "测*",
          "phone": "170****2734",
          "time": 9,
          "award": {
            "title": "6月屯课优惠券-活动使用4",
            "reduction_num": "500.00",
            "reach_num": "120.00"
          }
        },
      ],
      swiperOption: {
        direction: 'vertical', // 参数选项,显示小点
        loop: true, //循环
        autoplay: { //每张播放时长3秒，自动播放
          delay: 1000
        },
        spaceBetween: 5,
        speed: 1000, //滑动速度
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  padding: 0 20px;
  height: 32px;
  line-height: 32px;
  .swiper-item {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
  }
  .swiper-wrapper {
    height: 32px;
    display: inline-block;
  }
  .text {
    font-size: 14px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    span {
      color: #fe3e60;
    }
  }
}
</style>
