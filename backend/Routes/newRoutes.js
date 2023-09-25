const express = require('express')
const router = express.Router()
const batteryController = require('../controllers/batteryController')
const newBatteryController = require('../controllers/newBatteryControoler')

router.post('/submit',newBatteryController.newBattery )

// Battery routes
router.get('/search/:serialNumber', batteryController.getBatteryBySerialNumber)


// New battery routes
router.get('/serialNumbers', newBatteryController.fetchBattery)
router.get('/search/:serialNumber', newBatteryController.searchBattery)
router.put('/update/:serialNumber',newBatteryController.updatedBattery )

module.exports = router
