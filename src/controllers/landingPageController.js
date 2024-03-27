const mongoose = require("mongoose");

const myBussSchema = new mongoose.Schema({
  operatorName: { type: String },
  fileName: { type: String },
  base64Data: { type: String },
});

const myBuss = mongoose.model("myBuss", myBussSchema);

const getSystems = async (req, res) => {
  try {
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

const updateImage = async (req, res) => {
  try {
    const { base64Data, fileName, operatorName } = req.body;
    const data = await myBuss.create({ base64Data, fileName, operatorName });
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

module.exports = { getSystems, updateImage, getAppImages };
