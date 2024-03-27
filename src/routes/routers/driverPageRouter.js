const { Router } = require("express");
const {
  createDriversController,
} = require("../../controllers/driverContoller");

const router = Router();

router.post("/create-driver", createDriversController);

module.exports = router;
