const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const app = express();

const doctorRoutes = require("./src/routes/doctorRoutes");
const appointmentRoutes = require("./src/routes/appointmentRoutes");

const errorHandler = require("./src/middlewares/errorHandler");
const routeNotFoundHandler = require("./src/middlewares/routeNotFoundHandler");

app.use(cors());
app.use(express.json());

app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

// This endpoint only for health check
app.get("/", (req, res) => {
  res.send("Doctor appointment API is running");
});

app.use(routeNotFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is runnig on port ${PORT}`);
});
