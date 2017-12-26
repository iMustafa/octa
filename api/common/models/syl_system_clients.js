const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const syl_system_clients_schema = new Schema({
    FULL_NAME: {
        type: String,
        required: true
    },
    STATE: {
        type: Boolean,
        required: true,
        default: true
    },
    EMAIL: {
        type: String,
        required: true,
        unique: true
    },
    PHONE_NUMBER: {
        type: String,
        required: true
    },
    FACEBOOK_PAGES: [{
        type: Schema.Types.ObjectId,
        ref: 'syl_system_pages'
    }],
    CONTRACTS: [{
        type: Schema.Types.ObjectId,
        ref: 'syl_system_contracts'
    }],
    CREATE_TIME: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('syl_system_clients', syl_system_clients_schema, 'SYL_SYSTEM_CLIENTS')