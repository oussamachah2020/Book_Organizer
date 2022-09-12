const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddelaware");
const { push } = require("../controllers/bookController");

router.post("/",protect, push);

module.exports = router;
