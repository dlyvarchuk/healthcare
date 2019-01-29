let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PatientSchema = new Schema({
    patient_id: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    date_of_birth: String,
    country_of_birth: String,
    city_of_birth: String,
    gender:  String,
    phone: String,
    registration_address: String,
    passport_id_card: String,
    tin_id: String,
    image_url: String,
    is_deleted: Boolean,
    deleted_date: Date
});

module.exports = mongoose.model('Patient', PatientSchema);


