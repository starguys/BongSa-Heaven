const router = require("express").Router();
const controller = require("../controllers/board");

router.post("/fbregister", controller.fbregisterControl);
router.get("/fblist", controller.fblistControl);
router.patch("/fbedit", controller.fbeditControl);
router.delete("/fbdelete", controller.fbdeleteControl);

router.post("/cbregister", controller.cbregisterControl);
router.get("/cblist", controller.cblistControl);
router.patch("/cbedit", controller.cbeditControl);
router.delete("/cbdelete", controller.cbdeleteControl);

module.exports = router;
