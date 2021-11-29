const router = require("express").Router();
const controller = require("../controllers/comment");

router.post("/register", controller.registerControl);
router.get("/list", controller.infoControl);
router.patch("/edit", controller.editControl);
router.delete("/withdrawal", controller.withdrawalControl);

module.exports = router;
