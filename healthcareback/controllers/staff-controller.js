let Staff = require('../models/Staff');

exports.getAll = async function getAll(req, res, next){
    try {
        return res.json(await Staff.find({}));
    } catch (e) {
        return next(e);
    }
}

exports.getById = async function getById(req, res, next){
    try {
        return res.json(await Staff.findById(req.params.id));
    } catch (e) {
        return next(e);
    }
}

exports.create = async function create(req, res, next){
    try {
        return res.json(await Staff.create(req.body));
    } catch (e) {
        return next(e);
    }
}

exports.update = async function update(req, res, next){
    try {
        return res.json(await Staff.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (e){
        return next(e);
    }
}

exports.deleteOne = async function deleteOne(req, res, next){
    try {
        return res.json(await Staff.findByIdAndRemove(req.params.id));
    } catch (e) {
        return next(e);
    }
}
