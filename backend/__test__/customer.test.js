const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { Customer, User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the customer route", () => {
  const customer_email1 = "customer1@example.com"
  const customer_email2 = "customer2@example.com"
  const customer_email3 = "customer3@example.com"
  const password = "12345"

  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY;
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    admin_token = jwt.sign({ userId: 2, role: "admin", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    workshopManager_token = jwt.sign({ userId: 3, role: "workshopManager", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });

    newCustomer = await Customer.create({ name: "ali", photo: "", user: { email: customer_email1, password: hashedPassword } }, { include: [{ association: Customer.User, }] });
    customer_token = jwt.sign({ userId: newCustomer.user.id, role: "customer", roleId: newCustomer.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    newCustomer3 = await Customer.create({ name: "", photo: "", user: { email: customer_email3, password: hashedPassword } }, { include: [{ association: Customer.User, }] });
    customer3_token = jwt.sign({ userId: newCustomer3.user.id, role: "customer", roleId: newCustomer3.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
  })

  it("It should return customer id", async () => {
    const response = await request(app)
      .get("/customer/id")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should return customer by name", async () => {
    const response = await request(app)
      .get("/customer/name/" + newCustomer.name)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ name: newCustomer.name })
    expect(response.body.type).toBe("Success");
  });

  it("It should return all customer to admin", async () => {
    const response = await request(app)
      .get("/customer")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should't return all customer to admin if token is empty", async () => {
    const response = await request(app)
      .get("/customer")
      .expect(401)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer ")
    expect(response.body.type).toBe("Error");
  });

  // It is working, it is commented because no need to unnecessarily upload image to s3
  // it("it should update customer", async () => {
  //   const response = await request(app)
  //     .put("/customer")
  //     .expect(200)
  //     .set("Accept", "application/json")
  //     .set("Authorization", "Bearer " + customer_token)
  //     .field("name", "ali")
  //     .field("photo", "https://example.com")
  //     .attach('image', '__test__/example.jpg')
  //   expect(response.body.type).toBe("Success");
  // });

  it("it should't update customer if empty field", async () => {
    const response = await request(app)
      .put("/customer")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .field("name", "")
      .field("photo", "https://example.com")
    expect(response.body.type).toBe("Error");
  });

  it("it should delete customer", async () => {
    const response = await request(app)
      .delete("/customer")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer3_token)
    expect(response.body.type).toBe("Success");
  });

  afterAll(async () => {
    await User.destroy({ where: { email: customer_email2 } })
    await db.sequelize.close()
  })
});