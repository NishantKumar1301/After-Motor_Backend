const express = require('express')
const router = express.Router()
const batteryController = require('../controllers/batteryController')
const newBatteryController = require('../controllers/newBatteryControoler')
const submittedBatteryController = require('../controllers/submittedBatteryController')

router.post('/submit',newBatteryController.newBattery )

// Battery routes
router.get('/search/:serialNumber', batteryController.getBatteryBySerialNumber)


// New battery routes
router.get('/serialNumbers', newBatteryController.fetchBattery)
router.get('/search/:serialNumber', newBatteryController.searchBattery)
router.put('/update/:serialNumber',newBatteryController.updatedBattery )
router.delete('/delete/:serialNumber',newBatteryController.deleteBattery)

//Submitted routes

router.post('/updatedSubmit',submittedBatteryController.newSubmittedBattery);
router.get('/updatedSearch/:serialNumber',submittedBatteryController.getSubmittedBatteryBySerialNumber)
router.get('/updateSearch/:serialNumber',submittedBatteryController.searchUpdatedBattery)
router.get('/updatedNumbers',submittedBatteryController.fetchSubmittedBattery);

module.exports = router
