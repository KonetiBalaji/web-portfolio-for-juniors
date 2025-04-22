const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    autoId:{type:Number, default:0},
    propertyAdvisorId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    customerId: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    messages:[{
            fromId:{type:mongoose.Schema.Types.ObjectId, default:null, ref:'user'},
            message:{type: String, default:""},
            createdAt:{type:Date, default:Date.now},
            status:{type:Boolean, default:true}
    }],
   
})

module.exports = mongoose.model('chat',chatSchema)