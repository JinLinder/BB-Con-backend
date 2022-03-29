const mongoose = require('mongoose');
const communitySchema = mongoose.Schema({
    author: {
        type:String
    },
    title: {
        type:String
    },
    text: {
        type:String
    }
})

module.exports = mongoose.model('community', communitySchema)