let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let PatientSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    first_name: {
        type: String,
        required: true
    },
    patient_contact_id:{
        type: Schema.ObjectId,
        ref: 'patient_contact'
    },
    middle_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    date_od_birth: {
        type: String,
        required: true
    },
    country_of_birth: {
        type: String,
        required: true
    },
    city_of_birth: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female']
    },
    registration_address:{
        type: String,
        required: true
    },
    passport_id_card:{
      type: String,
    },
    tin_id: {
      type: String
    },
    image_url:{
      type: String
    },
    is_deleted: {
        type: Boolean,
    },
    deleted_date: {
        type: Date
    }
});
let model = mongoose.model('patient', PatientSchema);
module.exports = model;