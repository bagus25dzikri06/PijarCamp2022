const { pool } = require('./db')

const UsersModel = {
    list: (sortByField, sortByType) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM users ORDER BY ${sortByField} ${sortByType}`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
            })
        })
    },
    listById: (id) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
            })
        })
    }, 
    add: (id, username, phone_number) => {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO users (id, username, phone_number) VALUES ($1, $2, $3)', 
            [id, username, phone_number], 
            (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(`User added with ID: ${id}`)
            })
        })
    },
    update: (username, phone_number, id) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE users SET username = $1, phone_number = $2 WHERE id = $3', 
            [username, phone_number, id], 
            (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(`User modified with ID: ${id}`)
            })
        })
    }, 
    remove: (id) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM users WHERE id = $1', [id], 
            (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(`User deleted with ID: ${id}`)
            })
        })
    }
}

module.exports = {
    UsersModel
}