const bcrypt = require('bcrypt');
const { pool } = require('../config/db');

const UsersModel = {
    isUserExists: (email) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
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
    },
    getPassword: (password) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM users WHERE password = $1', [password], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results)
            })
        })
    },
    insertUser: (name, email, phone_number, password, level) => {
        return new Promise((resolve, reject) => {
            const saltRounds = 10
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    reject(err.message);
                }
                
                pool.query(
                    'INSERT INTO Users (name, email, phone_number, password, level) VALUES ($1, $2, $3, $4, $5)',
                    [name, email, phone_number, hash, level],
                    (error, results) => {
                        if (error) {
                            reject(error);
                        }
                        resolve(`User is added successfully`);
                    }
                )
            })
        })
    },
    updateUser: (email, phone_number, id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                'UPDATE users SET email = $1, phone_number = $2, WHERE id = $3',
                [email, phone_number, password, id],
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(`Email edited for user with ID ${id}`);
                }
            )
        })
    },
    updatePassword: (password, id) => {
        return new Promise((resolve, reject) => {
            pool.query(
                'UPDATE users SET password = $1 WHERE id = $3',
                [password, id],
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(`Password edited for user with ID ${id}`);
                }
            )
        })
    },
    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`User is successfully deleted`);
            })
        })
    },
    activateUser: (name) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE users SET is_active = TRUE WHERE name = $1', [name], (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`User is successfully activated`);
            })
        })
    },
    deactivateUser: (name) => {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE users SET is_active = FALSE WHERE name = $1', [name], (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`User is successfully deactivated`);
            })
        })
    }
}

module.exports = {
    UsersModel,
}