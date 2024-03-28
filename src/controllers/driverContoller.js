const {
  createDriverService,
  fetchDriversService,
  onBoardDriverService,
} = require("../services/createDriverService");

const createDriversController = async (req, res) => {
  try {
    const { name, age, phone, sex } = req.body;
    await createDriverService({ name, age, phone, sex });
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

const getDriversController = async (req, res) => {
  try {
    const drivers = await fetchDriversService();
    res.status(200).json({ flag: "success", data: drivers });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

const onBoardDriverController = async (req, res) => {
  try {
    const { busBuddyId, travelDate, busId, boardingPoint } = req.body;
    await onBoardDriverService({
      busBuddyId,
      travelDate,
      busId,
      boardingPoint,
    });
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

module.exports = {
  createDriversController,
  getDriversController,
  onBoardDriverController,
};
