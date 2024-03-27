const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);

const userLoginController = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(401).json({ flag: "error", message: "User not found" });
    }
    if (user.password !== password) {
      return res
        .status(401)
        .json({ flag: "error", message: "Invalid password" });
    }
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

module.exports = { userLoginController };
