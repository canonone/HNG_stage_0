const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/api/stage_0");
});

app.get("/api/stage_0", (req, res) => {
  res.status(200).json({
    email: "umohchristian001@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/canonone/HNG_stage_0",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
