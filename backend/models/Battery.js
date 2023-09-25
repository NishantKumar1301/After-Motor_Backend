const mongoose = require('mongoose')

const batterySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  serial: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  manufacturer: String,
  name: String,
  city: String,
  number: String,
  courierName: String,
  trackingId: Number,
  voltage: String,
  ah: String,
  batterySerial: String,
  mfgDate: Date,
  issue: String,
  condition: String,
  warranty: String,
  volt: Number,
  capacity: Number,
  voltCapacity: Number,
  series: Number,
  parallel: Number,
  expectedAh: Number,
  upperVolt: String,
  lowerVolt: String,
  maxString: {
    type: String,
  },
  minString: {
    type: String,
  },
  balancedV: {
    type: String,
  },
  afterBalance: {
    type: String,
  },
  c1charge: String,
  c2charge: String,
  c3charge: String,
  c1discharge: String,
  c2discharge: String,
  c3discharge: String,
  c1capacity: String,
  c2capacity: String,
  c3capacity: String,
  replacement: String,
  status: {
    type: String,
    enum: ['Repaired', 'Not Repaired'],
  },
  submit: {
    type: String,
    enum: ['KESHAB', 'BHARAT', 'ABHISHEK', 'SIVA', 'MOHAN', 'DIWAKAR'],
  },
})

const Battery = mongoose.model('Battery', batterySchema)

module.exports = Battery
