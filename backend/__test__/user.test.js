const request = require("supertest");
const app = require("../app");
const db = require("../models");
const {Customer, User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the user route", () => {
  const customer_email1 = "customer1@example.com"
  const customer_email2 = "customer2@example.com"
  const customer_email3 = "customer3@example.com"
  const password = "12345"
  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY;
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    admin_token = jwt.sign({ userId: 2, role: "admin", roleId : 1 },privateKey,{ algorithm: "RS256",expiresIn: "14d" });    
    workshopManager_token = jwt.sign({ userId: 3, role: "workshopManager", roleId : 1 },privateKey,{ algorithm: "RS256",expiresIn: "14d" });    
    
    newCustomer = await Customer.create({name: "",photo: "",user: {email: customer_email1,password: hashedPassword}},{include: [{association: Customer.User,}]});
    customer_token = jwt.sign({ userId: newCustomer.user.id, role: "customer", roleId : newCustomer.id },privateKey,{ algorithm: "RS256",expiresIn: "14d" });
    newCustomer3 = await Customer.create({name: "",photo: "",user: {email: customer_email3,password: hashedPassword}},{include: [{association: Customer.User,}]});
    customer3_token = jwt.sign({ userId: newCustomer3.user.id, role: "customer", roleId : newCustomer3.id },privateKey,{ algorithm: "RS256",expiresIn: "14d" });
  })
  it("It should return user id", async () => {
    const response = await request(app)
      .get("/user/id=" + newCustomer.user.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
    expect(response.body.type).toBe("Success");
  });
  it("It should return all users to admin", async () => {
    const response = await request(app)
      .get("/user")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });
  it("It should't return all users to admin if token is empty", async () => {
    const response = await request(app)
      .get("/user")
      .expect(401)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer ")
    expect(response.body.type).toBe("Error");
  });
  it("It should update customer mail and password", async () => {
    const response = await request(app)
      .put("/user")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({email: customer_email2, password: password})
    expect(response.body.type).toBe("Success");
  });
  it("It should't update customer mail and password if empty", async () => {
    const response = await request(app)
      .put("/user")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({email: "", password: ""})
    expect(response.body.type).toBe("Error");
  });
  it("It should change customer status from admin request", async () => {
    const response = await request(app)
      .put("/user/changestatus")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({id : newCustomer.user.id, isApproved: true})
    expect(response.body.type).toBe("Success");
  });
  it("It should't change customer status from admin request if id empty", async () => {
    const response = await request(app)
      .put("/user/changestatus")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({id : null, isApproved: true})
    expect(response.body.type).toBe("Error");
  });
  it("It should't change customer status from customer request", async () => {
    const response = await request(app)
      .put("/user/changestatus")
      .expect(403)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({id : newCustomer.user.id, isApproved: true})
  });
  it("It should delete customer", async () => {
    const response = await request(app)
      .delete("/user")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer3_token)
    expect(response.body.type).toBe("Success");
  });
  
  afterAll(async () => {
    await User.destroy({where: {email: customer_email2}})
    await db.sequelize.close()
  })
});