import { Express } from "express";
import router from "router";
import {
    getJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
} from ("../../controllers/jobsController");

router.route("/")
.get(getJobs)
.post(createJob);

router
    .route("/:jobId")
    .get(getSingleJob)
    .put(updateJob)
    .delete(deleteJob);

module.exports = router;