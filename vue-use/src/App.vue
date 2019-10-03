<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <el-button type="primary">button</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AVue from '@/Avue.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    this.$message('请确定支付,有风险')
    // const av = new AVue({
    //   methods: {
    //     say () {
    //       this.$alert()
    //     }
    //   },
    // })
    // av.say()
    this.$Aalert()
  },
  created () {
    console.log(1)
    class SingleDog {
      static getInstance () {
        if (!SingleDog.instance) {
          SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
      }
      show () {
        console.log('嘿嘿额')
      }
    }
    
  // 实例化两次
  const s1 = new SingleDog.getInstance();
  const s2 = new SingleDog.getInstance();
  console.log(s1 == s2)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>