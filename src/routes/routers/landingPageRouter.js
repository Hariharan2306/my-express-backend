const { Router } = require("express");
const { getSystems } = require("../../controllers/landingPageController.js");

const router = Router();

router.get("/", getSystems);

module.exports = router;
