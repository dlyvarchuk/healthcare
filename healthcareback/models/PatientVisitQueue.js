let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PatientVisitQueueSchema = new Schema({
    patient_id: String,
    visit_id: String,
    queue_member: String,
    staff_id: String,
    date_time: Date,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('PatientVisitQueue', PatientVisitQueueSchema);
