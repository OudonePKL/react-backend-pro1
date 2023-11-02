const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 3001;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get("/allUsers", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json({ status: "Success", user: result });
    }
  });
});

app.listen(port, () => {
  console.log("Web Server listening on port: ", port);
});
