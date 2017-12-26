const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const router = express.Router()

const SYL_SYSTEM_USERS = require('../common/models/syl_system_user')

const isAPICall = (req, res, next) => {
	const { api_call_token } = req.headers
	api_call_token === 'V1' ? next() : res.json({ state: false, response: 'Error 500: Bad Request.' })
}

const isAuthenticated = (req, res, next) => {
	const { user } = req
	if (user) {
		SYL_SYSTEM_USERS
			.findOne({FB_TOKEN: user.FB_TOKEN})
			.exec((err, userDB) => {
				err ? res.json({state: false, response: err}) : next()
			})
	} else {
		(req.path !== '/login' && !req.path.startsWith('/oauth')) ? res.redirect('/login') : next()
	}
}

const isAdmin = (req, res, next) => {
	const {user} = req
	if (user) {
		SYL_SYSTEM_USERS
			.findOne({FB_TOKEN: user.FB_TOKEN})
			.exec((err, userDB) => {
				if (err) res.json({state: false, response: err})
				userDB.IS_ADMIN ? next() : res.json({state: false, resposne: 'Authorization error'})
			})
	} else {
		res.json({ state: false, resposne: 'Authorization Error' })
	}
}

module.exports = {
	isAPICall,
	isAuthenticated,
	isAdmin
}