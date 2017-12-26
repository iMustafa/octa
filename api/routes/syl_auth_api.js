const express = require('express')
const passport = require('passport')
const router = express.Router()

const SYL_SYSTEM_USER = require('../common/models/syl_system_user')

const auth = require('../config/auth');

router.get('/fb',
	passport.authenticate('facebook', {
		scope: auth.facebookAuth.permission
	})
)

router.get('/facebook',
	passport.authenticate('facebook'),
	(req, res, next) => {
		res.cookie('FB_TOKEN', req.user.FB_TOKEN, {
			httpOnly: true,
			maxAge: 4 * 60 * 60 * 1000
		})
		next()
	}
)

module.exports = router