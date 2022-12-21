const express = require("express");
const router = express.Router();

const loginService = require("../services/login")

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const response = await loginService.login(email, password);

    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
      body: {email, password},
    });
  }
});

module.exports = router;
