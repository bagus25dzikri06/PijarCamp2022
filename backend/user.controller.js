const { UsersModel } = require('./user.model')

const UsersController = {
    selectAll: (req, res) => {
        const { sortByField, sortByType } = req.query,
        sortField = sortByField ? sortByField : 'id',
        sortType = sortByType ? sortByType : 'ASC'

        UsersModel.list(sortField, sortType).then((result) => {
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

        if (
            !id ||
            !username ||
            !phone_number ||
            id === '' ||
            username === '' ||
            phone_number === ''
        ) {
            res.json({
                message: 'All data must be filled'
            })
            return
        }

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