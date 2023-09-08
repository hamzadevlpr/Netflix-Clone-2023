require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require('./Routers/AuthRoutes');
// const path = require('path');

app.use(cors());

// Serving the frontend
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send("Deployed to Vercel");
});

// Connect to the MongoDB database
const DATABASE_URL = "mongodb+srv://crud-operation:crud-op123@cluster0.ismwkvb.mongodb.net/users";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on("error", (error) => {
  console.log("Database connection error:", error);
});
database.once("open", () => {
  console.log("Database Connected");
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
