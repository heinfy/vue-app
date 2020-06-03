<template>
  <div class="main-container">
    <header-component :title="'swiper组件'"></header-component>
    <ul class="sub-mag">
      <li data-type="0" class="list-subItem">
        <div
          class="subMain_info"
          @touchstart.capture="subTouchStart($event, 0)"
          @touchend.capture="subTouchEnd($event, 0)"
        >
          <img class="sw_icon" src="../../assets/images/swiper/xigua.png" />
          <span class="sw_subtitle">将进酒·君不见黄河之水天上来</span>
          <span class="sw_briefinfo">消息内容：君不见黄河之水天上来，奔流到海不复回。</span>
          <span class="sw_ctime">19-01-06</span>
        </div>
        <div class="hidden sub_edit" @click="subEditItem()">编辑</div>
        <div class="hidden sub_del" @click="subDeleteItem()">删除</div>
      </li>
      <li data-type="0" class="list-subItem">
        <div
          class="subMain_info"
          @touchstart.capture="subTouchStart($event, 1)"
          @touchend.capture="subTouchEnd($event, 1)"
        >
          <img class="sw_icon" src="../../assets/images/swiper/juzi.png" />
          <span class="sw_subtitle">梦游天姥吟留别</span>
          <span class="sw_briefinfo">消息内容：海客谈瀛洲，烟涛微茫信难求。</span>
          <span class="sw_ctime">19-01-07</span>
        </div>
        <div class="hidden sub_edit" @click="subEditItem()">编辑</div>
        <div class="hidden sub_del" @click="subDeleteItem()">删除</div>
      </li>
      <li data-type="0" class="list-subItem">
        <div
          class="subMain_info"
          @touchstart.capture="subTouchStart($event, 2)"
          @touchend.capture="subTouchEnd($event, 2)"
        >
          <img class="sw_icon" src="../../assets/images/swiper/tudou.png" />
          <span class="sw_subtitle">行路难 其一</span>
          <span class="sw_briefinfo">消息内容：金樽清酒斗十千，玉盘珍羞直万钱。停杯投箸不能食，拔剑四顾心茫然。</span>
          <span class="sw_ctime">19-01-07</span>
        </div>
        <div class="hidden sub_edit" @click="subEditItem()">编辑</div>
        <div class="hidden sub_del" @click="subDeleteItem()">删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  /* eslint-disable */ 
  name: 'swiper',
  data() {
    return {
      // 记录上一次滑动的li
      subLastIndex: NaN,
      // 滑动开始
      subStartX: 0,
      // 滑动结束
      subEndX: 0
    }
  },
  methods: {
    // 滑动开始
    subTouchStart(e, index) {
      // 记录初始位置
      this.subStartX = e.touches[0].clientX
      // console.log(this.subStartX)
    },
    // 滑动结束
    subTouchEnd(e, index) {
      // 当前滑动的父级元素
      let parentElement = e.currentTarget.parentElement
      // 记录结束位置
      this.subEndX = e.changedTouches[0].clientX
      // console.log(this.subEndX)
      // 左滑
      if(parentElement.dataset.type === '0' && this.subStartX - this.subEndX > 30) {
        this.restSlide(this.subLastIndex)
        parentElement.dataset.type = '1'
      }
      // 右滑
      if(parentElement.dataset.type === '1' && this.subStartX - this.subEndX < -30) {
        this.restSlide(this.subLastIndex)
        parentElement.dataset.type = '0'
      }
      this.subStartX = 0
      this.subEndX = 0
      this.subLastIndex = index
    },
    // 复位滑动状态
    restSlide(index) {
      let isNaN = Number.isNaN(index)
      if(isNaN) {
        return false
      } else {
        let listItems = document.querySelectorAll('.list-subItem')[index]
        listItems.dataset.type = 0
      }
    },
    /**
     * 在实际开发中，每一条li肯定对应着唯一的id或者是其他的编码，在编辑 以及 删除 中，需要传入编码来进行操作
     */
    // 编辑
    subEditItem(id) {
      // your code ...
      console.log('编辑')
      // 复位
      this.restSlide(this.subLastIndex)
    },
    // 删除
    subDeleteItem(id) {
      // your code ...
      console.log('删除')
      // 复位
      this.restSlide(this.subLastIndex)
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: 44px;
}

/* 消息列表 */
.sub-mag {
  width: 375px;
  height: 623px;
  overflow: hidden;
  overflow-y: scroll;
}

.sub-mag li {
  width: 375px;
  height: 60px;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  background-color: #ffffff;
}

.sub-mag li[data-type='0'] {
  transform: translate3d(0, 0, 0);
}

.sub-mag li[data-type='1'] {
  transform: translate3d(-120px, 0, 0);
}

.sub-mag li .subMain_info {
  position: relative;
}

.sub-mag li .subMain_info .sw_icon {
  width: 60px;
  height: 60px;
  padding: 5px;
  display: block;
  position: absolute;
  left: 8px;
  top: 0px;
}

.sub-mag li .subMain_info .sw_subtitle {
  font-size: 14px;
  text-overflow: ellipsis; /* 变成点点点 */
  overflow: hidden; /* 超出部分隐藏 */
  white-space: nowrap; /* 不换行 */
  color: #333333;
  position: absolute;
  left: 70px;
  top: 8px;
}

.sub-mag li .subMain_info .sw_briefinfo {
  width: 300px;
  font-size: 14px;
  color: #666666;
  letter-spacing: 1px;
  text-overflow: ellipsis; /* 变成点点点 */
  overflow: hidden; /* 超出部分隐藏 */
  white-space: nowrap; /* 不换行 */
  position: absolute;
  left: 70px;
  top: 30px;
}

.sub-mag li .subMain_info .sw_ctime {
  font-size: 12px;
  color: #666666;
  letter-spacing: 0.01rem;
  position: absolute;
  right: 12px;
  top: 9px;
}

.sub-mag li .hidden {
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 0;
}

.sub-mag li .sub_edit {
  background: #ff4949;
  right: -60px;
}

.sub-mag li .sub_del {
  background: #cccccc;
  right: -120px;
}

</style>
