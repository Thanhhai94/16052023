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


exports.home = (req,res,next) => {
    res.render('home', {
        pageTitle: 'Trang chủ'
    })
    sql.connect(dbConfig).then(() =>{
        return sql.query `select * from [1_STAFF] where CIF='10791600'`
    })
    .then(result => console.log(JSON.stringify(result.recordset)))
    .catch(err=> {console.log(err)})
};