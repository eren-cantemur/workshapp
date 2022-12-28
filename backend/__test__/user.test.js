const request = require("supertest");
const app = require("../app");
const db = require("../models");
const {Customer, User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the login path", () => {
  const customer_email = "customer1@example.com"
  const password = "12345"
  const privateKey = JWTPRIVATEKEY;
  var token = "";
  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    newUser = await Customer.create({name: "",photo: "",user: {email: customer_email,password: hashedPassword}},{include: [{association: Customer.User,}]});
    token = await jwt.sign(
      { userID: newUser.user.id, role: "customer" },
      privateKey,
      { algorithm: "RS256",
        expiresIn: "14d" }
    );
  })
  it("It should verify user by token", async () => {
    const response = await request(app)
      .get("/user")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + token)
    expect(response.body.type).toBe("Success");
  });
  afterAll(async () => {
    await User.destroy({where: {email: customer_email}})
    await db.sequelize.close()
  })
});