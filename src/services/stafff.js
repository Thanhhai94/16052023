const sql = require('mssql')
const dbConfig = require('../config/db')

exports.getAll = (callback, Manv) => {
    sql.connect(dbConfig)
    .then(() =>{
        return sql.query `select * from [TEST] where MaNv=${Manv}`
    })
    .then(result => {
        callback(result.recordset)
    })
    .catch(err=> {console.log(err)})
}


