const { Router } = require("express");
const {
  createDriversController,
  getDriversController,
} = require("../../controllers/driverContoller");

const router = Router();

router.post("/create-driver", createDriversController);

router.get("/get-all-driver", getDriversController);

module.exports = router;
