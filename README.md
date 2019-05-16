基于vue开箱即用的全局左滑删除（包含长按事件）的回调
### 使用方法
```javascript
首先在项目中安装：npm install vue-remove-simple -S
//main.js
import Remove from 'vue-remove-simple'
Vue.use(Remove)
//支持设置删除按钮的{background:''，btn:''，color:''}如果需要第二个按钮，可以设置{btnTwo:'XXX',backgroundTwo:''，btnTwo:''，colorTwo:''}
Vue.use(Remove,{......})

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
***
github链接
[链接名称](https://github.com/tanagang/vue-remove-simple)
