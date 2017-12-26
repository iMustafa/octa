//SERVER REQUIRES
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const router = express.Router()

const SYL_SYSTEM_PACKAGES = require('../common/models/syl_system_packages')
const SYL_SYSTEM_CLIENTS = require('../common/models/syl_system_clients')
const SYL_SYSTEM_CONTRACTS = require('../common/models/syl_system_contracts')
const SYL_SYSTEM_PAGES = require('../common/models/syl_system_pages')
const SYL_SYSTEM_USERS = require('../common/models/syl_system_user')
const SYL_SYSTEM_SETTINGS = require('../common/models/syl_system_settings')
const SYL_SYSTEM_TASKS = require('../common/models/syl_system_tasks')

const MIDDLE_WARES = require('../middlewares/auth_middlewares.js')

/*************************
 ******** HANDLERS ********
 *************************/

function filterTasks($tasks) {
	return {
		active: {
			late: $tasks.filter(task => task.STATE === false && new Date() > task.DEAD_LINE),
			in_progress: $tasks.filter(task => task.STATE === false && new Date() < task.DEAD_LINE && new Date() > task.START_TIME)
		},
		inactive: {
			inactive: $tasks.filter(task => task.STATE === false && new Date() < task.START_TIME)
		},
		done: {
			done: $tasks.filter(task => task.STATE === true && task.DONE_TIME < task.DEAD_LINE),
			done_late: $tasks.filter(task => task.STATE === true && task.DONE_TIME > task.DEAD_LINE)
		}
	}
}

function filterDateRange($date, $since, $until) {
	let query
	switch ($date) {
		case 'late': {
			query = { DEAD_LINE: { $gte: $since, $lt: $until } }
			break
		}
		case 'in_progress': {
			query = { START_TIME: { $gte: $since, $lt: $until }, DEAD_LINE: { $gte: $since, $lt: $until } }
			break
		}
		default: {
			query = false
			break
		}
	}
	return query
}

/**********ROUTES*********/

/*************************
 ******** PACKGES ********
 *************************/

router.get('/packages', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	let resopnseData = {
		active: [], suspended: []
	}

	SYL_SYSTEM_PACKAGES
		.find({})
		.populate([
			{ path: 'SUBSCRIBED_PAGES', select: ['FULL_NAME'] }
		])
		.exec((err, packages) => {
			if (err) res.json({ state: false, response: err })
			resopnseData.active = packages.filter((package) => { return package.STATE })
			resopnseData.suspended = packages.filter((package) => { return !package.STATE })
			res.json({ state: true, response: resopnseData })
		})
})

router.get('/package/:id', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	let packageID = req.params.id

	SYL_SYSTEM_PACKAGES
		.findById(packageID)
		.populate([
			{ path: 'SUBSCRIBED_PAGES', select: ['FULL_NAME'] }
		])
		.exec((err, package) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: package })
		})
})

router.put('/package', MIDDLE_WARES.isAdmin, MIDDLE_WARES.isAPICall, (req, res) => {
	var package = req.body
	var newPackage = new SYL_SYSTEM_PACKAGES(package)

	newPackage.save((err, saved) => {
		if (err) res.json({ state: false, response: err })
		res.json({ state: true, response: saved })
	})
})

router.post('/package/:id', MIDDLE_WARES.isAdmin, MIDDLE_WARES.isAPICall, (req, res) => {
	let packageID = req.params.id,
		packageUpdate = req.body

	SYL_SYSTEM_PACKAGES
		.findByIdAndUpdate(packageID, packageUpdate)
		.exec((err, package) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: package })
		})
})

/*************************
 ******** CLIENTS ********
 *************************/

router.get('/clients', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	let responseData = {
		active: [], suspended: []
	}

	SYL_SYSTEM_CLIENTS
		.find({})
		.exec((err, clients) => {
			if (err) res.json({ state: false, response: err })
			responseData.active = clients.filter((client) => { return client.STATE })
			responseData.suspended = clients.filter((client) => { return !client.STATE })
			res.json({ state: true, response: responseData })
		})
})

