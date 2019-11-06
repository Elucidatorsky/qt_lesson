export default {
    data(){
        return{
            num: 1,
        }
    },
    created(){
        console.log('我是全局混入的mixin1')
    }
}