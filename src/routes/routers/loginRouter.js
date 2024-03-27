const { Router } = require("express");
const { userLoginController } = require("../../controllers/loginController");

const router = Router();

router.post("/", userLoginController);

module.exports = router;