router.get('/client/:id', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	let clientID = req.params.id

	SYL_SYSTEM_CLIENTS
		.findById(clientID)
		.populate([
			{ path: 'CONTRACTS' },
			{ path: 'FACEBOOK_PAGES' }
		])
		.exec((err, client) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: client })
		})
})

router.put('/client', MIDDLE_WARES.isAdmin, (req, res) => {
	let client = req.body,
		newClient = new SYL_SYSTEM_CLIENTS(client)

	newClient.save((err, saved) => {
		if (err) res.json({ state: false, response: err })
		res.json({ state: true, response: saved })
	})
})

router.post('/client/:id', MIDDLE_WARES.isAdmin, (req, res) => {
	let clientID = req.params.id,
		clientUpdate = req.body

	SYL_SYSTEM_CLIENTS
		.findByIdAndUpdate(clientID, clientUpdate)
		.exec((err, client) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: clientID })
		})
})

/*************************
 ******* CONTRACTS *******
 *************************/

router.get('/contracts', MIDDLE_WARES.isAuthenticated, (req, res) => {
	let responseData = {
		active: [], suspended: []
	}

	SYL_SYSTEM_CONTRACTS
		.find({})
		.populate([
			{ path: 'PACKAGE' },
			{ path: 'CLIENT' },
			{ path: 'PAGE' }
		])
		.exec((err, contracts) => {
			if (err) res.json({ state: false, response: err })
			responseData.active = contracts.filter((contract) => { return (new Date() < contract.RENEWAL_TIME && contract.STATE) })
			responseData.suspended = contracts.filter((contract) => { return (new Date() > contract.RENEWAL_TIME || !contract.STATE) })
			res.json({ state: true, response: responseData })
		})
})

router.get('/contract/:id', MIDDLE_WARES.isAuthenticated, (req, res) => {
	let contractID = req.params.id

	SYL_SYSTEM_CONTRACTS.findById(contractID)
		.populate([
			{ path: 'PACKAGE' },
			{ path: 'CLIENT' }
		])
		.exec((err, contract) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: contract })
		})
})

router.put('/contract', MIDDLE_WARES.isAdmin, (req, res) => {
	const contractData = req.body,
		clientID = req.body.CLIENT,
		packageID = req.body.PACKAGE,
		pageID = req.body.PAGE,
		newContract = new SYL_SYSTEM_CONTRACTS(contractData)
	newContract.save((err, contract) => {
		if (err) res.json({ state: false, response: err })
		SYL_SYSTEM_CLIENTS
			.findByIdAndUpdate(clientID, { $push: { CONTRACTS: contract._id } })
			.exec(($errorClient, $updateClient) => {
				if ($errorClient) res.json({ state: false, response: err })
				SYL_SYSTEM_PACKAGES
					.findByIdAndUpdate(packageID, { $push: { SUBSCRIBED_PAGES: pageID } })
					.exec(($errorPackage, $update) => {
						SYL_SYSTEM_PAGES
							.findByIdAndUpdate(pageID, { $push: { CONTRACTS: contract._id } })
							.exec(($errorPage, $updatePage) => {
								if ($errorPage) res.json({ state: false, response: contract })
								res.json({ res: true, response: contract })
							})
					})
			})
	})
})

router.post('/contract/:id', MIDDLE_WARES.isAdmin, (req, res) => {
	let contractID = req.params.id,
		contractData = req.body

	SYL_SYSTEM_CONTRACTS
		.findByIdAndUpdate(contractID, contractData)
		.exec((err, updated) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: updated })
		})
})

/*************************
 ********* PAGES *********
 *************************/

