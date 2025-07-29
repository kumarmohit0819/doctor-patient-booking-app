const appointments = require("../models/appointmentModel");

function bookAppointment(data) {
  const newAppointment = {
    id: appointments.length + 1,
    ...data,
  };

  appointments.push(newAppointment);
  console.log("Appointment booked ", newAppointment);

  return newAppointment;
}

function getAppointementByDoctor(doctorId) {
  return appointments.filter((app) => app.doctor_id === doctorId);
}

function getAppointementByPatient(patientId) {
  return appointments.filter((app) => app.patient_id === patientId);
}

module.exports = {
  bookAppointment,
  getAppointementByDoctor,
  getAppointementByPatient,
};
