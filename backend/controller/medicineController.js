const medicine = require("../model/medicineModel");
module.exports.medicine_get = (req, res, next) => {
  medicine
    .find({}, (err, data) => {
      medicine
        .find({}, (err, data) => {
          if (err) {
            res.status(400).send(err);
            next();
          } else {
            res.status(201).send({ message: "Success", data: data });
          }
        })
        .sort({ createdAt: -1 });
    })
    .sort({ createdAt: -1 });
};
module.exports.medicine_post = (req, res, next) => {
  const { body } = req;
  medicine.create(body, (err, data) => {
    if (err) {
      res.status(400).send(err);
      next();
    }
    res.status(201).send(data);
  });
};
