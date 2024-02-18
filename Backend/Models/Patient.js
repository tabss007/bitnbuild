const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    fname:String,
    lname:String,
    contact:Number,
  });

const Patient = mongoose.model('patients', patientSchema);
module.exports = Patient