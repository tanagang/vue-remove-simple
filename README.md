基于vue开箱即用的全局左滑删除（包含长按事件）的回调
### 使用方法
```js
    首先安装：npm install vue-remove-simple -S
    //main.js
    import Remove from 'vue-remove-simple'
    Vue.use(Remove)
    //支持设置删除按钮的{background:''，btn:''，color:''}如果需要第二个按钮，可以设置{btnTwo:'XXX',backgroundTwo:''，btnTwo:''，colorTwo:''}
    Vue.use(Remove,{......})
    //template
    <template>
        <!--params可以是任意值，都会在@longpress和@callback当做回调参数，@nextEvent是第二个按钮的回调函数（如果存在第二个按钮的话）-->
        <remove :params="obj" @longpress="longpress" @callback="remove" @nextEvent="next">
			<div>
				我是数据1
			</div>
		</remove>
    </template>
    <script>
    export default {
         data() {
            return {
                obj:{
                    id:1
                }
            }
        },
        methods:{
            remove(num){
                alert('您点击了删除')
            },
            next(){
                alert('您点击了第二按钮')
            },
            longpress(num){
                alert("长按")
            }
        },
    }
    </script>
```
***
github链接
[链接名称](https://github.com/tanagang/vue-remove-simple)
