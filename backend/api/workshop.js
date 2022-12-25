const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const s3Service = require("../services/s3")
const workshopService = require("../services/workshop")

router.post("/", verifyRole("workshop", 1), async (req, res) => {
  const { name, capacity, description, categoryId} = req.body
  if (name && capacity && description && req.files.image && categoryId) {
    const uploadResponse = s3Service.upload(req.files.image)
    if (uploadResponse.type == "Error") {
      res.status(400).send(uploadResponse.message)
      return
    }
    else {
      const photo = uploadResponse.data.location
      const response = await workshopService.create(name, capacity, description, photo, categoryId,req.user.id)
      res.status(response.type === "Error" ? 400 : 200).send(response);
    }

  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:id", verifyRole("workshop", 2), async (req, res) => {
  const { id } = req.query
  if (id) {
    const response = await workshopService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:workshopManagerId", verifyRole("workshop", 3), async (req, res) => {
  const { workshopManagerId } = req.query
  if (workshopManagerId) {
    const response = await workshopService.getByWorkshopManagerId(workshopManagerId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole("workshop", 4), async (req, res) => {
  const response = await workshopService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole("workshop", 5), async (req, res) => {
  const { id, name, capacity, description, photo } = req.body
  if (id && name && capacity && description && photo) {
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
    const response = await workshopService.update(id, name, capacity, description, photo, req.user.id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole("workshop", 6), async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await workshopService.delete(id,req.user.id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router