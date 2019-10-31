let proto = {}

function defineGetter(prop, name) { // 参数分别是代理的对象和对象上的属性
    // a.b.c 取值 -> a.c 取值
    proto.__defineGetter__(name, function() { // 每个对象都有一个__definGetter__方法，用这个方法实现代理
        // console.log('Gval', val);
        // console.log('Gproto',[proto],proto);
        // console.log('Gname',[name],name);
        return this[prop][name] // this ===> ctx 所有ctx.url得到的就是this.request.url
    })
}

function defineSetter(prop, name) {
    proto.__defineSetter__(name, function(val) {
        console.log('Sval', val);
        console.log('Sprop',[prop],prop);
        console.log('Sname',[name],name);
        this[prop][name] = val
    })
}

defineGetter('request', 'url')
defineGetter('request','path')

defineGetter('response', 'body')  // ctx.body 代理response的body属性 response.body -> body
defineSetter('response', 'body')


module.exports = proto;

