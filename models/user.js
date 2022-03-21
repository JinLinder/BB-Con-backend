const { default: mongoose } = require('mongoose');
const mongooes=require('mongoose');

const userSchema=mongooes.Schema({
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

module.exports=mongoose.model('user', userSchema)

