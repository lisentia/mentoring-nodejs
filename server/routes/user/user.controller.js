'use strict';

var _ = require('lodash');
var jwt = require('jwt-simple');
var User = require('./user.model');

var STATUS = {
    OK: 200,
    CREATED: 201,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404
};

var exports = module.exports = {};

// Get all users
exports.get = function(req, res) {
    return User.find(req.params)
        .then(function(result) {
             res.status(STATUS.OK).render('users', { data: result });
        })
        .catch(function(err) {
            res.status(STATUS.NOT_FOUND).json(err);
        });
};

// Get one user by id
exports.getById = function(req, res) {
    return User.findById(req.params.id)
        .then(function(result) {
            res.status(STATUS.OK).render('profile', result);
            res.status(STATUS.OK).json(data);
        })
        .catch(function(err) {
            res.status(STATUS.NOT_FOUND).json(err);
        });
};

// Get registration page
exports.registration = function(req, res) {
    res.render('registration');
};

// Post new user
exports.post = function(req, res) {
    var newUser = new User(req.body);
    return newUser.save()
        .then(function(result) {
            res.status(STATUS.CREATED).redirect('/user/' + result.id);
        })
        .catch(function(err) {
            res.send(err);
        });
};

// Get edit profile page
exports.edit = function(req, res) {
    return User.findById(req.params.id)
        .then(function(result) {
            res.status(STATUS.OK).render('updateprofile', result);
        })
        .catch(function(err) {
            res.status(STATUS.NOT_FOUND).json(err);
        });
};

// Update user by id
exports.put = function(req, res) {
    return User.findById(req.params.id)
        .then(function (modelInstance) {
            var updatedInstance = _.extend(modelInstance, req.body);
            return updatedInstance.save();
        })
        .then(function(result) {
            res.status(STATUS.OK).json({
                status: 'success',
                response: result
            });
        })
        .catch(function(err) {
            res.status(STATUS.NOT_FOUND).json(err);
        });
};

// Delete user by id
exports.delete = function(req, res) {
    return User.remove({_id: req.params.id})
        .then(function(result) {
            res.json({
                status: 'success',
                response: result
            });
        })
        .catch(function(err) {
            res.send(err);
        });
};

// Create jwt when user log in
exports.setToken = function(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(STATUS.UNAUTHORIZED);
    }

    User.find({
        email: req.body.email,
        password: req.body.password
    })
        .then(function(result) {
            var payload = {id: user.id};
            var token = jwt.encode(payload, serverConfig.jwtSecret);
            res.status(STATUS.OK).json({ token: token });
        })
        .catch(function(err) {
            res.status(STATUS.UNAUTHORIZED).json(err);
        });

};