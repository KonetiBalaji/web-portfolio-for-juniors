const Customer = require('./customerModel')
const User = require('../user/userModel')
const bcrypt = require("bcryptjs");



const register = async (req, res) => {
    let validation = ''
    if (!req.body.name)
        validation += ' name is required '
    if (!req.body.email )
        validation += ' email is required '
    if (!req.body.password )
        validation += ' password is required '
    if (!req.body.contact )
        validation += ' contact is required '
    if (!req.body.address )
        validation += ' address is required '
    if (!req.body.gender )
        validation += ' gender is required '
    if (!req.file)
        validation += ' profile is required '

    if (!!validation) {
        return res.send({ success: false, status: 403, message: "validation Error:" + validation })
    }
    else {
        let prev = await User.findOne({ email: req.body.email })

        if (prev != null) {
            res.send({ success: false, status: 409, message: "Email Already Exists" })
        }
        else {
            let totalCustomer = await Customer.countDocuments()
            let newCustomer = new Customer()
            newCustomer.autoId = totalCustomer + 1
            newCustomer.name = req.body.name
            newCustomer.email = req.body.email
            newCustomer.address = req.body.address
            newCustomer.gender = req.body.gender
            newCustomer.profile = "customer/" + req.file.filename
            newCustomer.contact = req.body.contact
            await newCustomer.save()
                .then(async (savedCustomer) => {
                    let newUser = new User()
                    newUser.name = req.body.name
                    newUser.email = req.body.email
                    newUser.customerId = savedCustomer._id
                    newUser.password = bcrypt.hashSync(req.body.password, 10);
                    await newUser.save().then((savedUser) => {
                        newCustomer.userId = savedUser._id
                        newCustomer.save().then(() => {
                            res.send({
                                success: true,
                                status: 200,
                                message: "Customer Registered",
                                data: savedCustomer
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
    Customer.find(req.body).populate('userId')
        .sort({createdAt:-1})
        .then((data) => {
            res.send({
                success: true,
                status: 200,
                message: "All Customers Loaded",
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

const blockCustomers = (req, res) => {
    let validation = ""

    if (!req.body._id) {
        validation += "_id is required"
    }
    if (!req.body.status) {
        validation += "status is required"
    }

    if (!!validation) {
        res.send({ success: false, status: 500, message: validation })
    }
    else {
        Customer.findOne({ _id: req.body._id })
            .then((data) => {
                if (data == null) {
                    res.send({ success: false, status: 500, message: "Customer Does not exist" })
                }
                else {
                    data.status = req.body.status
                    data.save().then(async () => {
                        await User.findOne({ customerId: req.body._id }).then((userData) => {
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
        Customer.findOne({ _id: req.body._id })
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

module.exports = { register,all,blockCustomers,single }



