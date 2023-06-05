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

async function index(req, res) {
  try {
    const days = await Day.findAll()
    res.status(200).json(days)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: err })
  }
}

async function update(req, res) {
  try {
    const day = Day.update(
      req.body,
      { where: { id: req.params.dayId }}
    )
    res.status(200).json(day)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: err })
  }
}

async function deleteDay(req, res) {
  try {
    const day = await Day.findByPk(req.params.dayId)
    await day.destroy()
    res.status(200).json(day)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: err })
  }
}


module.exports = {
  create,
  index,
  update,
  delete: deleteDay,
}