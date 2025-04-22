const cityModel = require('../city/cityModel')
const propertyTypeModel = require('../propertyType/propertyTypeModel')
const propertyModel = require('../property/propertyModel')
const userModel = require('../user/userModel')
const bookingModel = require('../booking/bookingModel')


const adminDashboard = async (req, res) => {
    let totalcity = await cityModel.countDocuments()
    let totalpropertyType = await propertyTypeModel.countDocuments()
    let totalproperty = await propertyModel.find({ status: true })
    let totalpendingbooking = await bookingModel.find({ status: 1 })
    let totalcustomer = await userModel.find({ userType: 3, status: true })
    let totalpropertydealer = await userModel.find({ userType: 2, status: true })

    res.send({
        success: true,
        status: 200,
        message: "Dashboard",
        data: {
            totalcity: totalcity,
            totalpropertyType: totalpropertyType,
            totalproperty: totalproperty.length,
            totalpendingbooking: totalpendingbooking.length,
            totalcustomer: totalcustomer.length,
            totalpropertydealer: totalpropertydealer.length
        }
    })
}

const propertyadvisorDashboard = async (req, res) => {
    if (!req.body.propertyAdvisorId) {
        res.send({
            success:false,
            status:400,
            message:"propertyAdvisorId is required"
        })
    }
    else {
        let totalproperty = await propertyModel.find({ status: "Approved", propertyAdvisorId: req.body.propertyAdvisorId })
        let totalpendingproperty = await propertyModel.find({ status: "Pending", propertyAdvisorId: req.body.propertyAdvisorId })
        let totalpendingbooking = await bookingModel.find({ status: "Pending", propertyAdvisorId: req.body.propertyAdvisorId })
        let totalcompletebooking = await bookingModel.find({ status: "Completed", propertyAdvisorId: req.body.propertyAdvisorId })

        res.send({
            success: true,
            status: 200,
            message: "Property Dashboard",
            data: {
                totalproperty: totalproperty.length,
                totalpendingproperty: totalpendingproperty.length,
                totalpendingbooking: totalpendingbooking.length,
                totalcompletebooking: totalcompletebooking.length
            }
        })
    }
}

module.exports = { adminDashboard, propertyadvisorDashboard }