const mongoose = require("mongoose")


const ConnectToDB = () => {
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@sam.ltzmszw.mongodb.net/CHECKUP`)
        .then((response) => {
            console.log("Database collection successfully")
        }).catch((error) => {
            console.log(error)
        })
}


module.exports = ConnectToDB