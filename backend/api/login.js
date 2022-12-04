const express = require("express");
const router = express.Router();

const loginService = "../services/login";

router.post("/", async (req, res) => {
  loginService.login(req, res);
});

module.exports = router;
