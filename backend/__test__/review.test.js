const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { Customer, WorkshopManager, Workshop, Review } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the review route", () => {
  const customer_email1 = "customer@review.com"
  const password = "12345"

  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY;
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    admin_token = jwt.sign({ userId: 2, role: "admin", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    newCustomer = await Customer.create({ name: "veli", photo: "", user: { email: customer_email1, password: hashedPassword } }, { include: [{ association: Customer.User, }] });
    newWorkshopManager = await WorkshopManager.create({ name: "mehmet", photo: "", user: { email: customer_email1, password: "5435345" } }, { include: [{ association: WorkshopManager.User, }] });
    customer_token = jwt.sign({ userId: newCustomer.user.id, role: "customer", roleId: newCustomer.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    newWorkshop = await Workshop.create({ name: "workshop_reserve", photo: "", description: "description", price: 100, workshopManagerId: newWorkshopManager.id })
    newReview = await Review.create({ comment: "comment", rate: 5, workshopId: newWorkshop.id, userId: newCustomer.userId })
    newReview2 = await Review.create({ comment: "comment2", rate: 5, workshopId: newWorkshop.id, userId: newCustomer.userId })
  })

  it("It should create a review", async () => {
    const response = await request(app)
      .post("/review")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ comment: "comment654", rate: 5, workshopId: newWorkshop.id });
    expect(response.body.type).toBe("Success");
  });

  it("It should't create a review if empty field", async () => {
    const response = await request(app)
      .post("/review")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ comment: "", rate: 5, workshopId: newWorkshop.id });
    expect(response.body.type).toBe("Error");
  });

  it("It should return review by id", async () => {
    const response = await request(app)
      .get("/review/id/" + newReview.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token);
    expect(response.body.type).toBe("Success");
  });

  it("It should return review by workshop id", async () => {
    const response = await request(app)
      .get("/review/workshopId/" + newWorkshop.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token);
    expect(response.body.type).toBe("Success");
  });

  it("It should return review by token", async () => {
    const response = await request(app)
      .get("/review/getByToken")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token);
    expect(response.body.type).toBe("Success");
  });

  it("It should return all reviews", async () => {
    const response = await request(app)
      .get("/review")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token);
    expect(response.body.type).toBe("Success");
  });

  it("It should update a review", async () => {
    const response = await request(app)
      .put("/review")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ comment: "comment_edited", rate: 3, id: newReview.id });
    expect(response.body.type).toBe("Success");
  });

  it("It should't update a review if empty field", async () => {
    const response = await request(app)
      .put("/review")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ comment: "", rate: 3, id: newReview.id });
    expect(response.body.type).toBe("Error");
  });

  it("It should change status of a review by admin", async () => {
    const response = await request(app)
      .put("/review/changeStatus")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({ id: newReview.id, isApproved: true });
    expect(response.body.type).toBe("Success");
  });

  it("It should't change status of a review by admin if empty field", async () => {
    const response = await request(app)
      .put("/review/changeStatus")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({ isApproved: true });
    expect(response.body.type).toBe("Error");
  });

  it("It should delete a review", async () => {
    const response = await request(app)
      .delete("/review")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ id: newReview2.id });
    expect(response.body.type).toBe("Success");
  });

  it("It should't delete a review if empty field", async () => {
    const response = await request(app)
      .delete("/review")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ id: newReview2.id });
    expect(response.body.type).toBe("Error");
  });

  afterAll(async () => {
    await Customer.destroy({ where: { userId: newCustomer.userId } })
    await WorkshopManager.destroy({ where: { userId: newWorkshopManager.userId } })
    await Workshop.destroy({ where: { id: newWorkshop.id } })
    await Review.destroy({ where: { id: newReview.id } })
    await Review.destroy({ where: { id: newReview2.id } })
    await Review.destroy({ where: { comment: "comment654" } })
    await db.sequelize.close()
  })
});