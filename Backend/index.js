const express = require("express");
const  app = express();
const cors = require('cors');
const signupRouter = require('./signup');
const loginRouter = require('./login');
const connectToDatabase = require('./connection');
const port = 5000;

app.use(express.json());
app.use(cors());

connectToDatabase();
app.use(signupRouter);
app.use(loginRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });