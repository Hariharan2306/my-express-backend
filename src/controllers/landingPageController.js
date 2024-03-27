const getSystems = async (req, res) => {
  try {
    console.log("test");
    res.status(200).json({ flag: "success" });
  } catch (error) {
    res.status(500).json({ flag: "error", error: error.message });
  }
};

module.exports = { getSystems };
