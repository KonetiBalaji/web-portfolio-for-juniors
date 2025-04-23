const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://preetswan6:XLrZ7b0tRikR2v5V@cluster0.46jlhs6.mongodb.net/web-project")
    .then(() => {
        console.log('Db Connected')
    })
    .catch((err) => {
        console.log("Db Error", err)
    })


