const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const s3Service = require("../services/s3")
const workshopService = require("../services/workshop")

router.post("/", verifyRole("workshop", 1), async (req, res) => {
  const { name, capacity, description, categoryId, addressId } = req.body
  if (name && capacity && description && req.files.image && categoryId && addressId) {
    const uploadResponse = await s3Service.upload(req.files.image)
    if (uploadResponse.type == "Error") {
      res.status(400).send(uploadResponse.message)
      return
    }
    else {
      const photo = uploadResponse.data.Location;
      const response = await workshopService.create(name, capacity, description, photo, categoryId, req.user.roleId, addressId)
      res.status(response.type === "Error" ? 400 : 200).send(response);
    }

  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/id/:id", verifyRole("workshop", 2), async (req, res) => {
  const  id  = req.params.id
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
router.get("/approved", verifyRole("workshop", 3), async (req, res) => {
  const response = await workshopService.getApproved()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.get("/workshopManagerId/:workshopManagerId", verifyRole("workshop", 3), async (req, res) => {
  const  workshopManagerId  = req.params.workshopManagerId
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
router.get("/getByToken", verifyRole("workshop", 3), async (req, res) => {
  if (req.user) {
    const response = await workshopService.getByWorkshopManagerId(req.user.roleId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/", verifyRole("workshop", 7), async (req, res) => {
  const response = await workshopService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})
router.put("/", verifyRole("workshop", 5), async (req, res) => {
  var { id, name, capacity, description, photo, categoryId, addressId} = req.body
  if (id && name && capacity && description && photo && categoryId && addressId) {
    if (req.files) {
      const uploadResponse = await s3Service.upload(req.files.image)
      if (uploadResponse.type == "Error") {
        res.status(400).send(uploadResponse.message)
        return
      }
      else {
        photo = uploadResponse.data.Location
      }
    }
    const response = await workshopService.update(id, name, capacity, description, photo, req.user.roleId, categoryId, addressId)

    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.put("/changeStatus", verifyRole("workshop", 7), async (req, res) => {
  const { id, isApproved } = req.body
  if (id && (isApproved == 1 || isApproved == 0)) {

    const response = await workshopService.changeStatus(id, isApproved)
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
    const response = await workshopService.delete(id, req.user.roleId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router