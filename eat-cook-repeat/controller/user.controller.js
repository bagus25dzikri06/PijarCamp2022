const bcrypt = require('bcrypt');
const { UsersModel } = require('../model/user.model');
const { pool } = require('../config/db');

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
    register: (req, res) => {
        const saltRounds = 10;
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

        return new Promise((resolve, reject) => {
            UsersModel.isUserExists(email).then(
                (isExists) => {
                    if (isExists) {
                        return res.status(400).json({ status: 'failed', message: 'Email has been taken' });
                    }

                    bcrypt.hash(password, saltRounds, (err, encryptedPassword) => {
                        if (err) {
                            reject(err);
                        }

                        pool.query(
                            'INSERT INTO Users (name, email, phone_number, password) VALUES ($1, $2, $3, $4)',
                            [name, email, phone_number, encryptedPassword],
                            (err) => {
                                if (err) {
                                    reject(err.message);
                                } else {
                                    UsersModel.getUser(email).then((successMessage) => {
                                        successMessage = {
                                            status: 'success',
                                            message: 'User is added successfully'
                                        };
                                        return res.status(201).json(successMessage);
                                    });
                                }
                            }
                        );
                    });
                },
                (err) => {
                    reject('Error while checking is user exists.');
                }
            );
        });
    },
    update: async (req, res) => {
        try {
            const email = req.body.email, 
            phone_number = req.body.phone_number,
            id = req.params.id,
            data = await UsersModel.updateUser(email, phone_number, id);
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id, 
            data = await UsersModel.deleteUser(id);
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    }
};

module.exports = {
    UsersController,
};
