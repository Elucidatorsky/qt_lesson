// flexiable.js 移动端适配的库
// rem -> 根据 html font-size的大小
// 根据不同的屏幕大小去计算出不同的 html font-size
(function (win,doc) {
    const cal = function () {
        const w =doc.documentElement.clientWidth; // 取到根节点
        // 宽 375 的设备 
        doc.documentElement.style.fontSize = 100 * (w/375) + 'px';
        doc.body.style.fontSize = '16px';
    }
    cal();
})(window, document)