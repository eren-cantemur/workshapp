const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const workshopManagerService = require("../services/workshopManager")

router.get("/:id", verifyRole("workshopManager", 1), async (req, res) => {
  const { id } = req.query
  if (id) {
    const response = await workshopManagerService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/:name", verifyRole("workshopManager", 2), async (req, res) => {
  const { name } = req.query
  if (name) {
    const response = await workshopManagerService.getByName(name)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole("workshopManager", 3), async (req, res) => {
  const response = await workshopManagerService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole("workshopManager", 4), async (req, res) => {
  const { name, logo, photo, description } = req.body
  if (name && logo && photo && description) {
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
    const response = await workshopManagerService.update(req.user.id, name, logo, photo, description)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole("workshopManager", 5), async (req, res) => {

  if (req.user) {
    const response = await workshopManagerService.delete(req.user.id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router