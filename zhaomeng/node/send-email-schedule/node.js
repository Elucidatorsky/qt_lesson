const nodeMailer = require('nodemailer');
const fs = require('fs');
const juice = require('juice');
const ejs = require('ejs');

const transporter = nodeMailer.createTransport({
    service: 'qq',
    port: 465, // 协议默认端口 smtp
    secureConnection: true,
    auth:{
        user: '1424254461@qq.com',
        pass: 'xwbqyldxszogjicd'
    }
});
// const html = fs.readFileSync('./template/index.html'); //拿到HTML内容
const html = fs.readFileSync('./template/index.ejs','utf8');
const template = ejs.compile(html);
const afterHtml = template({
    userName: 'userName'
})
// const afterWithInCss = juice(html);
const css = fs.readFileSync('./template/index.css','utf8');//可以调用link
// const afterWithInCss = juice(afterHtml);//只能使用内部的style
const afterWithInCss = juice.inlineContent(afterHtml, css);
transporter.sendMail({
    to: '467845371@qq.com',
    // html: `<h1>内容标题</h1>`,
    html: afterWithInCss,
    from: '1424254461@qq.com',
    subject: '绫波绫波'
},(err, info) => {
    if(err){     
        console.log('邮件出错了',err);
    }
})