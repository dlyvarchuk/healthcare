let User  = require('../models/User');
let Patient = require('../models/Patient');

let container = {};
module.exports = container;


container.get = async function (req, res, next) {
    try {
        let patient = await Patient.find();
        res.json(patient);
    } catch (e) {
        next(e);
    }
};

container.getById = async function (req, res, next) {
    try {
        let patient = await Patient.findById(req.params.id);
        res.json(patient);
    } catch (e) {
        next(e);
    }
};

container.post = async function (req, res, next) {
    try {
        let user = User.findById(req.user._id);
        req.body.user_id = req.user._id;
        let patient = Patient.create(req.body);
        user.findOneAndUpdate(user._id, {staff_id: patient._id});

        res.json(user);
    } catch (e) {
        next(e);
    }
};

container.put = async function (req, res, next) {
    try {
        Patient.findByIdAndUpdate(req.user._id, req.body)
    } catch (e) {
        next(e);
    }
};
container.delete = async function (req, res, next) {
    try {
        let delPatient = await Patient.findByIdAndUpdate(req.user._id, {
            is_deleted: true,
            deleted_date: new Date()
        });
        res.json(delPatient);
    } catch (e) {
        next(e);
    }

};