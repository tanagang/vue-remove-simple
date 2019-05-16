import RemoveComponent from './Remove.vue'
const Remove = {
	install:function(Vue,options){
		if(options){
			let arr =  Object.keys(options)
			let arrText = Object.values(options)
			for(var i = 0;i < arr.length; i++){
				RemoveComponent.props[arr[i]].default = arrText[i]
			}
		}
		Vue.component('Remove',RemoveComponent)
	}
}
export default Remove