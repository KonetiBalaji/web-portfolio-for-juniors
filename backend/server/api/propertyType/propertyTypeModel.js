const mongoose = require('mongoose')
const propertyTypeSchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: '' },
    image: { type: String, default: '/category/no image.jpg' },
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('propertyType', propertyTypeSchema)