router.get('/pages', MIDDLE_WARES.isAuthenticated, (req, res) => {
	let responseData = {
		active: [], suspended: []
	}

	function getPageStatus($pages, $state) {
		let pages = $pages.filter((page) => {
			let contracts = page.CONTRACTS.filter((contract) => {
				if ($state) {
					return new Date() > contract.START_TIME
				} else {
					return new Date() < contract.START_TIME
				}
			})
			return contracts.length >= 1
		})
		return pages
	}

	SYL_SYSTEM_PAGES
		.find({})
		.populate([
			{ path: 'CLIENT', select: ['FULL_NAME'] },
			{
				path: 'CONTRACTS',
				select: ['PACKAGE', 'START_TIME', 'RENEWAL_TIME'],
				populate: [
					{ path: 'PACKAGE', model: 'syl_system_packages', select: ['NAME', 'REACH', 'POSTS', 'DESIGNS', 'PRICE'] }
				]
			},
			{ path: 'TASKS', select: ['STATE'] }
		])
		.exec((err, pages) => {
			if (err) res.json({ state: false, response: err })
			responseData.active = getPageStatus(pages, true)
			responseData.suspended = getPageStatus(pages, false)
			res.json({ state: true, response: responseData })
		})
})

router.get('/page/:id', MIDDLE_WARES.isAuthenticated, (req, res) => {
	let pageID = req.params.id

	SYL_SYSTEM_PAGES.findById(pageID)
		.populate([
			{ path: 'CLIENT', select: 'FULL_NAME' },
			{
				path: 'CONTRACTS',
				select: ['PACKAGE', 'START_TIME', 'RENEWAL_TIME'],
				populate: [
					{ path: 'PACKAGE', model: 'syl_system_packages', select: ['NAME', 'REACH', 'POSTS', 'DESIGNS', 'PRICE'] }
				]
			},
			{ path: 'TASKS', select: ['STATE', 'START_TIME', 'DEAD_LINE', 'DONE_TIME'] }
		])
		.exec((err, page) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: { page, tasks: filterTasks(page.TASKS) } })
		})
})

router.put('/page', MIDDLE_WARES.isAdmin, (req, res) => {
	let pageData = req.body,
		page = new SYL_SYSTEM_PAGES(pageData)

	page.save((err, saved) => {
		if (err) res.json({ state: false, response: err })
		res.json({ state: true, response: saved })
	})
})

router.post('/page/:id', MIDDLE_WARES.isAdmin, (req, res) => {
	let { id } = req.params,
		pageData = req.body

	SYL_SYSTEM_PAGES
		.findByIdAndUpdate(id, pageData)
		.exec((err, updated) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: updated })
		})
})

/*************************
 ********* USERS *********
 *************************/

router.get('/users', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	SYL_SYSTEM_USERS
		.find({}, { FB_TOKEN: 0 })
		.exec((err, users) => {
			if (err) res.json({ state: false, response: err })
			let active = users.filter(user => user.STATE),
				suspended = users.filter(user => !user.STATE)
			res.json({ state: true, response: { active, suspended } })
		})
})

router.get('/me', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	const { FB_TOKEN } = req.user
	SYL_SYSTEM_USERS
		.findOne({ FB_TOKEN })
		.populate([
			{ 
				path: 'TASKS',
				populate: { path: 'PAGE', select: 'NAME' }
			}
		])
		.exec((err, me) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: me })
		})
})

router.get('/user/:id', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	let { id } = req.params

	SYL_SYSTEM_USERS
		.findById(id, { FB_TOKEN: 0 })
		.exec((err, user) => {
			if (err) res.json({ state: false, resposne: err })
			res.json({ state: true, response: user })
		})
})

router.put('/user', MIDDLE_WARES.isAdmin, MIDDLE_WARES.isAPICall, (req, res) => {
	let userData = req.body,
		user = new SYL_SYSTEM_USERS(userData)

	user.save((err, saved) => {
		if (err) res.json({ state: false, response: err })
		res.json({ res: true, response: saved })
	})
})

router.post('/user/:id', MIDDLE_WARES.isAdmin, MIDDLE_WARES.isAPICall, (req, res) => {
	let { id } = req.params,
		userData = req.body

	SYL_SYSTEM_USERS
		.findByIdAndUpdate(id, userData)
		.exec((err, updated) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: updated })
		})
})

/*************************
 ********** TASKS ********
 *************************/

