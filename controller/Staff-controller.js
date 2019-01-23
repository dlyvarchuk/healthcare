let Staff = require('../models/Staff');
let User  = require('../models/User');


let container = {};


container.get = async function (req, res, next) {
    try {
        let staff = await Staff.find();
        res.json(staff);
    } catch (e) {
        next(e);
    }
};

container.getById = async function (req, res, next) {
    try {
        let staff = await Staff.findById(req.params.id);
        res.json(staff);
    } catch (e) {
        next(e);
    }
};

container.post = async function (req, res, next) {
    try {
        req.body.user_id = req.user._id;
        let staff = Staff.create(req.body);
        User.findOneAndUpdate(req.user._id, {staff_id: staff._id});

        res.json(user);
    } catch (e) {
        next(e);
    }
};

container.put = async function (req, res, next) {
    try {
        Staff.findByIdAndUpdate(req.params.id, req.body)
    } catch (e) {
        next(e);
    }
};
container.delete = async function (req, res, next) {
    try {
        let delStaff = await Staff.findByIdAndUpdate(req.user._id, {
            is_deleted: true,
            deleted_date: new Date()
        });
        res.json(delStaff);
    } catch (e) {
        next(e);
    }

};
module.exports = container;
