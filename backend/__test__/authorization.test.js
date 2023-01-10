const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { User } = require('../models')

describe("Test the authotization paths", () => {
  const customer_email = "register_customer@example.com"
  const admin_email = "register_admin@example.com"
  const workshopManager_email = "register_workshopManager@example.com"
  const password = "12345"
  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
  })
  it("It should't create customer with wrong role", async () => {
    const createRegisterBody = { email: customer_email, password: password, role: "cUst0mEr" }
    const response = await request(app)
      .post("/register")
      .expect(400)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should't create customer with empty email", async () => {
    const createRegisterBody = { email: "", password: password, role: "cUst0mEr" }
    const response = await request(app)
      .post("/register")
      .expect(400)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should create customer", async () => {
    const createRegisterBody = { email: customer_email, password: password, role: "customer" }
    const response = await request(app)
      .post("/register")
      .expect(200)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should't create customer again", async () => {
    const createRegisterBody = { email: customer_email, password: password, role: "customer" }
    const response = await request(app)
      .post("/register")
      .expect(400)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response for empty email", async () => {
    const createLoginBody = { email: "", password: password, role: "customer" }
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response the wrong email", async () => {
    const createLoginBody = { email: "wrong_email@wrong.wrong", password: password, role: "customer" }
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response the wrong password", async () => {
    const createLoginBody = { email: customer_email, password: "wrong_password", role: "customer" }
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response the unknown role name", async () => {
    const createLoginBody = { email: customer_email, password: password, role: "cUst0mEr" }
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response for trying login customer auth with admin role ", async () => {
    const createLoginBody = { email: customer_email, password: password, role: "admin" }
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response for trying login customer auth with workshopManager role ", async () => {
    const createLoginBody = { email: customer_email, password: password, role: "workshopManager" }
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should login created customer", async () => {
    const createLoginBody = { email: customer_email, password: password, role: "customer" }
    const response = await request(app)
      .post("/login")
      .expect(200)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should create admin", async () => {
    const createRegisterBody = { email: admin_email, password: password, role: "admin" }
    const response = await request(app)
      .post("/register")
      .expect(200)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should login created admin", async () => {
    const createLoginBody = { email: admin_email, password: password, role: "admin" }
    const response = await request(app)
      .post("/login")
      .expect(200)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should create workshopManager", async () => {
    const createRegisterBody = { email: workshopManager_email, password: password, role: "workshopManager" }
    const response = await request(app)
      .post("/register")
      .expect(200)
      .set("Accept", "application/json")
      .send(createRegisterBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should error response for trying login workshopManager auth with customer role ", async () => {
    const createLoginBody = { email: workshopManager_email, password: password, role: "customer" }
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should login created workshopManager", async () => {
    const createLoginBody = { email: workshopManager_email, password: password, role: "workshopManager" }
    const response = await request(app)
      .post("/login")
      .expect(200)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Success");
  });
  afterAll(async () => {
    await User.destroy({ where: { email: customer_email } })
    await User.destroy({ where: { email: admin_email } })
    await User.destroy({ where: { email: workshopManager_email } })
    await db.sequelize.close()
  })
});