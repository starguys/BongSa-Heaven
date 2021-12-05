const router = require("express").Router();
const controller = require("../controllers/comment");

router.post("/fbregister", controller.fbregisterControl);
// router.post("/fbchildregister", controller.fbchildregisterControl);
// router.get("/fblist", controller.fbinfoControl);
// router.patch("/fbedit", controller.fbeditControl);
// router.delete("/fbdelete", controller.fbwithdrawalControl);

// router.post("/cbregister", controller.cbregisterControl);
// router.get("/cblist", controller.cbinfoControl);
// router.patch("/cbedit", controller.cbeditControl);
// router.delete("/cbdelete", controller.cbwithdrawalControl);

module.exports = router;
