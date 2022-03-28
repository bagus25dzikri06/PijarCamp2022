//Connection config
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_latihan_postgresql',
    password: 'P@ssw0rd123',
    port: 5432,
})

//Database connection
pool.connect((err) => {
    console.log(err ? err.message : 'PostgreSQL is connected')
})

module.exports = {
    pool
}