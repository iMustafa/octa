const express = require('express')
const router = express.Router()
const request = require('request')
const http = require('http')
const MIDDLE_WARES = require('../middlewares/auth_middlewares.js')

function getRoute($param, $access_token = null) {
	const uri_section = 'https://graph.facebook.com/v2.11/'
	let operator = '&'
	if (!$param.endsWith('/')) $param.concat('/')
	if (!$param.startsWith('/')) $param.replace(/^/, '/')
	if (!$param.includes('?')) operator = '?'
	return uri_section.concat($param, `${operator}access_token=${$access_token}`)
}

function handleGraphError($graphResponseBody) {
	if ($graphResponseBody.error) {
		return new Error($graphResponseBody.error.message)
	} else if ($graphResponseBody.body) {
		return $graphResponseBody.body.data
	} else {
		return []
	}
}

function getPageToken($userToken, $pageID) {
	return new Promise((resolve, reject) => {
		const route = 'me/accounts',
			FB_TOKEN = $userToken,
			pageID = $pageID
		request(
			{
				url: getRoute(route, FB_TOKEN),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, response: error })
				let page = body.data.map((element) => {
					if (element.id == pageID) return { id: element.id, name: element.name, access_token: element.access_token }
				})
				page = page.filter(element => element)
				resolve(page[0])
			}
		)
	})
}

function getPageID($objectID) {
	const length = $objectID.indexOf('_')
	return $objectID.substr(0, length)
}

function getDateISOFormat($date) {
	let date = new Date($date).toISOString()
	return date.substr(0, date.indexOf('T'))
}

router.get('/pages', MIDDLE_WARES.isAdmin, (req, res) => {
	const route = 'me/accounts',
		{ FB_TOKEN } = req.user
	request(
		{
			url: getRoute(route, FB_TOKEN),
			json: true
		},
		(error, response, body) => {
			if (error) res.json({ state: false, response: error })
			const FB_Res = body.data
			let PAGES = FB_Res.map((element) => {
				return { name: element.name, id: element.id, access_token: element.access_token }
			})
			res.json({ state: true, response: PAGES })
		}
	)
})

router.get('/page_posts/:id/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { since } = req.params,
		{ until } = req.params,
		{ id } = req.params,
		{ FB_TOKEN } = req.user,
		route = `${id}/posts?fields=id&since=${since}&until=${until}`
	getPageToken(FB_TOKEN, id).then(response => {
		request(
			{
				url: getRoute(route, response.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, response: error })
				const POSTS = body.data.map(element => {
					return { id: element.id }
				})
				res.json({ state: true, response: POSTS })
			}
		)
	}).catch(reject => {
		res.json({ state: false, response: reject })
	})
})

router.get('/post_impressions_unique/:objectID', MIDDLE_WARES.isAdmin, (req, res) => {
	const { objectID } = req.params,
		id = getPageID(objectID),
		{ FB_TOKEN } = req.user,
		route = `${objectID}/insights/post_impressions_unique`
	getPageToken(FB_TOKEN, id).then(response => {
		request(
			{
				url: getRoute(route, response.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, resposne: error })
				res.json({ state: true, response: body.data[0].values[0].value })
			}
		)
	}).catch(reject => {
		res.json({ state: true, resposne: reject })
	})
})

router.get('/post_impressions_paid_unique/:objectID', MIDDLE_WARES.isAdmin, (req, res) => {
	const { objectID } = req.params,
		id = getPageID(objectID),
		{ FB_TOKEN } = req.user,
		route = `${objectID}/insights/post_impressions_paid_unique`
	getPageToken(FB_TOKEN, id).then(pageRes => {
		request(
			{
				url: getRoute(route, pageRes.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, resposne: error })
				res.json({ state: true, response: body.data[0].values[0].value })
			}
		)
	}).catch(reject => {
		res.json({ state: false, response: reject })
	})
})

router.get('/page_impressions/:id/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { id } = req.params,
		{ since } = req.params,
		{ until } = req.params,
		{ FB_TOKEN } = req.user,
		route = `${id}/insights/page_impressions/?since=${since}&until=${until}`
	getPageToken(FB_TOKEN, id).then(pageRes => {
		request(
			{
				url: getRoute(route, pageRes.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, response: error })
				let values = body.data[0].values.map(value => {
					return value.value
				}),
					returnValue = values.reduce((a, b) => a + b, 0)
				res.json({ state: true, response: returnValue })
			}
		)
	}).catch(reject => {
		res.json({ state: false, response: reject })
	})
})

router.get('/page_posts_impressions_paid_unique/:id/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { id } = req.params,
		{ since } = req.params,
		{ until } = req.params,
		{ FB_TOKEN } = req.user,
		route = `${id}/insights/page_posts_impressions_paid_unique/day?since=${since}&until=${until}`

	getPageToken(FB_TOKEN, id).then(response => {
		request(
			{
				url: getRoute(route, response.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, resposne: error })
				let values = body.data[0].values.map(value => {
					return value.value
				}),
					returnValue = values.reduce((a, b) => a + b, 0)
				res.json({ state: true, response: returnValue })
			}
		)
	}).catch(reject => {
		res.json({ state: false, response: reject })
	})
})

