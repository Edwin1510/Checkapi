const Checkmodel = require("./model")


const postdata = (req, res) => {

    const data = new Checkmodel(req.body)
    return data.save()

}

const getdata = (req, res) => {
    return Checkmodel.find()
}

const Putdata = (req, res) => {
    return Checkmodel.findOne({ name: req.body.name })
}


module.exports = {
    postdata,
    getdata,
    Putdata
}