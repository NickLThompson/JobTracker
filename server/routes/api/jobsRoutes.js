const Express = require("express");
const router = require("router");
const {
    getJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
} = require("../../controllers/jobsController");

router.route("/")
.get(getJobs)
.post(createJob);

router
    .route("/:jobId")
    .get(getSingleJob)
    .put(updateJob)
    .delete(deleteJob);

module.exports = router;