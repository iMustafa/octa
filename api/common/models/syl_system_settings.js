const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SYL_SYSTEM_ROLE = new Schema({
	TITLE: { type: String, required: true, unique: true }
})

const SYL_SYSTEM_SETTINGS_SCHEMA = new Schema({
	ROLES: [SYL_SYSTEM_ROLE]
})

module.exports = mongoose.model('syl_system_settings', SYL_SYSTEM_SETTINGS_SCHEMA, 'SYL_SYSTEM_SETTINGS')