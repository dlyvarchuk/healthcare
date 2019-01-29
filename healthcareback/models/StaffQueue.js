let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StaffQueueSchema = new Schema({
    staff_id: String,
    queue_member: String,
    date_time: Date,
    is_completed: Boolean,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('StaffQueue', StaffQueueSchema);
