const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CashflowsSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      //enum: ["Food", "Clothes", "Salary", "Stocks", "Rent"],
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cashflows", CashflowsSchema);
