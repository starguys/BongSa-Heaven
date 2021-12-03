const router = require("express").Router();
const controller = require("../controllers/auth");

router.post("/signin", controller.signinControl);
router.post("/signup", controller.signupControl);
router.post("/signout", controller.signoutControl);
router.post("/nickcheck", controller.nickcheckControl);
router.get("/refreshtoken", controller.refreshtokenControl);

//refresh 로 acceess 교환

router.post("/kakao", controller.kakaoControl);
router.post("/google", controller.googleControl);

module.exports = router;
