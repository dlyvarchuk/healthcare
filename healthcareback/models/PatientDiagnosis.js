let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PatientDiagnosisSchema = new Schema({
    patient_id: String,
    diagnosis_id: String,
    diagnosis_name: String,
    reported_date: Date,
    reported_staff_id: String,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('PatientDiagnosis', PatientDiagnosisSchema);
