const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const medicineSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required"],
    },
    type: {
      type: String,
      required: [true, "Type field is required"],
    },
    unit: {
      type: String,
      required: [true, "Unit field is required"],
    },
    price: {
      type: Number,
      required: [true, "Price field is required"],
    },
    supply: {
      type: Number,
      required: [true, "Supply field is required"],
    },
  },
  { timestamps: true }
);

const medicine = mongoose.model("medicine", medicineSchema);
module.exports = medicine;
