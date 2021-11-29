const router = require("express").Router();
const controller = require("../controllers/board");

router.post("/register", controller.registerControl);
router.get("/list", controller.listControl);
router.patch("/edit", controller.editControl);
router.delete("/delete", controller.deleteControl);

module.exports = router;
