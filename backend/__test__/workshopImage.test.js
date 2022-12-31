const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { WorkshopManager, User, Workshop, WorkshopImage } = require('../models')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const bcrypt = require('bcrypt');
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS
const sequelize = require('../models').sequelize

describe("Test the workshopImage route", () => {
  const workshopManager_email = "workshopManager75@image.manager";
  const password = "12345";

  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY;
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    newWorkshopManager = await WorkshopManager.create({ name: "", photo: "", user: { email: workshopManager_email, password: hashedPassword } }, { include: [{ association: WorkshopManager.User, }] });
    workshopManager_token = jwt.sign({ userId: newWorkshopManager.user.id, role: "workshopManager", roleId: newWorkshopManager.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    admin_token = jwt.sign({ userId: 1, role: "admin", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    category = await sequelize.query("INSERT INTO `Categories` (`name`, `createdAt`, `updatedAt`) VALUES ('Yoga', '2020-12-01 00:00:00', '2020-12-01 00:00:00');")
    categoryId = category[0]
    newWorkshop = await Workshop.create({ name: "Bike Class2", capacity: 20, description: "Bike Class with Alperen", categoryId: categoryId, workshopManagerId: newWorkshopManager.id, photo: "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg" })
    newWorkshopImage = await WorkshopImage.create({ path: "https://workshapps3.s3.eu-central-1.amazonaws.com/1672427194124.jpg", workshopId: newWorkshop.id })
  })

  // It is working, it is commented because no need to unnecessarily upload image to s3
  // it("It should create workshopImage", async () => {
  //   const response = await request(app)
  //     .post("/workshopImage")
  //     .expect(200)
  //     .set("Accept", "application/json")
  //     .set("Authorization", "Bearer " + workshopManager_token)
  //     .field('workshopId', newWorkshop.id)
  //     .attach('image', '__test__/example.jpg')
  //   expect(response.body.type).toBe("Success");
  // });

  it("It should get workshopImage by workshopId", async () => {
    const response = await request(app)
      .get("/workshopImage/workshopId/" + newWorkshop.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + workshopManager_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should get all workshopImage by admin", async () => {
    const response = await request(app)
      .get("/workshopImage")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should delete workshopImage by admin", async () => {
    const response = await request(app)
      .delete("/workshopImage")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({ id: newWorkshopImage.id })
    expect(response.body.type).toBe("Success");
  });


  afterAll(async () => {
    await User.destroy({ where: { email: workshopManager_email } })
    await Workshop.destroy({ where: { categoryId: categoryId } })
    await sequelize.query("DELETE FROM `Categories` WHERE `id` = " + categoryId)
    await WorkshopImage.destroy({ where: { workshopId: newWorkshop.id } })
    await db.sequelize.close()
  })
});