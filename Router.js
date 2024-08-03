

const express = require("express");
const ConnectToDB = require("./database");
const { postdata, getdata, Putdata } = require("./controller");


const Apiserver = express();

ConnectToDB()

Apiserver.get("/", async (req, res) => {
    let response;

    response = await getdata(req, res)

    return res.status(200).json({
        message: "get request successfully",
        datas: response
    })

})

Apiserver.post("/post", async (req, res) => {

    try {
        const response = await postdata(req)
        console.log(response)
        return res.status(200).json({
            message: "post request successfully"
        })
    } catch (error) {
        console.log(error)
    }

})

Apiserver.patch("/patch", async (req, res) => {

    try {
        const response = await Putdata(req, res)
        if (response && response._id) {
            if (req.body.newage) {
                response.age = req.body.newage
                await response.save()
                res.status(200).json({
                    message: "patch request successfully"
                })
                console.log(response)
            }

        }
    } catch (error) {
        console.log(error)
    }

})

module.exports = Apiserver;