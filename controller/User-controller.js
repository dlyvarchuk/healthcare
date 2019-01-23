let User = require('../models/User');
let Patient = require('../models/Patient');
let Staff  = require('../models/Staff');

let container = {};
module.exports = container;


container.get = async function (req, res, next) {
    try {
        let users = await User.find();
        res.json(users);
    } catch (e) {
        next(e);
    }
};

container.getById = async function (req, res, next) {
    try {
        let user = await User.findById(req.params.id);
        res.json(user);
    } catch (e) {
        next(e);
    }
};

container.post = async function (req, res, next) {
    try {
        await User.create(req.body);
        res.json(await User.find(req.body.login));
    } catch (e) {
        next(e);
    }
};
container.put = async function (req, res, next) {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body)
    } catch (e) {
        next(e);
    }
};
container.delete = async function (req, res, next) {
    try {
        let id = req.params.id;
        let delUser = await User.findByIdAndDelete(id);
        if (delUser.staff_id){
            await Staff.findOneAndDelete(id);
        }
        else if (delUser.patient_id) {
            await Patient.findOneAndDelete(id);
        }
        res.json(delUser);
    } catch (e) {
        next(e);
    }

};