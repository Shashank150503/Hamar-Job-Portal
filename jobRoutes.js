const router = require("express").Router();
const {createJob,getJobs} = require("../controllers/jobController");
const auth = require("../middleware/auth");
router.post("/",auth,createJob);
router.get("/",getJobs);
module.exports = router;
