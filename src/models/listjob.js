const sql = require('mssql')
const dbConfig= {
    user: 'web',
    password: 'pvcb@123',
    database: '5_WEB',
    server:'TCKT-HO-C67E',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}
const listJob = {}

sql.connect(dbConfig)
.then(() =>{
    return sql.query `select * from [1_TEST] where CIF='10791600'`
})
.then(result => {
    var kq = result.recordset
    console.log(JSON.stringify(kq))
})
.catch(err=> {console.log(err)})

module.exports = listJob