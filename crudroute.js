const express = require('express')
const { crudcontroller, deletecrud, updatecrud, findalluser, findoneuser } = require('./crudcontroller')
const router  = express.Router()

router.post('/create', crudcontroller)
router.delete('/:id', deletecrud)
router.put('/update/:id', updatecrud)
router.get('/', findalluser)
router.get('/:id', findoneuser)

module.exports = router