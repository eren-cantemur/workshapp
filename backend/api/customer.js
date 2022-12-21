const express = require('express');
const router = express.Router();

const customerService = require("../services/customer")


router.get("/:id", async (req, res) => {
  const { id } = req.query
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
router.get("/:name", async (req, res) => {
  const { name } = req.query
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
router.get("/", async (req, res) => {
  const response = await customerService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", async (req, res) => {
  const { id, name, photo } = req.body
  if (id && name && photo) {
    if (req.files.image) {
      const uploadResponse = s3Service.upload(req.files.image)
      if (uploadResponse.type == "Error") {
        res.status(400).send(uploadResponse.message)
        return
      }
      else {
        photo = uploadResponse.data.location
      }
    }
    const response = await customerService.update(id, name, photo)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await customerService.delete(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router