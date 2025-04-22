const mongoose = require('mongoose')
const propertySchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    propertyTypeId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'propertyType' },
    cityId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'city' },
    propertyAdvisorId: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'propertyadvisor' },
    image: { type: String, default: '/no image.jpg' },
    description: { type: String, default: 'No Description' },
    location: { type: String, default: '' },
    price: { type: String, default: 0 },
    title: { type: String, default: '' },
    type: { type:String, default:''},
    status: { type: String, default: "Pending" }, // Pending, Canceled ,Approved, Declined , Complete
    createdAt: { type: Date, default: Date.now },

})
module.exports = mongoose.model('property', propertySchema)