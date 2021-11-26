const router = require("express").Router();
const controller = require("../controllers/auth");

router.post("/signin", controller.signinControl);
router.post("/signup", controller.signupControl);
router.post("/nickcheck", controller.nickcheckControl);
router.get('/google',controller.googleSinginControl)

module.exports = router;
