const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api");
// const router = express.Router();

const app = express();

const dbURI =
  "mongodb+srv://yeremia:test123@cluster0.0r1il.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connect to db");
    app.listen(4000, () => {
      console.log("ada di port 4000");
    });
  })
  .catch((err) => console.log(err));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/api", router);
// middleware kalo ada error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send({ error: err.message });
});
