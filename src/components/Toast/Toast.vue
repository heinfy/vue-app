<template>
  <div :class="{ toast: status }">{{ text }}</div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      status: false,
      text: ''
    }
  }
}
</script>

<style>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  font-size: 14px;
  min-width: 160px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 9999;
  white-space: nowrap;
  animation: fadeoutFrame 3s ease;
}
@keyframes fadeoutFrame {
  0% {
    height: 0px;
  }
  5% {
    height: 40px;
  }
  95% {
    height: 40px;
  }
  100% {
    height: 0px;
  }
}
</style>
