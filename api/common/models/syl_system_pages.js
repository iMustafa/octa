const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const syl_system_pages_schema = new Schema(
	{
		NAME: {
			type: String,
			required: true
		},
		STATE: {
			type: Boolean,
			default: true
		},
		ID: {
			type: String,
			required: true
		},
		CLIENT: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'syl_system_clients'
		},
		CAMPAIGN_ID: {
			type: String
		},
		CONTRACTS: [{
			type: Schema.Types.ObjectId,
			ref: 'syl_system_contracts'
		}],
		TASKS: [{
			type: Schema.Types.ObjectId,
			ref: 'syl_system_tasks'
		}]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('syl_system_pages', syl_system_pages_schema, 'SYL_SYSTEM_PAGES');