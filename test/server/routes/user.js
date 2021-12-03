const router = require("express").Router();
const controller = require("../controllers/user");

router.get("/info", controller.infoControl);
router.get("/nickcheck", controller.nickcheckControl);
router.get("/password", controller.passwordControl);
router.patch("/edit", controller.editControl);
router.delete("/withdrawal", controller.withdrawalControl);

module.exports = router;
