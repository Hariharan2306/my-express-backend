const createDriverService = async ({ name, age, phone, sex }) => {
  try {
    const userSchema = new mongoose.Schema({
      name: { type: String, required: true, unique: true },
      age: { type: String, required: true },
      phone: { type: String, required: true },
      sex: { type: String, required: true },
    });

    const driversCollection = mongoose.model("drivers", userSchema);
    await driversCollection.findOneAndUpdate({ name, age, phone, sex });

    return { flag: "success" };
  } catch (error) {
    return { flag: "error", error: error.message };
  }
};

module.exports = { createDriverService };
