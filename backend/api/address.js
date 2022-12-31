const express = require('express');
const verifyRole = require('../middleware/roleVerif');
const router = express.Router();

const addressService = require("../services/address")

router.post("/", verifyRole("address", 1), async (req, res) => {
  const { country, city, county, postalCode, openAddress } = req.body
  if ( country && city && county && postalCode && openAddress) {
    const response = await addressService.create(country, city, county, postalCode, openAddress)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.get("/id/:id", verifyRole("address", 2), async (req, res) => {	
  const id  = req.params.id
  if (id) {
    const response = await addressService.getById(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})

router.get("/workshopId/:workshopId", verifyRole("address", 3), async (req, res) => {
  const workshopId  = req.params.workshopId
  if (workshopId) {
    const response = await addressService.getByWorkshopId(workshopId)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})

router.get("/", verifyRole("address", 4), async (req, res) => {
  const response = await addressService.getAll()
  res.status(response.type === "Error" ? 400 : 200).send(response);
})

router.put("/", verifyRole("address", 5), async (req, res) => {
  const { id, country, city, county, postalCode, openAddress } = req.body
  if (country && city && county && postalCode && openAddress && id) {
    const response = await addressService.update(id, country, city, county, postalCode, openAddress)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }
})
router.delete("/", verifyRole("address", 6), async (req, res) => {
  const { id } = req.body
  if (id) {
    const response = await addressService.delete(id)
    res.status(response.type === "Error" ? 400 : 200).send(response);
  } else {
    res.status(400).send({
      type: "Error",
      message: "Fields supplied not valid.",
    });
  }

})
module.exports = router