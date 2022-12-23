const express = require('express');
const router = express.Router();

const loginRouter = require('./login');
const registerRouter = require('./register');
const userRouter = require("./user")
const workShopRouter = require("./workshop")
const reviewRouter = require("./review")
const adminRouter = require("./admin")
const customerRouter = require("./customer")
const workShopManagerRouter = require("./workshopManager")
const addressRouter = require("./address");
const reservationRouter = require('./reservation');
const timeRouter = require('./time');
const {verifyToken} = require('../middleware/jwtVerif')
router.get("/", (req, res) => {
    res.send("Success!")
})
router.use("/login",loginRouter)
router.use("/register",registerRouter)
router.use("/user", userRouter)
router.use("/admin", adminRouter)
router.use("/customer", customerRouter)
router.use("/workshopManager", workShopManagerRouter)
router.use("/workshop", verifyToken, workShopRouter)
router.use("/review", verifyToken, reviewRouter)
router.use("/address", verifyToken, addressRouter)
router.use("/reservation", verifyToken, reservationRouter)
router.use("/time", verifyToken, timeRouter)


module.exports = router