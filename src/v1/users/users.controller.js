const usersService = require('./users.service');
// const { sql, poolPromise1 } = require('../../config/database/dbName1.js');

exports.getUser = (req, res) => {
    const user = usersService.getUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
};

exports.createUser = (req, res) => {
    const newUser = usersService.createUser(req.body);
    res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
    const updatedUser = usersService.updateUser(req.params.id, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).send('User not found');
    }
};

exports.deleteUser = (req, res) => {
    const success = usersService.deleteUser(req.params.id);
    if (success) {
        res.send({ message: 'User deleted successfully.' });
    } else {
        res.status(404).send('User not found');
    }
};
