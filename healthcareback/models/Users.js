let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsersSchema = new Schema({
    user_type_id: Number,
    login_name: String,
    Password: String,
    login_date: Date,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('Users', UsersSchema);