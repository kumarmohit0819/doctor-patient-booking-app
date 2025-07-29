const doctor = require("../models/doctorModel");

function getAllDoctors() {
  return doctor;
}

function getDoctorById(id) {
  return doctor.find((doc) => doc.id === id);
}

module.exports = { getAllDoctors, getDoctorById };
