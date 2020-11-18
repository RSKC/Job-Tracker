const express = require("express");
const path = require("path");

const metricsController = require("./metricsController");
const dbController = require("./dbController");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/new-application-form", dbController.addApplication, (req, res) => {
  // console.log(`Request body is: ${req.body}`);
  res.status(200).redirect("/new-application");
});

app.get(
  "/metrics",
  metricsController.getMetrics,
  metricsController.getConversionRate,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.use("/", (err, req, res, next) => {
  console.log(`ERROR reached the global error handler: ${err}`);
  return res.sendStatus(500);
});

app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(3000);
