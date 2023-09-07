require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const router = require('./Routers/AuthRoutes');

// Allow requests from the specific origin
const corsOptions = {
  origin: "https://netflix-clone-fro.vercel.app",
  methods: ["POST", "GET"], // Add the allowed HTTP methods
  credentials: true, // If you need to send cookies, set this to true
};

app.use(cors(corsOptions));


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
