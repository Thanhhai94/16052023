// const sql = require('mssql')
// const dbConfig= {
//     user: 'sa',
//     password: '123456789',
//     database: 'Pv_test',
//     server:'localhost',
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     },
//     options: {
//         encrypt: true,
//         trustServerCertificate: true
//     }
// }

function STAFF(newstaff) {
    this.name = newstaff.Name

    this.setStaff = function(newStaff) {
        return this.name = newStaff.Name
    }
}

var CIF ='111'
var staff = new STAFF('')
// sql.connect(dbConfig)
// .then(() =>{
//     return sql.query `select * from [TEST] where MaNV=${CIF}`
// })
// .then(result => {
    
// })
// .catch(err=> {console.log(err)})

console.log("staff",staff)

module.exports = staff