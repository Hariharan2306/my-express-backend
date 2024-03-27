const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const authMechanism = "DEFAULT&authSource=admin";
    const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authMechanism=${authMechanism}`;
    await mongoose.connect(url);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = { connectDatabase };
