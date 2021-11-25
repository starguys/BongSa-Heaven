

const router = require('express').Router()
const controllers = require('../controllers/user')

router.post('/signup',controllers.authSignup)
router.post('/signin,' , controllers.authSignin)

module.exports = router