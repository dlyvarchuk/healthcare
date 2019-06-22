let Users = require('../models/Users');
/** @namespace req.body */
exports.getAll = async function getAll(req, res, next){
    try {
        return res.json(await Users.find({}));
    } catch (e) {
        return next(e);
    }
}

exports.getById = async function getById(req, res, next){
    try {
        return res.json(await Users.findById(req.params.id));
    } catch (e) {
        return next(e);
    }
}

exports.getByLoginName = async function getByLoginName(req, res, next){
    try {
        return res.json(await Users.findOne(
            { "login_name" : req.login_name }
        ));
    } catch (e) {
        return next(e);
    }
}

exports.create = async function create(req, res, next){
    try {
        return res.json(await Users.create(req.body));
    } catch (e) {
        return next(e);
    }
}

exports.update = async function update(req, res, next){
    try {
        return res.json(await Users.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (e) {
        return next(e);
    }
}

exports.deleteOne = async function deleteOne(req, res, next){
    try {
        return res.json(await Users.findByIdAndRemove(req.params.id));
    } catch (e) {
        return next(e);
    }
}
