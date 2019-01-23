let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let PatientContactsSchema = new Schema({
    patient_id: {
        type: Schema.ObjectId,
        ref: 'patient'
    },
    full_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    is_deleted: {
        type: Boolean,
    },
    deleted_date: {
        type: Date
    }
});
let model = mongoose.model('patient_contact', PatientContactsSchema);
module.exports = model;