import { Fruit } from "./models/Fruit.js";

const seedData = [
  { name: "Apple", color: "red", origin: "Germany", sweet: true, img: "" },
  { name: "Lemon", color: "yellow", origin: "Italy", sweet: false, img: "" },
  { name: "Banana", color: "yellow", origin: "Ecuador", sweet: true, img: "" },
  { name: "Blueberry", color: "blue", origin: "Poland", sweet: true, img: "" },
  { name: "Mango", color: "orange", origin: "India", sweet: true, img: "" },
  { name: "Lime", color: "green", origin: "Mexico", sweet: false, img: "" },
  { name: "Strawberry", color: "red", origin: "Spain", sweet: true, img: "" },
  { name: "Kiwi", color: "brown", origin: "New Zealand", sweet: true, img: "" },
  { name: "Grapefruit", color: "pink", origin: "USA", sweet: false, img: "" },
  { name: "Pineapple", color: "yellow", origin: "Costa Rica", sweet: true, img: "" },
  { name: "Avocado", color: "dark green", origin: "Peru", sweet: false, img: "" },
  { name: "Cherry", color: "dark red", origin: "Turkey", sweet: true, img: "" },
  { name: "Pear", color: "green", origin: "Netherlands", sweet: true, img: "" },
  { name: "Orange", color: "orange", origin: "South Africa", sweet: true, img: "" },
  { name: "Dragonfruit", color: "pink", origin: "Vietnam", sweet: true, img: "" },
];

export const seedFruitDB = async () => {
  try {
    const count = await Fruit.countDocuments();
    if (count === 0) {
      console.log("DB is empty. Start Seeding...");
      await Fruit.insertMany(seedData);
      console.log("Seeding completed!");
    } else {
      console.log("DB already has data.");
    }
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};
