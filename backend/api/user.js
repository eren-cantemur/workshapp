const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const userService = require("../services/user")

router.get("/:id", verifyRole("user", 1), async (req, res) => {
  const id = req.params.id
  const response = await userService.getById(req.user.userId)
  res.status(response.type === "Error" ? 400 : 200).send(response);
})


router.get("/", verifyRole("user", 3), async (req, res) => {
  const response = await userService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})

router.put("/", verifyRole("user", 4), async (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    const response = await userService.update(req.user.userId, email, password )
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.put("/changeStatus", verifyRole("user", 3), async (req, res) => {
  const { id, isApproved} = req.body
  if (id && isApproved) {
    const response = await userService.changeStatus(id, isApproved)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})

router.delete("/", verifyRole("user", 5), async (req, res) => {
  const response = await userService.delete(req.user.userId)
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
module.exports = router