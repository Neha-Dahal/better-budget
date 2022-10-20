var express = require("express");
var router = express.Router();
const Cashflows = require("../models/Cashflows");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/cashflows", function (req, res, next) {
  res.render("cashflows");
});
router.post("/save-cashflows", async function (req, res, next) {
  await Cashflows.insertMany({
    //console.log(req.body);
    date: req.body.date,
    category: req.body.category,
    amount: req.body.amount,
  });
  res.redirect("/");
});
router.get("/history", async function (req, res, next) {
  const cashflows = await Cashflows.find();
  console.log(cashflows);
  res.render("history", { cashflowList: cashflows });
});
router.get("/reports", async function (req, res, next) {
  const cashflows = await Cashflows.find();
  //console.log(cashflows);
  res.render("reports", { cashflowList: cashflows });
});
module.exports = router;
