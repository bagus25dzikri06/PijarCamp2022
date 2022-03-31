const { UsersModel } = require('../model/user.model');
const { pool } = require('../config/db');
const { success, failed, successWithToken } = require('../helpers/response');
const { Helpers } = require('../helpers/auth')

const UsersController = {
    getUsers: (req, res) => {
        pool.query('SELECT * FROM Users', (error, results) => {
            if (error) {
                return res.status(400).json({ status: 'failed', message: error.message });
            }
    
            const users = results.rows.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
            });
    
            res.status(200).json(users);
        });
    },
    checkUser: async (req, res) => {
        try {
            const { email } = req.body;
            const data = await UsersModel.isUserExists(email);
            
            if (data.rowCount > 0) {
                return success(res, data.rows[0].email, 'success', 'Email has been taken');
            } else {
                return res.json({
                    message: 'Sorry, you have not registered yourself',
                });
            }
        } catch (err) {
            failed(res, err.message, 'failed', 'Error while checking is user exist');
        }
    },
    register: async (req, res) => {
        try {
            const { name, email, phone_number, password } = req.body;

            let nameCheck = !name || name.length === 0;
            let emailCheck = !email || email.length === 0;
            let phoneNumberCheck = !phone_number || phone_number.length === 0;
            let passwordCheck = !password || password.length === 0;

            if (nameCheck && emailCheck && phoneNumberCheck && passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'All must be required.' });
            }

            if (nameCheck && emailCheck && phoneNumberCheck) {
                return res.status(400).json({ status: 'failed', message: 'Name, email and phone number are required.' });
            } else if (nameCheck && emailCheck && passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'Name, email and password are required.' });
            } else if (nameCheck && phoneNumberCheck && passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'Name, email and password are required.' });
            } else if (emailCheck && phoneNumberCheck && passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'Email, phone number and password are required.' });
            }

            if (nameCheck && emailCheck) {
                return res.status(400).json({ status: 'failed', message: 'Name and email are required.' });
            } else if (nameCheck && phoneNumberCheck) {
                return res.status(400).json({ status: 'failed', message: 'Name and phone number are required.' });
            } else if (nameCheck && passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'Name and password are required.' });
            } else if (emailCheck && phoneNumberCheck) {
                return res.status(400).json({ status: 'failed', message: 'Email and phone number are required.' });
            } else if (emailCheck && passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'Email and password are required.' });
            } else if (phoneNumberCheck && passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'Phone number and password are required.' });
            }

            if (nameCheck) {
                return res.status(400).json({ status: 'failed', message: 'Name is required.' });
            }

            if (emailCheck) {
                return res.status(400).json({ status: 'failed', message: 'Email is required.' });
            }

            if (phoneNumberCheck) {
                return res.status(400).json({ status: 'failed', message: 'Phone number is required.' });
            } else if (phone_number.length < 12) {
                return res.status(400).json({ status: 'failed', message: 'Phone number is illegal.' });
            }

            if (passwordCheck) {
                return res.status(400).json({ status: 'failed', message: 'Password is required.' });
            } else if (password.length < 8) {
                return res.status(400).json({ status: 'failed', message: 'Password length must equal or be more than 8.' });
            }

            const data = await UsersModel.insertUser(name, email, phone_number, password);
            success(res, data, 'success', 'User is added successfully');
        } catch (err) {
            failed(res, err.message, 'failed', 'User is failed to be added');
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const data = await UsersModel.getUser(email);

            if (!data.rows[0]) {
                return res.status(400).send({'message': 'The credentials you provided is incorrect'});
            }
            if(!Helpers.comparePassword(data.rows[0].password, password)) {
                return res.status(400).send({'message': 'The credentials you provided is incorrect' });
            }

            const token = Helpers.generateToken(data.rows[0].id);
            return successWithToken(res, token, 'success', 'Auth granted, welcome to Eat, Cook, Repeat!');
        } catch (err) {
            return res.status(400).send(err.message);
        }
    },
    update: async (req, res) => {
        try {
            const { email, phone_number } = req.body;
            const { id } = req.params;
            const data = await UsersModel.updateUser(email, phone_number, id);
            success(res, data, 'success', 'User is updated successfully');
        } catch (err) {
            failed(res, err.message, 'failed', 'User is failed to be updated');
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await UsersModel.deleteUser(id);
            success(res, data, 'success', 'User is deleted successfully');
        } catch (err) {
            failed(res, err.message, 'failed', 'User is failed to be deleted');
        }
    }
};

module.exports = {
    UsersController,
};
