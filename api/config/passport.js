const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

const User = require('../common/models/syl_system_user')

const ConfigAuth = require('./auth')

module.exports = (passport) => {

	passport.serializeUser((user, done) => {
		done(null, user._id)
	})

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			if (err) return new Error(err)
			done(null, user)
		})
	})

	passport.use(new FacebookStrategy({
		clientID: ConfigAuth.facebookAuth.clientID,
		clientSecret: ConfigAuth.facebookAuth.clientSecret,
		callbackURL: ConfigAuth.facebookAuth.redirect_uri,
		profileFields: ConfigAuth.facebookAuth.profileFields
	},
		($token, $refreshToken, $profile, $done) => {
			const emails = $profile.emails.map(email => email.value)
			User
				.findOneAndUpdate({ EMAIL: { $in: emails } }, {FB_TOKEN: $token})
				.exec((err, user) => {
					if (err || user == null) return $done(null, new Error('User Not Found'))
					return $done(null, user)
				})
		}
	))
}