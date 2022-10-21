const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey there!").end();
});

app.listen(1338, () => {
  console.log("listening on port 1338");
});
