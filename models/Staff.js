let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StaffSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'user'
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

let model = mongoose.model('staff', StaffSchema);



module.exports = model;
