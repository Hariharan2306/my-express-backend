const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  age: { type: String, required: true },
  phone: { type: String, required: true },
  sex: { type: String, required: true },
});

const onBoardedDriversSchema = new mongoose.Schema({
  busBuddyId: { type: String },
  travelDate: { type: String },
  busId: { type: String },
  boardingPoint: { type: String },
});

const driversCollection = mongoose.model("drivers", userSchema);
const onBoardedDriversCollection = mongoose.model(
  "on_boarded_drivers",
  onBoardedDriversSchema
);

const createDriverService = async ({ name, age, phone, sex }) => {
  try {
    await driversCollection.findOneAndUpdate({ name, age, phone, sex });

    return { flag: "success" };
  } catch (error) {
    return { flag: "error", error: error.message };
  }
};

const fetchDriversService = async () => {
  try {
    const drivers = await driversCollection.find({});
    return drivers;
  } catch (error) {
    return { flag: "error", error: error.message };
  }
};

const onBoardDriverService = async ({
  busBuddyId,
  travelDate,
  busId,
  boardingPoint,
}) => {
  try {
    await onBoardedDriversCollection.create({
      busBuddyId,
      travelDate,
      busId,
      boardingPoint,
    });
    return { flag: "success" };
  } catch (error) {
    return { flag: "error", error: error.message };
  }
};

module.exports = {
  createDriverService,
  fetchDriversService,
  onBoardDriverService,
};
