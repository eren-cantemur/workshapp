const request = require("supertest");
const app = require("../app");
const db = require("../models");
const {Customer, Admin, WorkshopManager, User} = require('../models')

describe("Test the register path", () => {
  const customer_email = "register_customer@example.com"
  const admin_email = "register_admin@example.com"
  const workshopManager_email = "register_workshopManager@example.com"
  const password = "12345"
  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
  })
  it("It should create customer", async () => {
    const createRegisterBody = {email: customer_email, password: password, role: "customer"}
    const response = await request(app)
      .post("/register")
      .expect(200)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should create admin", async () => {
    const createRegisterBody = {email: admin_email, password: password, role: "admin"}
    const response = await request(app)
      .post("/register")
      .expect(200)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should create workshopManager", async () => {
    const createRegisterBody = {email: workshopManager_email, password: password, role: "workshopManager"}
    const response = await request(app)
      .post("/register")
      .expect(200)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Success");
  });
  afterAll(async () => {
    const customerUserId = await User.findOne({where: {email: customer_email}})
    const adminUserId = await User.findOne({where: {email: admin_email}})
    const workshopManagerUserId = await User.findOne({where: {email: workshopManager_email}})
    console.log(customerUserId.id)
    console.log(adminUserId.id)
    console.log(workshopManagerUserId.id)
    await User.destroy({where: {email: customer_email}})
    await User.destroy({where: {email: admin_email}})
    await User.destroy({where: {email: workshopManager_email}})
    await Customer.destroy({where: {userId: customerUserId.id}})
    await Admin.destroy({where: {userId: adminUserId.id}})
    await WorkshopManager.destroy({where: {userId: workshopManagerUserId.id}})
    await db.sequelize.close()
  })
});