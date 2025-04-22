const Booking = require('./bookingModel')
const Property = require('../property/propertyModel')


const bookProperty = async (req, res) => {
    let validation = ''
    if (!req.body.propertyId)
        validation += ' propertyId is required '
    if (!req.body.customerId)
        validation += ' customerId is required '
    if (!req.body.propertyAdvisorId)
        validation += ' propertyAdvisorId is required '
    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {
        await Booking.findOne({ customerId: req.body.customerId, propertyId: req.body.propertyId }).then(async (bookingData) => {
            if (bookingData) {
                res.send({
                    success: false, status: 400, message: "You have already booked this property"
                })
            }
            else {
                const newBooking = new Booking()
                newBooking.propertyId = req.body.propertyId
                newBooking.propertyAdvisorId = req.body.propertyAdvisorId
                newBooking.customerId = req.body.customerId
                newBooking.save().then((result) => {
                    res.send({
                        success: true,
                        status: 200,
                        message: "Booked Successfully"

                    })
                }).catch((err) => {
                    res.send({
                        success: true,
                        status: 200,
                        message: err.message

                    })
                })
            }

        }).catch(() => {

        })
    }
}

const changeStatus = async (req, res) => {
    let validation = ''
    if (!req.body._id)
        validation += '_id is require '
    if (!req.body.status)
        validation += 'status is required '
    if (!!validation)
        res.send({ success: false, status: 500, message: validation })
    else {
        Booking.findOne({ _id: req.body._id })
            .then(result => {
                if (result == null)
                    res.send({ success: false, status: 500, message: 'No Booking found' })
                else {
                    if (!!req.body.status)
                        result.status = req.body.status
                    result.save()
                        .then(async updatedResult => {
                            if (req.body.status == "Completed") {
                                let property = await Property.findOne({ _id: result.propertyId })
                                if (!!property) {
                                    property.status = "Completed"
                                    property.save()
                                        .then(() => {
                                            res.send({ success: true, status: 200, message: "Status Changed Successfully", data: updatedResult })
                                        })
                                        .catch(error => {
                                            res.send({ success: false, status: 500, message: error.message })
                                        })
                                }
                                else {
                                    res.send({ success: false, status: 400, message: "Property Id is incorrect" })
                                }
                            }
                            else {
                                res.send({ success: true, status: 200, message: "Status Changed Successfully", data: updatedResult })
                            }

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

const allBookings = (req, res) => {
    Booking.find(req.body).sort({ createdAt: -1 }).populate('propertyId').populate('customerId').populate('propertyAdvisorId').populate({
        path: 'propertyId',
        populate: { path: 'propertyTypeId' }
    }).populate({
        path: 'propertyId',
        populate: { path: 'cityId' }
    })
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "Loaded Successfully",
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



module.exports = { bookProperty, allBookings, changeStatus }