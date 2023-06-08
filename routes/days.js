const router = require('express').Router()
const daysCtrl = require('../controllers/days.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, daysCtrl.index)
router.post('/', checkAuth, daysCtrl.create)
router.patch('/:dayId', checkAuth, daysCtrl.update)
// router.put('/:dayId/add-photo', checkAuth, daysCtrl.addPhoto)
router.delete('/:dayId', checkAuth, daysCtrl.delete)


module.exports = router