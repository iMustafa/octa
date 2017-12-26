//Packages
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const MIDDLEWARES = require('./api/middlewares/auth_middlewares')

const keys = require('./api/config/keys')

//CONFIG
const $port = process.env.PORT || 80
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

require('./api/config/passport')(passport)

app.use(cookieSession({
	name: 'octa-session',
	keys: keys.cookie_session.keys,
	maxAge: 4 * 60 * 60 * 1000
}))

//APIs
const SYL_SYS_AUTH = require('./api/routes/syl_auth_api')
const SYL_SYSTEM_ADMIN = require('./api/routes/syl_system_admin')
const SYL_SYSTEM_GRAPH = require('./api/graphApi/syl_graph_api')

io.on('connection', (socket) => {
	console.log('Client Connected')
})

//path.join('../' ,__dirname, 'app', 'dist')
app.use(express.static('./app/dist/'))
app.use(cookieParser(keys.cookie_session.keys))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressSession({ secret: keys.cookie_session.keys[0] }))
app.use(passport.initialize())
app.use(passport.session())

//API CONFIG
app.use('/oauth', SYL_SYS_AUTH)
app.use('/system_api', SYL_SYSTEM_ADMIN)
app.use('/graph_api', SYL_SYSTEM_GRAPH)

app.get('/login', (req, res, next) => {
	req.user ? res.redirect('/') : next()
})

app.get('/admin', MIDDLEWARES.isAdmin, (req, res, next) => {
	next()
})

app.get('*', MIDDLEWARES.isAuthenticated, (req, res) => {
	res.sendFile(path.join(__dirname, './app/dist/index.html'))
})

//MONGOOSE CONNECTION
const cloudDB = keys.cloud_db.uri()
const localDB = keys.local_db.uri()

mongoose.Promise = global.Promise
mongoose.connect(cloudDB, (err) => {
	err ? console.log('Mongoose Connection Error:', err) : console.log('Mongoose Connected')
})

//SERVER CONNECTION
const eServer = server.listen($port, "0.0.0.0", () => {
	const host = eServer.address().address
	const port = eServer.address().port
	console.log(`Octa is listening on http://${host}:${port}`)
})
