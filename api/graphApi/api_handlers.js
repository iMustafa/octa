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
	const length = $objectID.length
	return $objectID.substr(0, length)
}