const mongoose = require("mongoose");

const myBussSchema = new mongoose.Schema({
  operatorName: { type: String },
  fileName: { type: String },
  base64Data: { type: String },
  noOfSeats: { type: String },
  rating: { type: String },
});

const mechanicsSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: String },
  sex: { type: String },
  shop: { type: String },
  experience: { type: String },
});

const myBuss = mongoose.model("myBuss", myBussSchema);
const mechanics = mongoose.model("mechanics", mechanicsSchema);

const getSystems = async (req, res) => {
  try {
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

const updateImage = async (req, res) => {
  try {
    const { base64Data, fileName, operatorName, noOfSeats, rating } = req.body;
    const data = await myBuss.create({
      base64Data,
      fileName,
      operatorName,
      noOfSeats,
      rating,
    });
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

const getAppImages = async (req, res) => {
  try {
    const images = await myBuss.find();
    res.status(200).json({ flag: "success", data: images });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

const getAllMechanics = async (req, res) => {
  try {
    const mechanicsData = await mechanics.find({});
    res.status(200).json({ flag: "success", data: mechanicsData });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

const createMechanic = async (req, res) => {
  try {
    const { age, area, experience, mechanicName, sex } = req.body;
    const mechanicsData = await mechanics.create({
      name: mechanicName,
      age,
      sex,
      shop: area,
      experience,
    });
    res.status(200).json({ flag: "success", data: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

module.exports = {
  getSystems,
  updateImage,
  getAppImages,
  getAllMechanics,
  createMechanic,
};
