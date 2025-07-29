const appointmentService = require("../services/appointmentService");

function bookAppointment(req, res, next) {
  try {
    const { date, time, doctor_id, patient_id } = req.body;
    let errors = [];
    if (!date) errors.push("date is required");
    if (!time) errors.push("time is required");
    if (!doctor_id) errors.push("doctor_id is required");
    if (!patient_id) errors.push("patient_id is required");

    if (errors.length > 0) {
      const error = new Error(errors.join(", "));
      error.status = 400;
      throw error;
    }

    const appointment = appointmentService.bookAppointment({
      date,
      time,
      doctor_id: parseInt(doctor_id),
      patient_id: parseInt(patient_id),
    });

    res.status(201).json(appointment);
  } catch (err) {
    next(err);
  }
}

function getAppointments(req, res, next) {
  try {
    const { doctor_id, patient_id } = req.query;

    if (doctor_id && patient_id) {
      const error = new Error(
        "Please enter by either doctor_id OR patient_id, not both"
      );
      error.status = 400;
      throw error;
    }

    if (doctor_id) {
      return res.json(
        appointmentService.getAppointementByDoctor(parseInt(doctor_id))
      );
    }

    if (patient_id) {
      return res.json(
        appointmentService.getAppointementByPatient(parseInt(patient_id))
      );
    }

    res.json([]);
  } catch (err) {
    next(err);
  }
}
module.exports = { bookAppointment, getAppointments };
