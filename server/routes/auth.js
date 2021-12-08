const router = require('express').Router();
const controller = require('../controllers/auth');

<<<<<<< HEAD
router.post('/signin', controller.signinControl);
router.post('/signup', controller.signupControl);
router.post('/signout', controller.signoutControl);
router.post('/nickcheck', controller.nickcheckControl);
router.get('/refreshtoken', controller.refreshtokenControl);
router.post('sendemail',controller.sendEmailControl);
=======
router.post("/signin", controller.signinControl);
router.post("/signup", controller.signupControl);
router.post("/signout", controller.signoutControl);
router.post("/nickcheck", controller.nickcheckControl);
router.get("/refreshtoken", controller.refreshtokenControl);
// router.post("/sendemail", controller.sendEmailControl);
>>>>>>> aec65dd1b37342bfc2601c103758765fa29799d2

router.post('/kakao', controller.kakaoControl);
router.get('/google', controller.googleControl);

module.exports = router;
