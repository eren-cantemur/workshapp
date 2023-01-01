const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { WorkshopManager, Workshop, User, Address } = require('../models')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config');
const sequelize = require('../models').sequelize

describe("Test the address route", () => {

  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY
    category = await sequelize.query("INSERT INTO `Categories` (`name`, `createdAt`, `updatedAt`) VALUES ('Java', '2020-12-01 00:00:00', '2020-12-01 00:00:00');")
    categoryId = category[0]
    newWorkshopManager = await WorkshopManager.create({ name: "", photo: "", user: { email: "workshopManager77@worhsapp.manager", password: "123123" } }, { include: [{ association: WorkshopManager.User, }] });
    workshopManager_token = jwt.sign({ userId: newWorkshopManager.user.id, role: "workshopManager", roleId: newWorkshopManager.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    admin_token = jwt.sign({ userId: 1, role: "admin", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    workshop = await Workshop.create({ name: "Java class2", capacity: 20, description: "Java class with Alperen", categoryId: categoryId, workshopManagerId: newWorkshopManager.id, photo: "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg" })
    address = await Address.create({ country: "Turkey", city: "Istanbul", county: "Kadikoy", postalCode: "34732", openAddress: "Kadikoy", workshopId: workshop.id })
    address2 = await Address.create({ country: "Turkiye", city: "Istanbul", county: "Kadikoy", postalCode: "34732", openAddress: "Kadikoy", workshopId: workshop.id })
  })

  it("It should create new address to workshop", async () => {
    const response = await request(app)
      .post("/address")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ country: "England", city: "London", county: "London", postalCode: "54321", openAddress: "London", workshopId: workshop.id })
    expect(response.body.type).toBe("Success");
  });

  it("It should't create new address to workshop if empty field", async () => {
    const response = await request(app)
      .post("/address")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ country: "", city: "London", county: "London", postalCode: "54321", openAddress: "London", workshopId: workshop.id })
    expect(response.body.type).toBe("Error");
  });

  it("it should return address by id", async () => {
    const response = await request(app)
      .get("/address/id/" + address.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should't return address by id if empty field", async () => {
    const response = await request(app)
      .get("/address/id/wrongId")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
  });

  it("it should return all address to admin", async () => {
    const response = await request(app)
      .get("/address")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should update address", async () => {
    const response = await request(app)
      .put("/address")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ country: "Ingiltere", city: "London", county: "London", postalCode: "34732", openAddress: "London", id: address.id })
    expect(response.body.type).toBe("Success");
  });

  it("it should't update address if empty field", async () => {
    const response = await request(app)
      .put("/address")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ country: "", city: "London", county: "London", postalCode: "34732", openAddress: "London", id: address.id })
    expect(response.body.type).toBe("Error");
  });

  it("it should delete address", async () => {
    const response = await request(app)
      .delete("/address")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ id: address2.id })
    expect(response.body.type).toBe("Success");
  });

  it("it should't delete address if empty field", async () => {
    const response = await request(app)
      .delete("/address")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ id: "" }) //empty field
    expect(response.body.type).toBe("Error");
  });

  afterAll(async () => {
    await User.destroy({ where: { email: "workshopManager77@worhsapp.manager" } })
    await Workshop.destroy({ where: { name: "Java class2" } })
    await Address.destroy({ where: { id: address.id } })
    await Address.destroy({ where: { id: address2.id } })
    await Address.destroy({ where: { postalCode: "54321" } })
    await sequelize.query("DELETE FROM `Categories` WHERE `id` = " + categoryId)
    await db.sequelize.close()
  })
});