router.get('/page_positive_feedback_by_type/:id/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { id } = req.params,
		{ since } = req.params,
		{ until } = req.params,
		{ FB_TOKEN } = req.user,
		route = `${id}/insights/page_positive_feedback_by_type/day?since=${since}&until=${until}`

	getPageToken(FB_TOKEN, id).then(response => {
		request(
			{
				url: getRoute(route, response.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, response: error })
				const values = body.data[0].values.map(value => {
					return value.value
				})
				const returnValue = {
					link: values.reduce((a, b) => { return a + b.link }, 0),
					like: values.reduce((a, b) => { return a + b.like }, 0),
					comment: values.reduce((a, b) => { return a + b.comment }, 0),
					claim: values.reduce((a, b) => { return a + b.claim }, 0),
					answer: values.reduce((a, b) => { return a + b.answer }, 0),
					other: values.reduce((a, b) => { return a + b.other }, 0)
				}
				res.json({ state: true, response: returnValue })
			}
		)
	}).catch(reject => {
		res.json({ state: false, resopnse: reject })
	})
})

router.get('/page_total_actions/:id/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { id } = req.params,
		{ since } = req.params,
		{ until } = req.params,
		{ FB_TOKEN } = req.user,
		route = `${id}/insights/page_total_actions/day?since=${since}&until=${until}`

	getPageToken(FB_TOKEN, id).then(response => {
		request(
			{
				url: getRoute(route, response.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, response: error })
				let values = body.data[0].values.map(value => {
					return value.value
				}),
					returnValue = values.reduce((a, b) => a + b, 0)
				res.json({ state: true, response: returnValue })
			}
		)
	}).catch(reject => {
		res.json({ state: false, response: reject })
	})
})

router.get('/page_fan_adds/:id/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { id } = req.params,
		{ since } = req.params,
		{ until } = req.params,
		{ FB_TOKEN } = req.user,
		route = `${id}/insights/page_fan_adds/day?since=${since}&until=${until}`

	getPageToken(FB_TOKEN, id).then(response => {
		request(
			{
				url: getRoute(route, response.access_token),
				json: true
			},
			(error, resopnse, body) => {
				if (error) res.json({ state: false, response: error })
				let values = body.data[0].values.map(value => {
					return value.value
				}),
					returnValue = values.reduce((a, b) => a + b, 0)
				res.json({ state: true, response: returnValue })
			}
		)
	})
})

router.get('/page_post_engagements/:id/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { id } = req.params,
		{ since } = req.params,
		{ until } = req.params,
		{ FB_TOKEN } = req.user,
		route = `${id}/insights/page_post_engagements/day?since=${since}&until=${until}`

	getPageToken(FB_TOKEN, id).then(response => {
		request(
			{
				url: getRoute(route, response.access_token),
				json: true
			},
			(error, response, body) => {
				if (error) res.json({ state: false, response: error })
				let values = body.data[0].values.map(value => {
					return value.value
				}),
					returnValue = values.reduce((a, b) => a + b, 0)
				res.json({ state: true, response: returnValue })
			}
		)
	})
})

router.get('/adaccounts', MIDDLE_WARES.isAdmin, (req, res) => {
	const route = 'me/adaccounts',
		{ FB_TOKEN } = req.user
	request(
		{
			url: getRoute(route, FB_TOKEN),
			json: true
		},
		(error, response, body) => {
			if (error) res.json({ state: false, response: error })
			const Ad_Accounts = body.data
			res.json({ state: true, response: Ad_Accounts })
		}
	)
})

// Load More Campaings -> nextToken
router.get('/campaigns/:accId/:nextToken?', MIDDLE_WARES.isAdmin, (req, res) => {
	const { accId } = req.params,
		{ FB_TOKEN } = req.user,
		{ nextToken } = req.params
		route = nextToken ? `${accId}/campaigns?fields=name&after=${nextToken}` : `${accId}/campaigns?fields=name`
	request(
		{
			url: getRoute(route, FB_TOKEN),
			json: true
		},
		(error, response, body) => {
			if (error) res.json({ state: false, response: error })
			const campaigns = body.data,
				after = body.paging.cursors.after
			res.json({ state: true, response: {campaigns, after} })
		}
	)
})

router.get('/campiagn_spent/:camID/:since/:until', MIDDLE_WARES.isAdmin, (req, res) => {
	const { camID } = req.params,
		since = getDateISOFormat(req.params.since),
		until = getDateISOFormat(req.params.until),
		{ FB_TOKEN } = req.user,
		route = `${camID}/insights/spent?time_range[since]=${since}&time_range[until]=${until}`
	request(
		{
			url: getRoute(route, FB_TOKEN),
			json: true
		},
		(error, response, body) => {
			if (error) res.json({ state: false, response: error })
			const spent = body.data[0] ? body.data[0].spend : 0
			console.log(body, route)
			res.json({ state: true, response: spent })
		}
	)
})

module.exports = router