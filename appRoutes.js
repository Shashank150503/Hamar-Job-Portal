const router = require("express").Router();
const {applyJob} = require("../controllers/appController");
const auth = require("../middleware/auth");
router.post("/",auth,applyJob);
module.exports = router;
