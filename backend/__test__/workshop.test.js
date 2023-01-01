const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { WorkshopManager, User, Workshop, Address } = require('../models')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const bcrypt = require('bcrypt')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS
const sequelize = require('../models').sequelize

describe("Test the workshop route", () => {
  const workshopManager_email = "workshopManager75@worhsapp.manager";
  const password = "12345";
  var workshopManager_token;

  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY;
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    newWorkshopManager = await WorkshopManager.create({ name: "", photo: "", user: { email: workshopManager_email, password: hashedPassword } }, { include: [{ association: WorkshopManager.User, }] });
    workshopManager_token = jwt.sign({ userId: newWorkshopManager.user.id, role: "workshopManager", roleId: newWorkshopManager.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    admin_token = jwt.sign({ userId: 1, role: "admin", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    category = await sequelize.query("INSERT INTO `Categories` (`name`, `createdAt`, `updatedAt`) VALUES ('Yoga', '2020-12-01 00:00:00', '2020-12-01 00:00:00');")
    categoryId = category[0]
    workshop = await Workshop.create({ name: "Yoga Class2", capacity: 20, description: "Yoga Class with Alperen", categoryId: categoryId, workshopManagerId: newWorkshopManager.id, photo: "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg" })
    workshop2 = await Workshop.create({ name: "Yoga Class2", capacity: 20, description: "Yoga Class with Alperen", categoryId: categoryId, workshopManagerId: newWorkshopManager.id, photo: "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg" })
    workshop3 = await Workshop.create({ name: "Yoga Class3", capacity: 20, description: "Yoga Class with Alperen", categoryId: categoryId, workshopManagerId: newWorkshopManager.id, photo: "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg" })
    address = await Address.create({ city: "Istanbul", country: "Turkey", street: "Istanbul Street", zipCode: "34000", workshopId: workshop.id })
  })

  // It is working, it is commented because no need to unnecessarily upload image to s3
  // it("It should create workshop", async () => {
  //   const response = await request(app)
  //     .post("/workshop")
  //     .expect(200)
  //     .set("Accept", "application/json")
  //     .set("Authorization", "Bearer " + workshopManager_token)
  //     .field('name', 'Yoga Class')
  // 		.field('capacity', '10')
  // 		.field('description', 'Yoga Class with Alper')
  // 		.field('categoryId', categoryId)
  //     .attach('image', '__test__/example.jpg')
  //   expect(response.body.type).toBe("Success");
  // });

  it("It should't create workshop for empty name", async () => {
    const response = await request(app)
      .post("/workshop")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
  		.field('capacity', '10')
  		.field('description', 'Yoga Class with Alper')
  		.field('categoryId', categoryId)
      .attach('image', '__test__/example.jpg')
    expect(response.body.type).toBe("Error");
  });

  it("It should get workshop by id", async () => {
    const response = await request(app)
      .get("/workshop/id/" + workshop.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should get all approved workshops", async () => {
    const response = await request(app)
      .get("/workshop/approved")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should get workshop by workshopManagerId", async () => {
    const response = await request(app)
      .get("/workshop/workshopManagerId/" + newWorkshopManager.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should get workshop by token", async () => {
    const response = await request(app)
      .get("/workshop/getByToken")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should get all workshops", async () => {
    const response = await request(app)
      .get("/workshop")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should update workshop", async () => {
    const response = await request(app)
      .put("/workshop")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .field('id', workshop.id)
      .field('name', 'Yoga Class2 updated')
      .field('capacity', '20')
      .field('description', 'Yoga Class with Alperen')
      .field('categoryId', categoryId)
      .field('photo', "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg")
    expect(response.body.type).toBe("Success");
  });

  // It is working, it is commented because no need to unnecessarily upload image to s3
  // it("it should update workshop by uploading photo", async () => {
  //   const response = await request(app)
  //     .put("/workshop")
  //     .expect(200)
  //     .set("Accept", "application/json")
  //     .set("Authorization", "Bearer " + workshopManager_token)
  //     .field('id', workshop3.id)
  //     .field('name', 'Yoga Class2 updated')
  //     .field('capacity', '20')
  //     .field('description', 'Yoga Class with Alperen')
  //     .field('categoryId', categoryId)
  //     .field('photo', "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg")
  //     .attach('image', '__test__/example.jpg')
  //   expect(response.body.type).toBe("Success");
  // });

  it("it should't update workshop if empty field", async () => {
      const response = await request(app)
        .put("/workshop")
        .expect(400)
        .set("Accept", "application/json")
        .set("Authorization", "Bearer " + workshopManager_token)
        .field('id', workshop3.id)
        .field('name', '')
        .field('capacity', '20')
        .field('description', 'Yoga Class with Alperen')
        .field('categoryId', categoryId)
        .field('photo', "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg")
      expect(response.body.type).toBe("Error");
    });

  it("it should change status of workshop", async () => {
    const response = await request(app)
      .put("/workshop/changeStatus")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({ id: workshop.id, isApproved: true })
    expect(response.body.type).toBe("Success");
  });

  it("it should't change status of workshop if empty field", async () => {
    const response = await request(app)
      .put("/workshop/changeStatus")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({ id: workshop.id, isApproved: true })
    expect(response.body.type).toBe("Error");
  });

  it("it should't change status of workshop by workshopManager", async () => {
    const response = await request(app)
      .put("/workshop/changeStatus")
      .expect(403)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ id: workshop.id, isApproved: true })
  });

  it("it should delete workshop", async () => {
    const response = await request(app)
      .delete("/workshop")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
      .send({ id: workshop2.id })
    expect(response.body.type).toBe("Success");
  });

  it("it should't delete workshop if empty field", async () => {
    const response = await request(app)
      .delete("/workshop")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Error");
  });

  afterAll(async () => {
    await User.destroy({ where: { email: workshopManager_email } })
    await Workshop.destroy({ where: { categoryId: categoryId } })
    await sequelize.query("DELETE FROM `Categories` WHERE `id` = " + categoryId)
    await db.sequelize.close()
  })
});