const doctorService = require("../services/doctorService");

function getDoctors(req, res, next) {
  try {
    const allDoctors = doctorService.getAllDoctors();
    res.json(allDoctors);
  } catch (err) {
    next(err);
  }
}

function getDoctorById(req, res, next) {
  try {
    const doctorId = parseInt(req.params.id);
    const doctor = doctorService.getDoctorById(doctorId);
    if (!doctor) {
      const error = new Error("Doctor not found");
      error.status = 404;
      throw error;
    }
    res.json(doctor);
  } catch (err) {
    next(err);
  }
}

module.exports = { getDoctors, getDoctorById };
