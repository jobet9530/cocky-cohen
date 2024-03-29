const express = require("express");
const usersRouter = require("./routes/users");
const createTableRoute = require("./database/database");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/database", createTableRoute);

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
