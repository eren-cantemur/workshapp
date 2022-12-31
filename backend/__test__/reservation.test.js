const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { Customer, WorkshopManager, Workshop, Reservation } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the reservation route", () => {
  const customer_email1 = "customer@reservation.com"
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
    newReservation = await Reservation.create({ date: "2021-05-05", userId: newCustomer.userId, workshopId: newWorkshop.id })
    newReservation2 = await Reservation.create({ date: "2021-05-05", userId: newCustomer.userId, workshopId: newWorkshop.id })
  })

  it("It should create a reservation", async () => {
    const response = await request(app)
      .post("/reservation")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ date: "2021-05-05", workshopId: newWorkshop.id });
    expect(response.body.type).toBe("Success");
  });

  it("It should not create a reservation", async () => {
    const response = await request(app)
      .post("/reservation")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ workshopId: newWorkshop.id });
    expect(response.body.type).toBe("Error");
  });

  it("it should return reservation by id", async () => {
    const response = await request(app)
      .get("/reservation/id/" + newReservation.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token);
    expect(response.body.type).toBe("Success");
  });

  it("it should return reservation by workshop id", async () => {
    const response = await request(app)
      .get("/reservation/workshopId/1")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token);
    expect(response.body.type).toBe("Success");
  });

  it("it should return reservation by token", async () => {
    const response = await request(app)
      .get("/reservation/getByToken")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token);
    expect(response.body.type).toBe("Success");
  });

  it("it should return all reservations to admin", async () => {
    const response = await request(app)
      .get("/reservation")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token);
    expect(response.body.type).toBe("Success");
  });

  it("it should update reservation", async () => {
    const response = await request(app)
      .put("/reservation")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ id: newReservation.id, date: "2023-05-05" });
    expect(response.body.type).toBe("Success");
  });

  it("it should not update reservation", async () => {
    const response = await request(app)
      .put("/reservation")
      .expect(400)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ id: newReservation.id });
    expect(response.body.type).toBe("Error");
  });

  it("it should delete reservation", async () => {
    const response = await request(app)
      .delete("/reservation")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + customer_token)
      .send({ id: newReservation2.id });
    expect(response.body.type).toBe("Success");
  });


  afterAll(async () => {
    await Customer.destroy({ where: { userId: newCustomer.userId } })
    await WorkshopManager.destroy({ where: { userId: newWorkshopManager.userId } })
    await Workshop.destroy({ where: { id: newWorkshop.id } })
    await Reservation.destroy({ where: { id: newReservation.id } })
    await Reservation.destroy({ where: { id: newReservation2.id } })
    await db.sequelize.close()
  })
});