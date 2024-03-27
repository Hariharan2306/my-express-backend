const express = require("express");
const router = express.Router();
const landingPageRouter = require("./routers/landingPageRouter.js");

// Define routes
router.use("/access-approval", landingPageRouter);

// Export the router
// module.exports = router;
module.exports = router;
