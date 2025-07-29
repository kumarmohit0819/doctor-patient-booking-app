# doctor-patient-booking-app

This is a simple Node.js + Express API for managing doctors and patient appointments.

# Project Setup

1. Clone the app

- git clone https://github.com/kumarmohit0819/doctor-patient-booking-app.git
- cd doctor-patient-booking-app

2. Install dependencies

   - npm install

3. Run the server

   - node server.js

# Project structure

doctor-appointment/

- src/
  - controllers/
  - services/
  - models/
  - routes/
  - server.js
  - package.json
  - README.md

# API List

- Doctors
  - GET /doctors -> List all doctors
  - GET /doctors/:id -> Get doctor details
- Appointments
  - POST /appointments -> Book an appointment
  - GET /appointments?doctor_id=1 -> View doctor's appointments
  - GET /appointments?patient_id=101 -> View patient's appointments

# Notes

- Uses in-memory storage (data resets when the server restarts)
- Easy to swap models with MongoDB or MySQL later
- No authentication — using IDs for simplicity
- Includes a health check endpoint (/)

# Docker

- Steps to follow
  - docker build -t doctor-patient-booking-app .
  - docker run -p 3000:3000 doctor-patient-booking-app
