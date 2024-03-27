const express = require("express");
const router = express.Router();
const landingPageRouter = require("./routers/landingPageRouter.js");
const loginRouter = require("./routers/loginRouter.js");

// Define routes
router.use("/access-approval", landingPageRouter);
<<<<<<< HEAD
router.use("/driver", driverPageRouter);
=======
router.use("/login", loginRouter);
>>>>>>> 2d71e962f564c082d7338be37611897c32c60718

// Export the router
// module.exports = router;
module.exports = router;
