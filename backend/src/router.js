const express = require("express");

const router = express.Router();

const smartphoneControllers = require("./controllers/smartphoneControllers");

router.get("/smartphones", smartphoneControllers.browse);
router.get("/smartphones/:id", smartphoneControllers.read);
router.put("/smartphones/:id", smartphoneControllers.edit);
router.post("/smartphones", smartphoneControllers.add);
router.delete("/smartphones/:id", smartphoneControllers.destroy);

module.exports = router;
