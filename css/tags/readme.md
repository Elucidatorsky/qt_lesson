css 烦 浪费时间？
{
    key:value;
}
css 编译 stylus
- stylus 是css预编译
    用 stylus 语法写css快很多，其他一些高级功能
    写的是.styl 文件，浏览器要的是css stylus 
    通过common.styl -o common.css生成

stylus xxx.styl -o(即output) xxx.css
stylus -w xxx.styl -o xxx.css

- 界面第一步是写结构，最重要的
    1. 脱离分析标签标明的低级趣味
    2. 盒子 由外到内
    main.container>ul.tag-list>li.item>div.tag>.info-box+.actin-box
    3. 写结构 不要去管css
    4. 语义化，用合适的标签