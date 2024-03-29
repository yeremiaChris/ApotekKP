const supplier = require("../model/supplierModel");
const fs = require("fs");
const path = require("path");

module.exports.supplier_get = (req, res, next) => {
  supplier
    .find({}, (err, data) => {
      if (err) {
        res.status(400).send(err);
        next();
      } else {
        res.status(201).send(data);
      }
    })
    .sort({ createdAt: -1 })
    .limit(2)
    .select("-image");
};

module.exports.supplier_post = (req, res, next) => {
  const obj = {
    name: req.body.name,
    image: {
      data: fs.readFileSync(path.join(process.cwd() + "/uploads/" + req.file.filename)),
      contentType: "image/png",
    },
    media: {
      defaultImage: req.file.filename,
    },
  };
  supplier.create(obj, (err, data) => {
    if (err) {
      res.status(400).send(err);
      next();
    }
    res.status(201).send(data);
  });
};

module.exports.supplier_put = (req, res, next) => {
  const obj = {
    name: req.body.name,
    image: {
      data: !req.file ? "" : fs.readFileSync(path.join(process.cwd() + "/uploads/" + req.file.filename)),
      contentType: "image/png",
    },
    media: {
      defaultImage: !req.file ? "" : req.file.filename,
    },
  };
  const obj2 = {
    name: req.body.name,
  };
  const { id } = req.params;
  supplier.findByIdAndUpdate(id, !req.file ? obj2 : obj, { new: true }, (err, data) => {
    if (err) {
      res.status(400).send(err);
      next();
    }
    res.status(201).send(data);
  });
};

module.exports.supplier_delete = (req, res, next) => {
  const { id } = req.params;
  supplier.findById(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      next();
    } else if (data) {
      data.remove(() => {
        res.status(201).send(data);
      });
    } else {
      res.status(400).send("Not found");
      next();
    }
  });
};

module.exports.supplier_get_detail = (req, res, next) => {
  const { id } = req.params;
  supplier.findById(id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      next();
    } else if (data) {
      res.status(201).send(data);
    } else {
      res.status(400).send("Not found");
      next();
    }
  });
};
