const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const syl_system_user_schema = new Schema(
	{
		FB_TOKEN: {
			type: String
		},
		STATE: {
			type: Boolean,
			default: true
		},
		SALARY: {
			type: String
		},
		EMAIL: {
			type: String,
			required: true,
			unique: true
		},
		IS_ADMIN: {
			type: Boolean,
			default: false
		},
		FULL_NAME: {
			type: String,
			required: true
		},
		PHONE_NUMBER: {
			type: String
		},
		ROLES: {
			type: Array
		},
		TASKS: [{
			type: Schema.Types.ObjectId,
			ref: 'syl_system_tasks'
		}]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('syl_system_user', syl_system_user_schema, 'SYL_SYSTEM_USER');
