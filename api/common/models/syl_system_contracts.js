const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const syl_system_contracts_schema = new Schema(
	{
		CLIENT: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'syl_system_clients'
		},
		STATE: {
			type: Boolean,
			default: true
		},
		PACKAGE: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'syl_system_packages'
		},
		PAGE: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'syl_system_pages'
		},
		START_TIME: {
			type: Date,
			required: true
		},
		RENEWAL_TIME: {
			type: Date,
			required: true
		},
		TERMS_AND_CONDITIONS: {
			type: String
		}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('syl_system_contracts', syl_system_contracts_schema, 'SYL_SYSTEM_CONTRACTS')