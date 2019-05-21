基于vue开箱即用的全局左滑删除（包含长按事件）的回调  
下图gif可能有卡顿，[图片原地址](https://file.40017.cn/tcyp/tz/remove.gif)  

![](https://file.40017.cn/tcyp/tz/remove.gif)

### 使用方法
```javascript
首先在项目中安装：npm install vue-remove-simple -S
//main.js
import Remove from 'vue-remove-simple'
Vue.use(Remove)

<template>
    <!@longpress长按事件和@callback删除事件，@nextEvent是第二个按钮的回调函数（如果存在第二个按钮的话）-->
    <remove @longpress="longpress(num)" @callback="remove(1)" @nextEvent="next">
        <div>
            我是数据1
        </div>
    </remove>
    <remove  @longpress="longpress" @callback="remove(2)" @nextEvent="next">
        <div>
            我是数据2
        </div>
    </remove>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        remove(num){
            alert('您点击了删除第'+num+'行')
        },
        next(num){
            alert('您点击了第'+num+'个按钮')
        },
        longpress(num){
            alert("长按了"+num)
        }
    }
}
</script>
```

### 操作按钮的style参数
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| btn | 删除 | `String` | 第一个按钮 |
| color | #fff | `String` | 删除按钮的颜色 |
| background | red | `String` | 删除按钮的背景色 |
| nextBtn | none | `String` | 如果需要第二个按钮（比如上图的标记已读），不填写默认不生成第二个按钮 |
| nextColor | #fff | `String` | 第二个按钮的颜色 |
| nextBackground | #ccc | `String` | 第二个按钮的背景色 |

### 操作按钮的回调函数
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| callback | none | `Function` | 删除按钮的回调 |
| nextCallback | none | `Function` | 第二个按钮的回调 |
| longpress | none | `Function` | 支持长按内容区域的回调 |

### 也可以在main.js中统一设置
支持设置删除按钮的{background:''，btn:''，color:''}如果需要第二个按钮，可以设置{nextBtn:'XXX',nextBackground:''，nextTwo:''}  

Vue.use(Remove,{......})

***
github链接
[链接名称](https://github.com/tanagang/vue-remove-simple)
