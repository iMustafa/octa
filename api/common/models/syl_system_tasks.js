const mongoose = require('mongoose')
const Schema = mongoose.Schema

const syl_system_tasks_schema = new Schema(
	{
		NAME: {
			type: String,
			required: true
		},
		STATE: {
			type: Boolean,
			default: false
		},
		DESCRIPTION: {
			type: String
		},
		TEAM: [{
			type: Schema.Types.ObjectId,
			unique: true,
			ref: 'syl_system_user'
		}],
		PAGE: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'syl_system_pages'
		},
		DEAD_LINE: {
			type: Date,
			required: true
		},
		START_TIME: {
			type: Date,
			required: true
		},
		DONE_TIME: {
			type: Date
		}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('syl_system_tasks', syl_system_tasks_schema, 'SYL_SYSTEM_TASKS')