const express = require("express");
const router = express.Router();
const landingPageRouter = require("./routers/landingPageRouter.js");
const loginRouter = require("./routers/loginRouter.js");

// Define routes
router.use("/access-approval", landingPageRouter);
router.use("/login", loginRouter);

// Export the router
// module.exports = router;
module.exports = router;
