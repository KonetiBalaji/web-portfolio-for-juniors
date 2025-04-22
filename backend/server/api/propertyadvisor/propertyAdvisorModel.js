const mongoose = require('mongoose')
const propertyAdvisorSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    address: { type: String, default: '' },
    licenseNo: { type: String, default: '' },
    adharCardNo: { type: String, default: '' },
    profile: { type: String, default: '/Noimage.jpg' },
    contact: { type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },
    userType: { type: Number, default: 2 },// 1 - Admin, 2 - propertyadvisor 3- customer
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('propertyadvisor', propertyAdvisorSchema)