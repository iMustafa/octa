function URI() {
	const args = ['user', 'pwd', 'host', 'port', 'db']
	if (args.every(x => x in this)) {
		return `mongodb://${this.user}:${this.pwd}@${this.host}:${this.port}/${this.db}`
	} else {
		throw new Error('Invalid DB Connection Arguments')
	}
}

const cloud_db = {
	user: 'root',
	pwd: 'Password123456!',
	host: 'ds141434.mlab.com',
	port: '41434',
	db: 'sylmia',
}

const local_db = {
	user: 'OCTA_SYSTEM_ADMIN',
	pwd: 'Password123456!',
	host: 'localhost',
	port: '27017',
	db: 'octa',
}

const keys = {
	cloud_db: {
		uri: () => URI.call(cloud_db)
	},
	local_db: {
		uri: () => URI.call(local_db)
	},
	cookie_session: {
		keys: ['sdguaASUGo768ADLAJSDoBSK7d68nNASKODPdasidhasi879'],
		httpOnly: true
	}
}

module.exports = keys