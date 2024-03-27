const createDriverService = async ({ name, age, phone, sex }) => {
  try {
    await findOneAndUpdate({ name, age, phone, sex });
    return { flag: "success" };
  } catch (error) {
    return { flag: "error", error: error.message };
  }
};

module.exports = { createDriverService };
