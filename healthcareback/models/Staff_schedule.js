let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Staff_scheduleSchema = new Schema({
    staff_id: String,
    name: String,
    surname: String,
    working_hours: String,
    working_days: String,
    on_vacation: Boolean,
    sick_leave: Boolean,
    day_off: Boolean,
    is_deleted: Boolean,
    deleted_date: String
});
module.exports = mongoose.model('Staff_schedule', Staff_scheduleSchema);