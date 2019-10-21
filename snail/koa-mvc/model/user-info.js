const md5 = require('md5');
const { query } = require('../util/index.js')
//  注册
const insertData = function (val) {
    console.log(val);
    // 数据库
    let sql = "insert into user_info(name, password) value (?, ?)";
    // 哈希 输出固定长度的 不可逆的 同样的输入 同样的输出
    // zhaomeng17 -> 哈希算法 -> 84512654
    // 钩子函数 beforeEnetr
    return query(sql, [val.name, md5(val.password)]);
}
const queryByName = async(name) => {
    let sql = 'select * from user_info where name = ?'
    return query(sql, [ name ])
}
module.exports = {
    insertData,
    queryByName
}