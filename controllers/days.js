const { Day, Profile } = require('../models')

async function create(req, res) {
  try {
    const day = await Day.create(req.body)
    res.status(200).json(day)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: err })
  }
}

module.exports = {
  create
}