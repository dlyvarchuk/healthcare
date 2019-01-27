let StaffQueue = require('../models/StaffQueue');

exports.getAll = async function getAll(req, res, next){
    try {
        return res.json(await StaffQueue.find({}));
    } catch (e) {
        return next(e);
    }
}

exports.getById = async function getById(req, res, next){
    try {
        return res.json(await StaffQueue.findById(req.params.id));
    } catch (e) {
        return next(e);
    }
}

exports.create = async function create(req, res, next){
    try {
        return res.json(await StaffQueue.create(req.body));
    } catch (e) {
        return next(e);
    }
}

exports.update = async function update(req, res, next){
    try {
        return res.json(await StaffQueue.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (e){
        return next(e);
    }
}

exports.deleteOne = async function deleteOne(req, res, next){
    try {
        return res.json(await StaffQueue.findByIdAndRemove(req.params.id));
    } catch (e) {
        return next(e);
    }
}
