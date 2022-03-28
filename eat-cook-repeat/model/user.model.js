const { pool } = require('../db')

const UsersModel = {
    isUserExists: (email) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rowCount > 0)
            })
        })
    },
    getUser: (email) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
            })
        })
    }
}

module.exports = {
    UsersModel,
}