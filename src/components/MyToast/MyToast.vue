<template>
  <transition name="el-message-fade">
    <div v-show="visible" class="my-msg">{{ message.name }}</div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: '', // 需要提示用户的内容
      visible: true // 线上与隐藏
    }
  },
  methods: {
    close() {
      setTimeout(() => {
        this.$emit('results', 'test') // 自定义方法
        this.visible = false // 隐藏元素
        this.$el.remove() // 移除DOM
      }, 1000)
    }
  },
  mounted() {
    this.close()
  }
}
</script>

<style lang="less">
.my-msg {
  position: fixed;
  top: 100px;
  left: 50%;
  z-index: 1000;
  transform: translateX(-50%);
  width: 100px;
  height: 30px;
  line-height: 30px;
  background-color: pink;
  color: #000;
  text-align: center;
}
</style>
