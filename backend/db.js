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

const UsersModel = {
    list: () => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM users', (error, results) => {
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

const UsersController = {
    selectAll: (req, res) => {
        UsersModel.list().then((result) => {
            res.json(result.rows)
        }).catch((err) => {
            res.json(err)
        })
    },
    selectById: (req, res) => {
        const id = req.params.id
        UsersModel.listById(id).then((result) => {
            res.json(result.rows)
        }).catch((err) => {
            res.json(err)
        })
    }, 
    insert: (req, res) => {
        const id = req.body.id, 
        username = req.body.username, 
        phone_number = req.body.phone_number

        UsersModel.add(id, username, phone_number).then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        })
    },
    update: (req, res) => {
        const id = req.params.id, 
        username = req.body.username, 
        phone_number = req.body.phone_number

        UsersModel.update(username, phone_number, id).then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        })
    },
    removeById: (req, res) => {
        const id = req.params.id

        UsersModel.remove(id).then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        })
    }
}

module.exports = {
  UsersController
}