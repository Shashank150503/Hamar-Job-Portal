const Application = require("../models/Application");

exports.applyJob = async (req,res)=>{
  const app = await Application.create({user:req.user.id,job:req.body.jobId});
  res.json(app);
};
