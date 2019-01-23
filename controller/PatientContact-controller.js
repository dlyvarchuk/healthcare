let Patient  = require('../models/Patient');
let PatientContact = require('../models/Patient_contact');

let container = {};
module.exports = container;


container.get = async function (req, res, next) {
    try {
        let patientContact = await PatientContact.find();
        res.json(patientContact);
    } catch (e) {
        next(e);
    }
};

container.getById = async function (req, res, next) {
    try {
        let patientContact = await PatientContact.findById(req.params.id);
        res.json(patientContact);
    } catch (e) {
        next(e);
    }
};

container.post = async function (req, res, next) {
    try {
        let patient = await Patient.findOne(req.user._id);
        req.body.patient_id = patient._id;
        let patientContact = PatientContact.create(req.body);
        patient.patient_contact_id = patientContact._id;
        patient.save();

        res.json(patientContact);
    } catch (e) {
        next(e);
    }
};

container.put = async function (req, res, next) {
    try {
        PatientContact.findByIdAndUpdate(req.params.id, req.body)
    } catch (e) {
        next(e);
    }
};
container.delete = async function (req, res, next) {
    try {
        let delPatientContact = await PatientContact.findByIdAndUpdate(req.params.id, {
            is_deleted: true,
            deleted_date: new Date()
        });
        res.json(delPatientContact);
    } catch (e) {
        next(e);
    }

};