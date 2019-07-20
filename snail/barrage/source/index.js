let data=[
    {value:'大爱绫波',time:5,color:'red',speed:1,fontsize:22},//time隔多少秒开始出现
    {value: '阿伟又死了', time: 10, color: '#00a1f5', speed: 1, fontSize: 30},
    {value: 'awsl', time: 6},     
    {value: 'awsl', time: 8},
    {value: 'awsl', time: 15},
    {value: 'awsl', time: 35},
    {value: 'awsl', time: 20},
    {value: 'awsl', time: 18},
    {value: 'awsl', time: 10}
]

//获取需要用到的所有dom结构
let doc=document
let canvas=doc.getElementById('canvas');
let video=doc.getElementById('video');
let $txt=doc.getElementById('text');
let $btn=doc.getElementById('btn');
let $color=doc.getElementById('color');
let $range=doc.getElementById('range');

//创建CanvasBarrage类
class CanvasBarrage{
    //constructor是一种用于创建和初始化class类创建的对象的特殊方法
    constructor(canvas, video, opts = {}) {//opts={} 为了提高代码的容错性(可传参可不传，不报错【】)
        //不存在则直接结束
        if (!canvas || !video) return;
        console.log(this);
        //直接挂载到this
        this.video=video;
        this.canvas=canvas;
        //设置canvas的宽高和video一致
        this.canvas.width=video.width;
        this.canvas.height=video.height;
        //获取画布，操作画布
        this.ctx=canvas.getContext('2d');

        //设置默认参数
        let defOpts={
            color:'#e91e63',
            speed:1.5,
            opacity:0.5,
            fontSize:20,
            data:[]
        }
        //合并对象,有传入则覆盖 opts合到defOpts上再合到this上
        Object.assign(this, defOpts, opts);
        //添加一个属性来判断当前是播放状态还是暂停状态
        this.isPaused=true;//默认暂停：true
        //获取用户输入信息 map遍历方法
        this.barrages = this.data.map(item => new Barrage(item, this));//每一条item都执行Barrage(弹幕)方法
        //渲染render(致使，提供，回报)
        this.render();
        console.log(this);
    }

    //渲染canvas绘制的弹幕
    render(){
        //清空画板
        this.clear();
        //渲染弹幕
        this.renderBarrage();
        //未暂停则继续渲染
        if (this.isPaused===false) {//全等，==类型不同也可等，===完全相同
            //通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this))//拿来渲染动画的方法（自带） 
            //bind(结合，绑，约束)方法，修改作用域的对象
            //将函数绑定到某个对象，bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()第一个参数的值
            //例如，f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj

        }
    }
        
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);//清除
    }
    renderBarrage(){
        //获取当前视频播放时间匹配弹幕发送时间
        let time = this.video.currentTime;

        // 遍历所有的弹幕 barrages是数组
        this.barrages.forEach(barrage => {
            //用flag判断是否渲染
            if(!barrage.flag&&time>=barrage.time){
                //判断当前弹幕是否初始化，若isInit后仍然false，则对其初始化
                if(!barrage.isInit){
                    barrage.init();
                    barrage.isInit=true;
                }
                // 要从右往左渲染，所有X的坐标减去当前弹幕的speed即可
                barrage.x-=barrage.speed;
                barrage.render();//渲染当前弹幕

                //如果当前弹幕x坐标绝对值比自身的宽度还小，就表示结束渲染
                if(barrage.x<-barrage.width){
                    barrage.flag=true;
                }
            }
        });
    }
    add (obj){
        //实际上就是往数组里面添加一项Barrage的实力而已
        this.barrages.push(new Barrage(obj,this));//obj弹幕
    }
}

//创建Barrage类，用来实例化每一个弹幕元素
class Barrage {
    constructor(obj,ctx){
        this.value=obj.value;//弹幕的内容
        this.time=obj.time;//弹幕的时间
        //把obj和ctx都挂载到this上。方便获取
        this.obj=obj;
        this.context=ctx;
    }
    //初始化弹幕
    init(){
        //如果数据未涉及到下列四种参数，则取默认参数
        this.color=this.obj.color||this.context.color;//context默认颜色
        this.speed=this.obj.speed||this.context.speed;
        this.opacity=this.obj.opacity||this.context.opacity;
        this.fontSize=this.obj.fontSize||this.context.fontSize;

        //用p标签计算文字宽度来计算每一个弹幕的宽度，
        let p=document.createElement('p');
        p.style.fontSize=this.fontSize+'px';
        p.innerHTML=this.value;//用户输入值
        document.body.appendChild(p);

        //设置弹幕的宽度
        this.width=p.clientWidth;
        //得到弹幕的宽度后，把p从body中删除
        document.body.removeChild(p);

        //设置弹幕出现的位置(随机)
        this.x=this.context.canvas.width;
        this.y=this.context.canvas.height*Math.random();
        //做一下超出范围的处理
        if(this.y<this.fontSize){
            this.y=this.fontSize;
        }else if(this.y>this.context.canvas.height-this.fontSize){
            this.y=this.context.canvas.height-this.fontSize;
        }
    }
    //渲染每一个弹幕
    render(){
        //设置画布文字的字体和字号
        this.context.ctx.font=`${this.fontSize}px Arial`;
        //设置画布颜色
        this.context.ctx.fillStyle=this.color;
        //绘制文字
        this.context.ctx.fillText(this.value,this.x,this.y);
    }
}
//创建CanvasBarrage实例
let canvasBarrage=new CanvasBarrage(canvas,video,{data});
//设置video的play事件来调用CanvasBarrage实例render方法
video.addEventListener('play',()=>{
    canvasBarrage.isPaused=false;
    canvasBarrage.render();//触发弹幕
})
//发送弹幕的方法
function send(){
    let value= $txt.value;//获取input框里的值
    let time=video.currentTime;
    let color=$color.value;
    let fontSize=$range.value;
    let obj={value,time,color,fontSize}
    //添加弹幕数据
    canvasBarrage.add(obj);
    $txt.value='';//输完清空
}

$btn.addEventListener('click',send);