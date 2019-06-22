let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PatientVisitSchema = new Schema({
    patient_id: String,
    visit_id: String,
    diagnosis_id: String,
    reported_date: Date,
    notes: String,
    is_high_risk: Boolean,
    is_contagious: String,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('PatientVisit', PatientVisitSchema);
