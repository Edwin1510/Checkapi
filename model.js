const mongoose = require("mongoose")


const Checkmongoose = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    age: {
        type: String,
        required: true,
    }
})


const Checkmodel = mongoose.model("checkdatas", Checkmongoose)

module.exports = Checkmodel;