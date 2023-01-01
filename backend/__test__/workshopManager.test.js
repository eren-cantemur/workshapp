const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { WorkshopManager, User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the workshopManager route", () => {
  const workshopManager_email1 = "workshopManager1@example.com"
  const workshopManager_email3 = "workshopManager3@example.com"
  const password = "12345"

  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY;
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    admin_token = jwt.sign({ userId: 2, role: "admin", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    workshopManager_token = jwt.sign({ userId: 3, role: "workshopManager", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });

    newWorkshopManager = await WorkshopManager.create({ name: "ali", photo: "", user: { email: workshopManager_email1, password: hashedPassword } }, { include: [{ association: WorkshopManager.User, }] });
    workshopManager_token = jwt.sign({ userId: newWorkshopManager.user.id, role: "workshopManager", roleId: newWorkshopManager.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    newWorkshopManager3 = await WorkshopManager.create({ name: "", photo: "", user: { email: workshopManager_email3, password: hashedPassword } }, { include: [{ association: WorkshopManager.User, }] });
    workshopManager3_token = jwt.sign({ userId: newWorkshopManager3.user.id, role: "workshopManager", roleId: newWorkshopManager3.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
  })

  it("It should return workshopManager id", async () => {
    const response = await request(app)
      .get("/workshopManager/id/" + newWorkshopManager.user.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should return workshopManager by name", async () => {
    const response = await request(app)
      .get("/workshopManager/name/" + newWorkshopManager.name)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ name: newWorkshopManager.name })
    expect(response.body.type).toBe("Success");
  });

  it("It should return all workshopManager to admin", async () => {
    const response = await request(app)
      .get("/workshopManager")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should't return all workshopManager to admin if token is empty", async () => {
    const response = await request(app)
      .get("/workshopManager")
      .expect(401)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer ")
    expect(response.body.type).toBe("Error");
  });

  // // It is working, it is commented because no need to unnecessarily upload image to s3
  // it("it should update workshopManager", async () => {
  //   const response = await request(app)
  //     .put("/workshopManager")
  //     .expect(200)
  //     .set("Accept", "application/json")
  //     .set("Authorization", "Bearer " + workshopManager_token)
  //     .field("name", "ali")
  //     .field("logo", "https://example.com")
  //     .field("description", "description")
  //     .field("phone", "5555555555")
  //     .attach('image', '__test__/example.jpg')
  //   expect(response.body.type).toBe("Success");
  // });

  it("it should't update workshopManager if empty field", async () => {
      const response = await request(app)
        .put("/workshopManager")
        .expect(400)
        .set("Accept", "application/json")
        .set("Authorization", "Bearer " + workshopManager_token)
        .field("name", "")
        .field("logo", "https://example.com")
        .field("description", "")
        .field("phone", "5555555555")
        .attach('image', '__test__/example.jpg')
      expect(response.body.type).toBe("Error");
    });

  it("it should delete workshopManager", async () => {
    const response = await request(app)
      .delete("/workshopManager")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager3_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should't delete workshopManager if empty field", async () => {
    const response = await request(app)
      .delete("/workshopManager")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager3_token)
    expect(response.body.type).toBe("Error");
  });

  afterAll(async () => {
    await User.destroy({ where: { email: workshopManager_email1 } })
    await User.destroy({ where: { email: workshopManager_email3 } })
    await db.sequelize.close()
  })
});