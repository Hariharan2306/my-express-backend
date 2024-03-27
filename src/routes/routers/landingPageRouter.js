const { Router } = require("express");
const {
  getSystems,
  updateImage,
  getAppImages,
} = require("../../controllers/landingPageController.js");

const router = Router();

router.get("/", getSystems);
router.post("/upload-image", updateImage);
router.get("/get-image", getAppImages);

module.exports = router;
