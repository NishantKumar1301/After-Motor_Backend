const Battery = require('../models/Battery')

exports.getBatteryBySerialNumber = async (req, res) => {
  try {
    const { serialNumber } = req.params
    const battery = await Battery.findOne({ batterySerial: serialNumber })

    if (!battery) {
      return res.status(404).json({ error: 'Battery not found' })
    }

    res.json(battery)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}



