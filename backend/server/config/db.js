const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/RealEstate")
    .then(() => {
        console.log('Db Connected')
    })
    .catch((err) => {
        console.log("Db Error", err)
    })


