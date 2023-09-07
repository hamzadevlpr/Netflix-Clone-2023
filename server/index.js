require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const router = require('./Routers/AuthRoutes');

app.use(cors(
  {
    origin: ["https://netflix-clone-apii.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  }
));
app.use(express.json());
app.use(router);
app.get('/', (req, res) => {
  res.send("Deployed to Vercel")
})

// Connect to the MongoDB database
const DATABASE_URL = process.env.DATABASE_URL;

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
