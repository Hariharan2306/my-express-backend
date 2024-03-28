const { Router } = require("express");
const {
  getSystems,
  updateImage,
  getAppImages,
  getAllMechanics,
  createMechanic,
} = require("../../controllers/landingPageController.js");

const router = Router();

router.get("/", getSystems);
router.post("/upload-image", updateImage);
router.get("/get-image", getAppImages);
router.get("/get-all-mechanic", getAllMechanics);
router.post("/create-mechanic", createMechanic);

module.exports = router;
