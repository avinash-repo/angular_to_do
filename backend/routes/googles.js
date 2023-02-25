const express = require("express");
const router = express.Router();
const googleController = require("../controllers/googleController");  
router.get("/translate", googleController.translateText); 
module.exports = router;