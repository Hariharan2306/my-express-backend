const { createDriverService } = require("../services/createDriverService");

const createDriversController = async (req, res) => {
  try {
    const { name, age, phone, sex } = req.body;
    await createDriverService({ name, age, phone, sex });
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

module.exports = { createDriversController };
