let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StaffSchema = new Schema({
    staff_id: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    is_deleted: {
        type: Boolean,
    },
    deleted_date: {
        type: Date
    }
});

module.exports = mongoose.model('Staff', StaffSchema);
