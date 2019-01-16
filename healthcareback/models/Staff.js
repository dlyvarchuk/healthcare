let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let StaffSchema = new Schema({
    staff_id: String,
    full_name: String,
    phone: String,
    email: String,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('Staff', StaffSchema);
