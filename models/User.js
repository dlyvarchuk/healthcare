let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt');

let UserSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    staff_type_id1: {
        type: Schema.ObjectId,
        ref: 'staff'
    },
    patient_type_id2: {
        type: Schema.ObjectId,
        ref: 'patient'
    },
    password: {
        type: String,
        required: true
    },
    login_date: {
        type: Date,
        default: new Date()
    },

    is_deleted: Boolean,

    deleted_date: Date
});

UserSchema.methods.hashPassword = function () {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
};
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

let model = mongoose.model('user', UserSchema);
module.exports = model;

