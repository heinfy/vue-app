<template>
  <div class="lgt-loading">
    <span class="lgt-loading-spinners" :style="style">
      <i class="lgt-loading-spinner" v-for="(item, index) in balde" :key="index"></i>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'lgt-loading',
    data() {
      return {
        balde: 12
      }
    },
    props: {
      size: {
        type: Number
      }
    },
    computed: {
      style() {
        if (!this.size) return
        const value = `${this.size}px`
        return {
          width: value,
          height: value
        }
      }
    }
  }
</script>

<style lang="less">
.rotate(@n , @i:1) when (@i <= @n) {
  &:nth-child(@{i}) {
    animation-delay: (@i - 1)/12s;
    transform: rotate(30deg * (@i - 6)) translateY(-150%);
  }
  .rotate(@n, (@i + 1));
}

.lgt-loading {
  font-size: 40px;
}

.lgt-loading-spinners {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
}

.lgt-loading-spinner {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 3px;
  height: 25%;
  border-radius: 50% / 20%;
  opacity: 0.25;
  background-color: rgba(0, 0, 0, 0.7);
  animation: spinner-fade 1s linear infinite;
  .rotate(12);
}

@-webkit-keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-moz-keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-ms-keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@-o-keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
@keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}

</style>