router.get('/tasks', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	SYL_SYSTEM_TASKS
		.find({})
		.populate([
			{ path: 'TEAM', select: ['FULL_NAME'] },
			{
				path: 'PAGE',
				select: ['CONTRACTS', 'NAME'],
				populate: [
					{
						path: 'CONTRACTS',
						model: 'syl_system_contracts',
						select: ['PACKAGE'],
						populate: [
							{ path: 'PACKAGE', model: 'syl_system_packages', select: ['NAME', 'REACH', 'POSTS', 'DESIGNS'] }
						]
					},
				]
			}
		])
		.exec((err, tasks) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: filterTasks(tasks) })
		})
})

router.get('/tasks/filter/:time/:since/:until', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	const { time } = req.params,
		{ since } = req.params,
		until = req.params.until || new Date(),
		query = filterDateRange(time, since, until)

	if (query) {
		SYL_SYSTEM_TASKS
			.find(query)
			.populate([
				{ path: 'TEAM', select: ['FULL_NAME'] },
				{
					path: 'PAGE',
					select: ['CONTRACTS', 'NAME'],
					populate: [
						{
							path: 'CONTRACTS',
							model: 'syl_system_contracts',
							select: ['PACKAGE'],
							populate: [
								{ path: 'PACKAGE', model: 'syl_system_packages', select: ['NAME', 'REACH', 'POSTS', 'DESIGNS'] }
							]
						},
					]
				}
			])
			.exec((err, tasks) => {
				if (err) res.json({ state: false, response: err })
				res.json({ state: true, response: tasks })
			})
	} else {
		res.json({ state: false, response: 'Invalid Period Selected' })
	}
})

router.get('/task/:id', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	let { id } = req.params

	SYL_SYSTEM_TASKS
		.findById(id)
		.populate([
			{ path: 'TEAM', select: ['FULL_NAME'] },
			{
				path: 'PAGE',
				select: ['CONTRACTS', 'NAME'],
				populate: [
					{
						path: 'CONTRACTS',
						model: 'syl_system_contracts',
						select: ['PACKAGE'],
						populate: [
							{ path: 'PACKAGE', model: 'syl_system_packages', select: ['NAME', 'REACH', 'POSTS', 'DESIGNS'] }
						]
					},
				]
			}
		])
		.exec((err, user) => {
			if (err) res.json({ state: false, resposne: err })
			res.json({ state: true, response: user })
		})
})

router.put('/task', MIDDLE_WARES.isAdmin, MIDDLE_WARES.isAPICall, (req, res) => {
	let taskData = req.body,
		{ TEAM } = taskData,
		{ PAGE } = taskData,
		task = new SYL_SYSTEM_TASKS(taskData)

	SYL_SYSTEM_USERS
		.update(
		{ _id: { $in: TEAM } },
		{ $push: { TASKS: task._id } },
		{ multi: true }
		)
		.exec((err, update) => {
			if (err) res.json({ state: false, response: err })
			SYL_SYSTEM_PAGES
				.findByIdAndUpdate(PAGE, { $push: { TASKS: task._id } })
				.exec((err2, update2) => {
					task.save((err3, saved) => {
						res.json({ state: true, response: saved })
					})
				})
		})
})

router.post('/task/:id', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	let { id } = req.params,
		taskData = req.body

	SYL_SYSTEM_TASKS
		.findByIdAndUpdate(id, taskData)
		.exec((err, updated) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: updated })
		})
})

/*************************
 ******** SETTINGS *******
 *************************/

router.get('/roles', MIDDLE_WARES.isAuthenticated, MIDDLE_WARES.isAPICall, (req, res) => {
	SYL_SYSTEM_SETTINGS
		.findOne({ _VERSION: 1 }, { ROLES: 1 })
		.exec((err, roles) => {
			if (err) res.json({ state: false, response: err })
			res.json({ state: true, response: roles })
		})
})

router.put('/role', MIDDLE_WARES.isAdmin, (req, res) => {
	let role = req.body

	SYL_SYSTEM_SETTINGS
		.findOneAndUpdate({ _VERSION: 1 }, { $push: { ROLES: role } })
		.exec((err, role) => {
			if (err) res.json({ state: false, respnose: err })
			res.json({ state: true, reponse: role })
		})
})

module.exports = router;