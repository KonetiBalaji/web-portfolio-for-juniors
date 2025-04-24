const Propertyadvisor = require('./propertyAdvisorModel')
const bcrypt = require("bcryptjs");
const User = require('../user/userModel')


const register = async (req, res) => {
    let validation = ''
    if (!req.body.name) {
        validation += ' name is required '
    }
    if (!req.body.email) {
        validation += ' email is required '
    }
    if (!req.body.password) {
        validation += ' password is required '
    }
    if (!req.body.address) {
        validation += ' address is required '
    }
    if (!req.body.licenseNo) {
        validation += ' licenseNo is required '
    }
    if (!req.body.adharCardNo) {
        validation += ' adharCardNo is required '
    }
    
    if (!req.file) {
        validation += ' profile is required '
    }
    if (!req.body.contact) {
        validation += ' contact is required '
    }
    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {
        let prev = await User.findOne({ email: req.body.email })

        if (prev != null) {
            res.send({ success: false, status: 409, message: "Email Already Exists" })
        }
        else {
            let total = await Propertyadvisor.countDocuments()
            let newPropertyAdvisor = new Propertyadvisor()
            newPropertyAdvisor.autoId = total + 1
            newPropertyAdvisor.name = req.body.name
            newPropertyAdvisor.email = req.body.email
            newPropertyAdvisor.address = req.body.address
            newPropertyAdvisor.licenseNo = req.body.licenseNo
            newPropertyAdvisor.adharCardNo = req.body.adharCardNo
            newPropertyAdvisor.profile = "propertyadvisor/" + req.file.filename
            newPropertyAdvisor.contact = req.body.contact
            newPropertyAdvisor.status = false
            await newPropertyAdvisor.save()
                .then(async (result) => {
                    let newUser = new User()
                    newUser.name = req.body.name
                    newUser.email = req.body.email
                    newUser.propertyAdvisorId = result._id
                    newUser.userType = 2
                    newUser.status = false
                    newUser.password = bcrypt.hashSync(req.body.password, 10);
                    await newUser.save().then((savedUser) => {
                        newPropertyAdvisor.userId = savedUser._id
                        newPropertyAdvisor.save().then(() => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Property Dealer Registered",
                                data: result
                            })
                        }).catch(() => {
                            res.send({ success: false, status: 500, message: err.message })
                        })



                    }).catch((err) => {
                        res.send({ success: false, status: 500, message: err.message })
                    })

                }).catch((err) => {
                    res.send({ success: false, status: 500, message: err.message })

                })
        }
    }
}

const all = (req, res) => {
    Propertyadvisor.find(req.body).populate('userId')
        .sort({createdAt:-1})
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "All Dealers Loaded",
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

const status = (req, res) => {
    let validation = ""

    if (!req.body._id) {
        validation += "_id is required "
    }
    if (!req.body.status) {
        validation += "status is required "
    }

    if (!!validation) {
        res.send({ success: false, status: 500, message: validation })
    }
    else {
        Propertyadvisor.findOne({ _id: req.body._id })
            .then((data) => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "Propertyadvisor Does not exist" })
                }
                else {
                    data.status = req.body.status
                    data.save().then(async () => {
                        await User.findOne({ propertyAdvisorId: req.body._id }).then((userData) => {
                            if (userData == null) {
                                res.send({ success: false, status: 500, message: "User Does not exist" })

                            }
                            else {
                                userData.status = req.body.status
                                userData.save().then((updatedData) => {
                                    res.send({ success: true, status: 200, message: "Status Changed Successfully" })
                                })
                                    .catch((err) => {
                                        res.send({ success: false, status: 500, message: err.message })
                                    })
                            }
                        })
                    }).catch((err) => {
                        res.send({ success: false, status: 500, message: err.message })
                    })
                }
            })
            .catch((err) => {
                res.send({ success: false, status: 500, message: err.message })
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
        Propertyadvisor.findOne({ _id: req.body._id })
            .then((data) => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "Customer Does not exist" })
                }
                else
                    res.send({ success: true, status: 200, message: "Customer Loaded", data: data })
            })
            .catch((err) => {
                res.send({ success: false, status: 500, message: err.message })
            })
    }
}

module.exports = { register,status, single, all }