import { Express } from "express";
import jobsRoutes from "./jobsRoutes";

router.use("/jobs", jobsRoutes);

export default router;