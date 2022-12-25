const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const userService = require("../services/user")

router.get("/:id", verifyRole("user", 1), async (req, res) => {
  const { id } = req.params
  if (id) {
    const response = await userService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})

router.get("/:name", verifyRole("user", 2), async (req, res) => {
  const { name } = req.query
  if (name) {
    const response = await userService.getByName(name)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})

router.get("/", verifyRole("user", 3), async (req, res) => {
  const response = await userService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})

router.put("/", verifyRole("user", 4), async (req, res) => {
  const { id, email, password } = req.body
  if (id && email && password) {
    const response = await userService.update(req.user.id, email, password )
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})

router.delete("/", verifyRole("user", 5), async (req, res) => {
  if (req.user) {
    const response = await userService.delete(req.user.id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
module.exports = router