const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    userName: {
        type: String
    },
    passWord: {
        type: String
    },
    babyAge: {
        type: String
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('user', userSchema)
