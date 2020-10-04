const { Router } = require("express");
const { BuildService } = require("../service.js");

const router = Router();

router.get("/", async(req, res) => {
    const buildService = new BuildService();
    const jobs = await buildService.getJobs();
    console.log(jobs);
    res.render("index", { jobs });
});

module.exports = router;
