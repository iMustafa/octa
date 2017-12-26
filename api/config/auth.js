module.exports = {
	facebookAuth: {
		clientID: '124121228176917',
		clientSecret: '5c68ac78369e5bd4be45d445bdbd5fb8',
		redirect_uri: '/oauth/facebook',
		profileFields: ['id', 'emails', 'name'],
		permission: [
			'email',
			'pages_show_list',
			'manage_pages',
			'pages_manage_cta',
			'read_page_mailboxes',
			'pages_manage_instant_articles',
			'read_insights',
			'ads_management',
			'ads_read'
		]
	}
}