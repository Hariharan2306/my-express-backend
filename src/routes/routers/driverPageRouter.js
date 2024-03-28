const { Router } = require("express");
const {
  createDriversController,
  getDriversController,
  onBoardDriverController,
} = require("../../controllers/driverContoller");

const router = Router();

router.post("/create-driver", createDriversController);

router.get("/get-all-driver", getDriversController);
router.post("/on-board-driver", onBoardDriverController);

module.exports = router;
