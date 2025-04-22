const Property = require('./propertyModel')


const add = async (req, res) => {
    let validation = ''
    if (!req.body.propertyTypeId) {
        validation += ' propertyTypeId is required '
    }
    if (!req.body.cityId) {
        validation += ' cityId is required '
    }
    if (!req.body.propertyAdvisorId) {
        validation += ' propertyAdvisorId is required '
    }
    if (!req.file) {
        validation += ' image is required '
    }
    if (!req.body.location) {
        validation += ' location is required '
    }
    if (!req.body.price) {
        validation += ' price is required '
    }
    if (!req.body.title) {
        validation += ' title is required '
    }
    if (!req.body.type) {
        validation += ' type is required '
    }
    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {

        let totalProperties = await Property.countDocuments()
        let newProperty = new Property()
        newProperty.autoId = totalProperties + 1
        newProperty.propertyTypeId = req.body.propertyTypeId
        newProperty.cityId = req.body.cityId
        newProperty.propertyAdvisorId = req.body.propertyAdvisorId
        newProperty.location = req.body.location
        newProperty.price = req.body.price
        newProperty.title = req.body.title
        newProperty.type = req.body.type
        newProperty.description = req.body.description
        newProperty.image = "properties/" + req.file.filename
        await newProperty.save()
            .then(async (savedProperty) => {
                res.send({
                    success: true,
                    status: 200,
                    message: "Property Added Successfully",
                    data: savedProperty
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
        Property.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'Property not found' })
                else {
                    if (!!req.body.propertyTypeId) {
                        result.propertyTypeId = req.body.propertyTypeId
                    }
                    if (!!req.body.cityId) {
                        result.cityId = req.body.cityId
                    }
                    if (!!req.body.location) {
                        result.location = req.body.location
                    }
                    if (!!req.body.price) {
                        result.price = req.body.price
                    }
                    if (!!req.body.title) {
                        result.title = req.body.title
                    }
                    if (!!req.body.type) {
                        result.type = req.body.type
                    }
                    if (!!req.body.description) {
                        result.description = req.body.description
                    }
                    if (!!req.file) {
                        result.image = "properties/" + req.file.filename
                    }
                    result.save()
                        .then(updatedResult => {
                            res.send({ success: true, status: 200, message: "Property Updated Successfully", data: updatedResult })
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
        Property.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'No Property Found' })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(updatedResult => {
                            res.send({ success: true, status: 200, message: "Status Changed Successfully", data: updatedResult })
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
        Property.findOne({ _id: req.body._id }).populate('propertyTypeId').populate('cityId').populate('propertyAdvisorId')
            .then((data) => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "Property Does not exist" })
                }
                else
                    res.send({ success: true, status: 200, message: " Property Loaded Successfully", data: data })
            })
            .catch((err) => {
                res.send({ success: false, status: 500, message: err.message })
            })
    }
}

const all = (req, res) => {
    Property.find(req.body).populate('propertyTypeId').populate('cityId').populate('propertyAdvisorId')
        .sort({createdAt:-1})
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "Properties Loaded Successfully",
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