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
exports.module = dbConfig
