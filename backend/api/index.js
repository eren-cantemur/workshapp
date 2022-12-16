const express = require('express');
const router = express.Router();

const userRouter = require("./user")
const workShopRouter = require("./workShop")
const reviewRouter = require("./review")
const adminRouter = require("./admin")
const customerRouter = require("./customer")
const workShopManagerRouter = require("./workShopManager")
const addressRouter = require("./address")
const timeRouter = require("./time")
const reservationRouter = require("./reservation")

router.use("/user", userRouter)
router.use("/admin", adminRouter)
router.use("/customer", customerRouter)
router.use("/workShopManager", workShopManagerRouter)
router.use("/workshop", workShopRouter)
router.use("/review", reviewRouter)
router.use("/address", addressRouter)
router.use("/time", timeRouter)
router.use("/reservation", reservationRouter)

module.exports = router