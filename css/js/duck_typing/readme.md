- js运行环境
    1. 浏览器宿主 frontend 前端
    2. 服务器端 backend 后端
-npm 包管理器 慢
    yarn 包管理器 facebook 快
    npm install -g live-server（包） 保存代码后自动刷新网页
    -g 全局安装
    yarn global add nodemon 保存代码后自动刷新node文件
    yarn global bin 安装包地址




- typeof 类型运算符
    typeof duck
    类型的字符串
    数值number，字符串String，布尔值boolean，空null，未定义undefined

    其他都是对象 object function []
    typeof func  "function"
    函数就是一个可以运行的对象 证明：函数.useage=1; 可以使用.XXX被赋值
    typeof []  "object"
    <!-- 考题：怎么判断一个数组真的是一个数组 -->
- 对象字面量 { key:val ....}
typeof obj  object
    js是动态语言 可以在定义完后再添加
    对象字面量 key val {} 创建对象很方便
    js 强表现力语言 UI 
- 数组
    对象 可以被遍历的对象
    .length
    .push()