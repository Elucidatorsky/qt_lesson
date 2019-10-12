export class Store {
    constructor(options,Vue) {
      console.log('constructor options',options);
      // 让this.$store 
      // 找到.state
      this.options = options
      this.getters = {}
      // 扩展vue
      // new Vue({
      //   store
      // })
      Vue.mixin({
        beforeCreate: vuexInit
      })
      forEachValue(options.getters, (getterFn, getterName) => {
        console.log('minxin forEachValue getterFn getterName', getterFn, getterName)
        registerGetter(this, getterName, getterFn);
      })
    }
    // this.$store.state.count 
    // 在获取的同时还可以做其他的事情
    get state() {
      console.log('get state() get 获取属性')
      return this.options.state;
    }
    set state(val) {
        throw new Error('set state() 不可以直接修改属性，请通过mutations')
    }
  }
  
  
  function vuexInit () {
    console.log('实例化之前ε＝ε＝ε＝(#>д<)ﾉ');
    const options = this.$options; // vue中有options 将 options 赋值一遍
    console.log('vuexInit this this.$options',this, this.$options);
    if (options.store) { // 已有
      // this指向vue
      this.$store = typeof options.store === 
      'function' ? options.store():options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
  
  function forEachValue(obj, fn) {
    console.log('外部ForEachValue传入参数', obj, fn)
    console.log('外部forEachValue Object.keys(obj)', Object.keys(obj))
    Object.keys(obj).forEach(key => fn(obj[key], key))
        //   遍历以下函数
        //   {
        //       key: function () {}
        //       key: function () {}
        //   }
        //   obj 所有的方法遍历一下， fn(name, func())
  }

  function registerGetter(store, getterName, getterFn) {
    //   做 this.$store.getters.getterName
    Object.defineProperty(store.getters, getterName, {
        get : () => {
            console.log(getterFn, '----get : () => {}-getterFn----')
            return getterFn(store.state)
        }
    })
  }