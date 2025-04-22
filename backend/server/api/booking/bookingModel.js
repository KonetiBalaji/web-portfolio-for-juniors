const mongoose = require('mongoose')
const bookingSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'property', default: null },
    customerId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'customer' },
    propertyAdvisorId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'propertyadvisor' },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: "Pending" } // 1- pending 2- approve 3- decline 4- cancel 5- complete
})
module.exports = mongoose.model('booking', bookingSchema)