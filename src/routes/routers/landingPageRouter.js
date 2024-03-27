const { Router } = require("express");
const {
  getSystems,
  updateImage,
} = require("../../controllers/landingPageController.js");

const router = Router();

router.get("/", getSystems);
router.post("/upload-image", updateImage);

module.exports = router;
