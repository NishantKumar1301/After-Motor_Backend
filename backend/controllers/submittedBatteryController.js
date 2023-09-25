const SubmittedBattery = require('../models/SubmittedBattery')

exports.newSubmittedBattery = async (req, res) => {
  try {
    const newEntry = new SubmittedBattery(req.body)
    const validationError = newEntry.validateSync()

    if (validationError) {
      return res.status(400).json({ message: validationError.message })
    }

    await newEntry.save()
    res.status(201).json({ message: 'Entry created successfully' })
  } catch (error) {
    console.error('Error while saving to MongoDB:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getSubmittedBatteryBySerialNumber = async (req, res) => {
  try {
    const { serialNumber } = req.params
    const battery = await SubmittedBattery.findOne({ batterySerial: serialNumber})

    if (!battery) {
      return res.status(404).json({ error: 'Battery not found' })
    }

    res.json(battery)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Server error' })
  }
}

exports.fetchSubmittedBattery = async (req, res) => {
  try {
    const updatedNumbers = await SubmittedBattery.find({}, 'batterySerial')
    res.status(200).json(updatedNumbers)
  } catch (error) {
    console.error('Error while fetching battery serial numbers:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.searchUpdatedBattery = async (req, res) => {
  try {
    const { serialNumber } = req.params
    const batteries = await SubmittedBattery.find({ batterySerial: serialNumber })

    res.json(batteries)
  } catch (error) {
    console.error('Error fetching batteries:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
