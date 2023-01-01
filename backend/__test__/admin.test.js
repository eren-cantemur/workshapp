const request = require("supertest");
const app = require("../app");
const db = require("../models");
const { Admin, User } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWTPRIVATEKEY } = require('../config/jwt.config')
const SALTROUNDS = require('../config/bcrypt.config').SALTROUNDS

describe("Test the admin route", () => {
  const admin_email1 = "admin1@example.com"
  const admin_email2 = "admin2@example.com"
  const admin_email3 = "admin3@example.com"
  const password = "12345"

  beforeAll(async () => {
    await db.sequelize.sync({ force: false, logging: false })
    const privateKey = JWTPRIVATEKEY;
    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
    admin_token = jwt.sign({ userId: 2, role: "admin", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    workshopManager_token = jwt.sign({ userId: 3, role: "workshopManager", roleId: 1 }, privateKey, { algorithm: "RS256", expiresIn: "14d" });

    newAdmin = await Admin.create({ name: "ahmet ahmet", user: { email: admin_email1, password: hashedPassword } }, { include: [{ association: Admin.User, }] });
    admin_token = jwt.sign({ userId: newAdmin.user.id, role: "admin", roleId: newAdmin.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    newAdmin3 = await Admin.create({ name: "mehmet mehmet", user: { email: admin_email3, password: hashedPassword } }, { include: [{ association: Admin.User, }] });
    admin3_token = jwt.sign({ userId: newAdmin3.user.id, role: "admin", roleId: newAdmin3.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
    newAdmin4 = await Admin.create({ name: "ali veli", user: { email: admin_email3, password: hashedPassword } }, { include: [{ association: Admin.User, }] });
    admin4_token = jwt.sign({ userId: newAdmin4.user.id, role: "admin", roleId: newAdmin4.id }, privateKey, { algorithm: "RS256", expiresIn: "14d" });
  })

  it("It should return admin id", async () => {
    const response = await request(app)
      .get("/admin/id/" + newAdmin.id)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should return admin by name", async () => {
    const response = await request(app)
      .get("/admin/name/" + newAdmin.name)
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
      .send({ name: newAdmin.name })
    expect(response.body.type).toBe("Success");
  });

  it("It should return all admin to admin", async () => {
    const response = await request(app)
      .get("/admin")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin_token)
    expect(response.body.type).toBe("Success");
  });

  it("It should't return all admin to admin if token is empty", async () => {
    const response = await request(app)
      .get("/admin")
      .expect(401)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer ")
    expect(response.body.type).toBe("Error");
  });

  it("it should update admin", async () => {
    const response = await request(app)
      .put("/admin")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin4_token)
      .send({ name: "ahmet ahmet",})
    expect(response.body.type).toBe("Success");
  });

  it("it should't update admin if empty field", async () => {
    const response = await request(app)
      .put("/admin")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin4_token)
    expect(response.body.type).toBe("Success");
  });

  it("it should delete admin", async () => {
    const response = await request(app)
      .delete("/admin")
      .expect(200)
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + admin3_token)
    expect(response.body.type).toBe("Success");
  });

  afterAll(async () => {
    await User.destroy({ where: { email: admin_email2 } })
    await db.sequelize.close()
  })
});