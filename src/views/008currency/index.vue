<template>
  <div class="main-container">
    <header-component :title="'金钱格式化和日期选择组件'"></header-component>
    <div class="curr-ctn">
      <!-- v-model 可以替换 :value 和 @input -->
      <!-- :value="now" @input="val=>value=val" ===== v-model="now" -->
      <date-picker v-model="now"></date-picker>
    </div>
  </div>
</template>

<script>
import DatePicker from '../../components/DatePicker'
/* eslint-disable */
export default {
  name: 'currency',
    components: {
    'date-picker': DatePicker
  },
  data() {
    return {
      now: new Date()
    }
  }
}
</script>

<style scoped>
.main-container {
  margin-top: 44px;
}
</style>
