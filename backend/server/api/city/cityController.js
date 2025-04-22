const City = require('./cityModel')


const add = async (req, res) => {
    let validation = ''
    if (!req.body.name)
        validation += ' name is required '
    if (!req.file)
        validation += ' image is required '

    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {
        let totalCity = await City.countDocuments()
        let newCity = new City()
        newCity.autoId = totalCity + 1
        newCity.name = req.body.name
        newCity.image = "cities/" + req.file.filename
        await newCity.save()
            .then(async (savedCity) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "City Added Successfully",
                    data: savedCity
                })

            }).catch((err) => {
                res.send({ success: false, status: 500, message: err.message })

            })
    }
}

const update = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is require'

    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        City.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'City not found' })
                else {
                    if (!!req.body.name)
                        result.name = req.body.name
                    if (!!req.file)
                        result.image = "cities/" + req.file.filename
                    result.save()
                        .then(updatedResult => {
                            res.send({ success: true, status: 200, message: "City Updated Successfully", data: updatedResult })
                        })
                        .catch(error => {
                            res.send({ success: false, status: 500, message: error.message })
                        })
                }
            })
            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })

    }
}


const changeStatus = (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is require '
    if (!req.body.status)
        validation += ' status is required'
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        City.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'No City Found' })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(updatedResult => {
                            res.send({ success: true, status: 200, message: "City Deleted", data: updatedResult })
                        })
                        .catch(error => {
                            res.send({ success: false, status: 500, message: error.message })
                        })
                }
            })
            .catch(error => {
                res.send({ success: false, status: 500, message: error.message })
            })

    }
}

const single = (req, res) => {
    let validation = ""
    if (!req.body._id) {
        validation = "_id is required"
    }
    if (!!validation) {
        res.send({ success: false, status: 500, message: validation })
    }
    else {
        City.findOne({ _id: req.body._id })
            .then((data) => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "City Does not exist" })
                }
                else
                    res.send({ success: true, status: 200, message: " City Loaded Successfully", data: data })
            })
            .catch((err) => {
                res.send({ success: false, status: 500, message: err.message })
            })
    }
}



const all = (req, res) => {
    req.body.status = true
    City.find(req.body)
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "Cities Loaded Successfully",
                data: data,
                total: data.length
            })
        })
        .catch((err) => {
            res.send({
                success: false,
                status: 500,
                message: err.message
            })
        })
}


module.exports = { add, update, changeStatus, single, all }