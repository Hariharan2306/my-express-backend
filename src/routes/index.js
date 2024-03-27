const express = require("express");
const router = express.Router();
const landingPageRouter = require("./routers/landingPageRouter.js");
const loginRouter = require("./routers/loginRouter.js");
const driverPageRouter = require("./routers/driverPageRouter.js");

// Define routes
router.use("/access-approval", landingPageRouter);
router.use("/driver", driverPageRouter);
router.use("/login", loginRouter);

// Export the router
// module.exports = router;
module.exports = router;
