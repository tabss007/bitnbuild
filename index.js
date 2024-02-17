const connection = require("./connection");
const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })