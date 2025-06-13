const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");
const Message = require("../models/Message");

describe("Messages API", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    const lastMessage = await Message.findOne().sort({ createdAt: -1 });

    await Message.findByIdAndDelete(lastMessage._id);
  });

  test("POST /api/messages creates a new message", async () => {
    const res = await request(app)
      .post("/api/messages")
      .send({ text: "Hello World" });
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe("Hello World");
  });

  test("GET /api/messages returns messages", async () => {
    await Message.create({ text: "Test Message" });
    const res = await request(app).get("/api/messages");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
