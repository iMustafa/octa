const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const syl_system_packages_schema = new Schema({
    NAME: {
        type: String,
        required: true
    },
    STATE: {
        type: Boolean,
        required: true,
        default: true
    },
    DESCRIPTION: {
        type: String
    },
    REACH: {
        type: Number,
        required: true
    },
    POSTS: {
        type: Number,
        required: true
    },
    PRICE: {
        type: Number,
        required: true
    },
    DESIGNS: {
        type: Number,
        required: true
    },
    NOTES: {
        type: String
    },
    SUBSCRIBED_PAGES: [{
        type: Schema.Types.ObjectId,
        ref: 'syl_system_clients'
    }],
    TERMS_AND_CODITIONS: {
        type: String
    },
    CREATE_TIME: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('syl_system_packages', syl_system_packages_schema, 'SYL_SYSTEM_PACKAGES')