let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PatientSchema = new Schema({
    user_type_id: Number,
    login_name: String,
    password: String,
    login_date: Date,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('Patient', PatientSchema);

