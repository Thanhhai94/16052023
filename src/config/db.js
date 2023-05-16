const dbConfig= {
    user: 'sa',
    password: '123456789',
    database: 'Pv_test',
    server:'localhost',
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

module.exports = dbConfig