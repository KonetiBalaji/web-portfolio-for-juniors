const router = require('express').Router()
const userController = require('../api/user/userController')
const customerController = require('../api/customer/customerController')
const bookingController = require('../api/booking/bookingController')
const multer = require('multer')
const chatController = require('../api/chat/chatController')
const propertyTypeController = require('../api/propertyType/propertyTypeController')
const cityController = require('../api/city/cityController')
const propertyController = require('../api/property/propertyController')
//auth
router.post('/login', userController.login)

const customerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/customer')
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const customerUpload = multer({ storage: customerStorage })
router.post('/register', customerUpload.single('profile'), customerController.register)


// Property Type
router.post("/propertyType/all",  propertyTypeController.all) 

//city
router.post("/city/all", cityController.all) 


// property 
router.post("/property/all", propertyController.all)


// Middleware

router.use(require('../middleware/tokenChecker'))

router.post('/changePassword', userController.changePassword)



// booking
router.post('/property/book', bookingController.bookProperty)
router.post('/booking/all', bookingController.allBookings)
router.post('/booking/update', bookingController.changeStatus)

// Chat
router.post('/chat/add', chatController.add)
router.post('/chat/all', chatController.all)
router.post('/chat/single', chatController.single)
router.post('/chat/delete', chatController.delMessage)



router.post('/changePassword', userController.changePassword)

module.exports = router