let Staff_schedule = require('../models/Staff_schedule');

exports.getAll = async function getAll(req, res, next){
    try {
        return res.json(await Staff_schedule.find({}));
    } catch (e) {
        return next(e);
    }
};

exports.getById = async function getById(req, res, next){
    try {
        return res.json(await Staff_schedule.findById(req.params.id));
    } catch (e) {
        return next(e);
    }
};

exports.create = async function create(req, res, next){
    try {
        return res.json(await Staff_schedule.create(req.body));
    } catch (e) {
        return next(e);
    }
};

exports.update = async function update(req, res, next){
    try {
        return res.json(await Staff_schedule.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (e){
        return next(e);
    }
};

exports.deleteOne = async function deleteOne(req, res, next){
    try {
        return res.json(await Staff_schedule.findByIdAndRemove(req.params.id));
    } catch (e) {
        return next(e);
    }
};