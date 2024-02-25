const express = require("express");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(':memory');

const app = express();

app.post("/createTable", (req, res) => {
  let db = new sqlite3.Database("./pos.db");

  if (err) {
    return res
      .status(500)
      .json({ error: "Could not connect to database", details: err });
  }

  db.serialize(function () {
    db.run(
        `CREATE TABLE Product(
            product_id INTEGER PRIMARY KEY,
            product_name TEXT NOT NULL,
            price REAL NOT NULL,
            stock_quantity INTEGER NOT NULL,
            barcode TEXT UNIQUE,
            category TEXT
        )`
    );
  });

  db.close((err) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Could not close the connection", details: err });
    }

    res.status(200).json({ message: "Table created successfully" });
  });
});
