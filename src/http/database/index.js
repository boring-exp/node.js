const mysql2 = require('mysql2/promise')
// 连接上数据库
async function queryAll() {
    const mysqlIns = await mysql2.createConnection({host:'127.0.0.1', user: 'root', database: 'user', password: '123456', port: 3306});
    const [rows] = await mysqlIns.execute(`SELECT * FROM user_info LIMIT 100;`)
    return rows
}

module.exports = {
    queryAll
}

// 查询数据库