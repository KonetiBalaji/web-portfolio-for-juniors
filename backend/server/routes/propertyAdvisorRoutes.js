const router = require('express').Router()
const userController = require('../api/user/userController')
const propertyAdvisorController = require('../api/propertyadvisor/propertyAdvisorController')
const propertyController = require('../api/property/propertyController')
const multer = require('multer')
const bookingController = require('../api/booking/bookingController')
const chatController = require('../api/chat/chatController')
const dashboardController = require('../api/dashboard/dashboardController')



//auth
router.post('/login', userController.login)

const propertyAdvisorStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/propertyadvisor')
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const propertyAdvisorUpload = multer({ storage: propertyAdvisorStorage })
router.post('/register', propertyAdvisorUpload.single('profile'), propertyAdvisorController.register)


router.post("/property/single", propertyController.single)
router.post("/property/all", propertyController.all)

router.use(require('../middleware/tokenChecker'))


router.post("/dashboard",  dashboardController.propertyadvisorDashboard) 

// Proerty Routes

const propertyStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/properties')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const propertyUpload = multer({ storage: propertyStorage })
router.post("/property/add", propertyUpload.single('image'), propertyController.add)
router.post("/property/update", propertyUpload.single('image'), propertyController.update)
router.post("/property/status", propertyController.changeStatus)


// Booking
router.post('/booking/status', bookingController.changeStatus)
router.post('/booking/all', bookingController.allBookings)

// Chat
router.post('/chat/add', chatController.add)
router.post('/chat/all', chatController.all)
router.post('/chat/single', chatController.single)
router.post('/chat/delete', chatController.delMessage)



router.post('/changePassword', userController.changePassword)



module.exports = router