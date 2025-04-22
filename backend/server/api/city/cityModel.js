const mongoose = require('mongoose')
const citySchema = new mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: '' },
    image: { type: String, default: '/no image.jpg' },
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('city', citySchema)