const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api");
const cors = require("cors");

const app = express();

// db connection with mongodb
const dbURI =
  "mongodb+srv://penjualan-obat:pass789@cluster0.0r1il.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("connect to db");
    app.listen(4000, () => {
      console.log("ada di port 4000");
    });
  })
  .catch((err) => console.log(err));

app.use(cors());
// body-parser for expres 4 above
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// image url
app.use("/uploads", express.static("uploads"));

// routing
app.use("/api", router);

// handle error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send({ error: err.message });
});
