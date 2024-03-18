const express = require("express");
const app = express();
const path = require("path");
require("ejs");
require("dotenv").config();
const { storage } = require("./storage/storage");
const multer = require("multer");
const upload = multer({ storage });

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Done");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
