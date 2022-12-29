const request = require("supertest");
const app = require("../app");
const db = require("../models");
const {User} = require('../models')
const bcrypt = require('bcrypt')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the login path", () => {
  const email = "login@example.com"
  const password = "12345"
  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    const createBody = {email: email, password: hashedPassword}
    await User.create(createBody)
  })
  it("It should response the POST method", async () => {
    const createLoginBody = {email: email, password: password}
    const response = await request(app)
      .post("/login")
      .expect(200)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Success");
  });
  it("It should error response for empty email", async () => {
    const createLoginBody = {email: "", password: password}
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response the wrong email", async () => {
    const createLoginBody = {email: "wrong_email@wrong.wrong", password: password}
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  it("It should error response the wrong password", async () => {
    const createLoginBody = {email: email, password: "wrong_pasword"}
    const response = await request(app)
      .post("/login")
      .expect(400)
      .set("Accept", "application/json")
      .send(createLoginBody);
    expect(response.body.type).toBe("Error");
  });
  afterAll(async () => {
    const result = await User.destroy({where: {email: email}})
    await db.sequelize.close()
  })
});