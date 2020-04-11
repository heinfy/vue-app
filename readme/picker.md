```html
<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
<!-- 组件传值slots 当选中的值发生变化时触发change事件,change事件有2个参数,
第一个为当前picker的vue实例,
第二个为各slot选中的值组成的数组 -->
```



change事件中，可以使用注册到`picker`实例上的一些方法：

- getSlotValue(index)：获取给定slot目前选中的值
- setSlotValue(index, value)：设定给定slot被选中的值，该值必须存在于该slot的备选值数组中
- getSlotValues(index)：获取给定slot的备选数组
- getSlotValue(index, values)：设定给定slot的备选值数组
- setValues(values)：设定所有slot被选中的值（分隔符 slot 除外），该值必须存在于对衣服呢slot的备选数组中

| key          | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| divider      | 对应slot是否为分隔符                                         |
| content      | 分隔符显示的文本                                             |
| values       | 对应slot的备选值数组。若为对象数组，则需要在 mt-picker 标签上设置value-key属性来制定显示的字段名 |
| defaultIndex | 对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0 |
| textAlign    | 对应 slot 的对齐方式                                         |
| flex         | 对应 slot CSS 的 flex 值                                     |
| className    | 对应 slot 的类名                                             |



API

| 参数             | 说明                                                       | 类型    | 默认值 |
| ---------------- | ---------------------------------------------------------- | ------- | ------ |
| slots            | slot 对象数组                                              | Array   | []     |
| valueKey         | 当 values 为对象数组时，作为文本显示在 Picker 中的对String | String  | ''     |
| showToolbar      | 是否在组件顶部显示一个 toolbar，内容自定义                 | Boolean | false  |
| visibleItemCount | slot 中可见备选值的个数                                    | Number  | 5      |
| itemHeight       | 每个 slot 的高度                                           | Number  | 36     |



## 地点三级联动

**template**

```html
<mt-picker :slots="slots" value-key="name" @change="onValuesChange"></mt-picker>
```

**script**

```javascript
import myaddress from '@/assets/json/pca-code.json'
export default {
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: myaddress,
          defaultIndex: 0,
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: myaddress[0].children,
          defaultIndex: 0,
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot4'
        }, {
          flex: 1,
          values: myaddress[0].children[0].children,
          defaultIndex: 0,
          className: 'slot5',
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    onValuesChange(picker, values) {
      // console.log(values)
      if (!values[0]) {
        // 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放在Vue.nextTick()的回调中
        // $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
        this.$nextTick(() => {
          if (this.myAdress) {
            // 赋默认值
          } else {
            picker.setValues([myaddress[0], myaddress[0].children[0], myaddress[0].children[0].children[0]])
          }
        })
      } else {
        // 1 表示索引，表示每一列数据
        picker.setSlotValues(1, values[0].children)
        let town = []
        if (values[1]) {
          town = values[1].children
        }
        picker.setSlotValues(2, town)
      }
    } 
  }
}

```

