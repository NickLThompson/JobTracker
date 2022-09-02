const Express = require("express");
const jobsRoutes = require("./jobsRoutes");

router.use("/jobs", jobsRoutes);

module.exports = router;