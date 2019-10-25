## XSS
cross site script 跨站脚本攻击
用不合法的途径网 web 页面里面插入可执行的代码
攻击类型：
    1. 反射型
        XSS 代码存在 url 中，服务器解析请求，把XSS的代码一并返回，
        web网页得到响应，执行XSS代码，过程像一次反射一下一样
    2. 存储型
        唯一区别 xss的代码 有没有永久保留着 服务器 （数据库，文件...）中

## 防护
编码 html entity 编码, < 即 "&lt;" 
<script>alter(1)</script>
过滤 onError 属性 onClick <script>XX</script>
校正