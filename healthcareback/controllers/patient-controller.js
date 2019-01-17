let Patient = require('../models/Patient');

exports.getAll = async function getAll(req, res, next){
    try {
        return res.json(await Patient.find({}));
    } catch (e) {
        return next (e);
    }
};

exports.getById = async function getById(req, res, next){
    try {
       return res.json(await Patient.findById(req.params.id));
    } catch (e) {
        return next(e);
    }
};

exports.create = async function create(req, res, next){
    try {
        return res.json(await Patient.create(req.body));
    } catch (e) {
        return next(e);
    }
};

exports.update = async function update(req, res, next){
    try {
       return res.json(await Patient.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (e) {
        return next(e);
    }
};

exports.deleteOne = async function deleteOne(req, res, next){
    try {
       return res.json(await Patient.findByIdAndRemove(req.params.id));
    } catch (e) {
        return next(e);
    }
};
