const express = require('express');
const router = express.Router();

const loginRouter = require('./login');
const registerRouter = require('./register');
const userRouter = require("./user")
const workShopRouter = require("./workShop")
const reviewRouter = require("./review")
const adminRouter = require("./admin")
const customerRouter = require("./customer")
const workShopManagerRouter = require("./workShopManager")
const addressRouter = require("./address");
const reservationRouter = require('./reservation');
const timeRouter = require('./time');

router.get("/", (req, res) => {
    res.send("Success!")
})
router.use("/login",loginRouter)
router.use("/register",registerRouter)
router.use("/user", userRouter)
router.use("/admin", adminRouter)
router.use("/customer", customerRouter)
router.use("/workShopManager", workShopManagerRouter)
router.use("/workshop", workShopRouter)
router.use("/review", reviewRouter)
router.use("/address", addressRouter)
router.use("/reservation",reservationRouter)
router.use("/time",timeRouter)


module.exports = router