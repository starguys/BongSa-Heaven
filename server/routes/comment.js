const router = require('express').Router();
const controller = require('../controllers/comment');

// freeboard commnent
router.post('/fbcommentregister', controller.fbcommentregisterControl);
// router.post("/fbchildregister", controller.fbchildregisterControl);
router.patch('/fbcommentedit', controller.fbcommenteditControl);
router.delete('/fbcommentdelete', controller.fbcommentdeleteControl);

//crewboard comment
router.post('/cbcommentregister', controller.cbcommentregisterControl);
// router.patch('/cbcommentedit', controller.cbcommenteditControl);
// router.delete('/cbcommentdelete', controller.cbcommentdeleteControl);

module.exports = router;
