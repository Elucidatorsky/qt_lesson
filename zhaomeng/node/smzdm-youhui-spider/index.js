const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');//读写文件模块
const path = require('path');// 模块 把Url拆开
// GET POST
// http.createServer(())
https.get('https://www.smzdm.com/youhui/',function(res) {
    console.log(res)
    res.setEncoding('utf-8');
    let html = '';
    res.on('data',function(chunk) {
        html += chunk
    })
    res.on('end',function(chunk) {
        // console.log(html);
        const $ = cheerio.load(html,{
            decodeEntities: false//不对entity进行解析
        })
        // 只有一个参数 整个 document
        let lists = []; 
        $('.list.list_preferential').each(function() {//选中网页里的div 里面的每一项
            const _this = this;//指上行each的数据
            // document.querySelector('.itemName a');
            // $('.list').queryselector('.itemName a');
            let title = $('.itemName a', _this).text();
            const price = $('.red', _this).text();
            const img = $('.picLeft img', _this).attr('src');
            lists.push({
                title: title,
                price,
                img
            })
            saveImage('./img/',img);
            // console.log({
            //     title: title,
            //     price,
            //     img
            // });
        })
        saveList('./data/lists.json', lists)
    });
})

function saveImage(imgDir, imgUrl){
    https.get(imgUrl ,(res) => {
        res.setEncoding('binary');
        var data = '';
        // const imgName = path.basename(imgUrl);
        // res.pipe(
        //     fs.createWriteStream(imgDir + imgName)
        // )

        res.on('data', (chunk) => {
            data += chunk;
        })
        res.on('end', function() {
            // 文件名保持一致 eg: www.smzdm.com/a.png
            const imgName = path.basename(imgUrl);
            fs.writeFile(imgDir + imgName, data, 'binary',
             (err) => {
                if (!err){
                    console.log('img saved');
                }
            })//imgDir图片目录
        })
    })
}
// 存储数据
function saveList(path, list) {
    fs.writeFile(path, JSON.stringify(list),
    (err) => {
        if (!err){
            console.log('lists saved');
        }
    }
    
    )//写到path，写入JSON
}

