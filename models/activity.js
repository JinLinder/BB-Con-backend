const mongoose = require('mongoose');
const activitySchema = mongoose.Schema({
    title: {
        type:String
    },
    community: {
        type:String
    },
    adress: {
        type:String
    },
    time:{
        type:Date
    },
    info: {
        type:String
    }
})

module.exports = mongoose.model('activity', activitySchema)