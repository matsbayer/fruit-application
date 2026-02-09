import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import { Fruit } from "./models/Fruit.js";

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/fruits";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const app = express();
app.use(express.json());

app.get("/meta/health", (req, res) => {
  res.send({ status: "ok" });
});

app.get("/fruits", async (req, res) => {
  try {
    // dont send the id
    const fruits = await Fruit.find().select({
      _id: 0,
      name: 1,
      color: 1,
      origin: 1,
      sweet: 1
    });
    res.send(fruits);
  } catch (error) {
    console.error("Error fetching fruits:", error);
    res.status(500).send({ error: "Could not fetch fruits!" });
  }
});

app.post("/fruits", async (req, res) => {
  try {
    const fruit = new Fruit(req.body);
    await fruit.save();
    res.status(201).send(fruit);
  } catch (error) {
    console.error("Error creating fruit:", error);
    res.status(400).send({ error: "Fruit could not be created!" });
  }
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
