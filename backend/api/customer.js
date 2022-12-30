const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();
const s3Service = require("../services/s3")

const customerService = require("../services/customer")


router.get("/id/:id", verifyRole("customer", 1), async (req, res) => {
  const id  = req.params.id
  if (id) {
    const response = await customerService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/name/:name", verifyRole("customer", 2), async (req, res) => {
  const name = req.params.name
  if (name) {
    const response = await customerService.getByName(name)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole("customer", 3), async (req, res) => {
  const response = await customerService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole("customer", 4), async (req, res) => {
  var { name, photo } = req.body
  if (name && photo) {
    if (req.files) {
      const uploadResponse = await s3Service.upload(req.files.image)
      console.log(uploadResponse)
      if (uploadResponse.type == "Error") {
        res.status(400).send(uploadResponse.message)
        return
      }
      else {
        photo = uploadResponse.data.Location
      }
    }
    const response = await customerService.update(req.user.userId, name, photo)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole("customer", 5), async (req, res) => {
  
  if (req.user) {
    const response = await customerService.delete(req.user.userId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router