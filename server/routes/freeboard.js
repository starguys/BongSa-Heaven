const router = require("express").Router();
const controller = require("../controllers/freeboard");

router.post("/freeregister", controller.freeregisterControl);
router.get("/freeinfo", controller.freeinfoControl);
router.patch("/freeedit", controller.freeeditControl);
router.delete("/freedelete", controller.freedeleteControl);

module.exports = router;
