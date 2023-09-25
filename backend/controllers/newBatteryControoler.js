const Battery = require('../models/Battery')

exports.newBattery = async (req, res) => {
  try {
    const newEntry = new Battery(req.body)
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

exports.fetchBattery = async (req, res) => {
  try {
    const serialNumbers = await Battery.find({}, 'batterySerial')
    res.status(200).json(serialNumbers)
  } catch (error) {
    console.error('Error while fetching battery serial numbers:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.searchBattery = async (req, res) => {
  try {
    const { serialNumber } = req.params
    const batteries = await Battery.find({ batterySerial: serialNumber })

    res.json(batteries)
  } catch (error) {
    console.error('Error fetching batteries:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

exports.updatedBattery = async (req, res) => {
  try {
    const { serialNumber } = req.params

    const updatedBattery = await Battery.findOneAndUpdate(
      { batterySerial: serialNumber },
      req.body,
      { new: true }
    )

    if (!updatedBattery) {
      return res.status(404).json({ error: 'Document not found' })
    }

    res.status(200).json({ message: 'Data updated successfully' })
  } catch (error) {
    console.error('Error updating data:', error)
    res.status(500).json({ error: 'An error occurred while updating data' })
  }
}

exports.deleteBattery = async (req, res) => {
  const { serialNumber } = req.params

  try {
    const deletedBattery = await Battery.findOneAndDelete({
      batterySerial: serialNumber,
    })

    if (!deletedBattery) {
      return res.status(404).json({ error: 'Data not found' })
    }

    res.status(200).json({ message: 'Data deleted successfully' })
  } catch (error) {
    console.error('Error deleting data:', error)
    res.status(500).json({ error: 'An error occurred while deleting data' })
  }
}
