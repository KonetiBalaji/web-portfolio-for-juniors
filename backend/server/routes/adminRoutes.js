const router = require('express').Router()
const userController = require('../api/user/userController')
const cityController = require('../api/city/cityController')
const dashboardController = require('../api/dashboard/dashboardController')
const propertyTypeController = require('../api/propertyType/propertyTypeController')
const customerController = require('../api/customer/customerController')
const propertyAdvisorController = require('../api/propertyadvisor/propertyAdvisorController')
const multer = require('multer')




//auth
router.post('/login', userController.login)


// property type routes
router.post("/propertyType/all",  propertyTypeController.all) 
router.post("/propertyType/single",  propertyTypeController.single) 


// city
router.post("/city/single", cityController.single)
router.post("/city/all", cityController.all)



router.use(require('../middleware/tokenChecker'))


// admin dashboard
router.post("/dashboard",  dashboardController.adminDashboard) 

// Property Type Routes
const propertyTypeStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/types')
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const propertyTypeUpload = multer({ storage: propertyTypeStorage })


router.post("/propertyType/add", propertyTypeUpload.single('image'), propertyTypeController.add)
router.post("/propertyType/update", propertyTypeUpload.single('image'), propertyTypeController.update)
router.post("/propertyType/status",  propertyTypeController.changeStatus) 


// City Routes
const cityStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public/cities')
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const cityUpload = multer({ storage: cityStorage })


router.post("/city/add", cityUpload.single('image'), cityController.add)
router.post("/city/update", cityUpload.single('image'), cityController.update)
router.post("/city/status", cityController.changeStatus)


// Customers
router.post("/customer/all", customerController.all)
router.post("/customer/block", customerController.blockCustomers)

// Property Advisor
router.post("/propertAdvisor/all", propertyAdvisorController.all)
router.post("/propertAdvisor/block", propertyAdvisorController.status)



router.post('/changePassword', userController.changePassword)


module.exports = router