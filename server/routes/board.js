const router = require("express").Router();
const controller = require("../controllers/board");
const upload = require("../middlewares/multer");

router.post("/fbregister", upload.array("image"), controller.fbregisterControl);
router.get("/fblist", controller.fblistControl);
router.post("/fbinfo", controller.fbinfoControl);
router.patch("/fbedit", controller.fbeditControl);
router.delete("/fbdelete", controller.fbdeleteControl);

router.post("/cbregister", upload.array("image"), controller.cbregisterControl);
router.get("/cblist", controller.cblistControl);
router.patch("/cbedit", controller.cbeditControl);
router.delete("/cbdelete", controller.cbdeleteControl);

module.exports = router;
