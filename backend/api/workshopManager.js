const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();
const s3Service = require("../services/s3")

const workshopManagerService = require("../services/workshopManager")

router.get("/id/:id", verifyRole("workshopManager", 1), async (req, res) => {
  const id  = req.params.id
  if (id) {
    const response = await workshopManagerService.getByUserId(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/name/:name", verifyRole("workshopManager", 2), async (req, res) => {
  const name = req.params.name
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
  var { name, logo, description, phone } = req.body
  if (name && logo && description && phone) {
    if (req.files) {
      const uploadResponse = await s3Service.upload(req.files.image)
      if (uploadResponse.type == "Error") {
        res.status(400).send(uploadResponse.message)
        return
      }
      else {
        logo = uploadResponse.data.Location
      }
    }
    const response = await workshopManagerService.update(req.user.userId, name, logo, phone, description)
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
    const response = await workshopManagerService.delete(req.user.userId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router