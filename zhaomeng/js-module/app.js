requirejs.config({
    paths: {
        jq: './jq',
        swiper: './swiper'
    }
})
// 引入
// require(['jq'], (jq) => {
//     document.getElementById('btn').addEventListener('click', ()=> {
//         // 点击再引入swiper
//         require(['swiper']), (swiper) => {
//             console.log(1);
//         }
//     })
// })
require(['./seaMain.js'], (seaMain) => {
    
})