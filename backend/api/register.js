const express = require("express");
const router = express.Router();

const registerService = require("../services/register")

router.post("/", async (req, res) => {
  const { email, password, role } = req.body;
  if (email && password && role) {
    const response = await registerService.register(email, password, role);

    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
});

module.exports = router;
