const router = require("express").Router();
const controller = require("../controllers/comment");

// freeboard commnent
router.post("/fbcommentregister", controller.fbcommentregisterControl);
router.patch("/fbcommentedit", controller.fbcommenteditControl);
router.delete("/fbcommentdelete", controller.fbcommentdeleteControl);
// freeboard child commnent
router.post("/fbchildregister", controller.fbchildregisterControl);
router.patch("/fbchildedit", controller.fbchildeditControl);
router.delete("/fbchilddelete", controller.fbchilddeleteControl);

//crewboard comment
router.post("/cbcommentregister", controller.cbcommentregisterControl);
router.patch("/cbcommentedit", controller.cbcommenteditControl);
router.delete("/cbcommentdelete", controller.cbcommentdeleteControl);

module.exports = router;
