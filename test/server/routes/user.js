

const router = require('express').Router()
const controllers = require('../controllers/user')

router.post('/signup',controllers.user)

module.exports = router