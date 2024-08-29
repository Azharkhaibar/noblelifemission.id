const express = require('express')
const router = express.Router()
const MemberController = require('../controllers/membercontroller')
router.get('/test', (req, res) => {
    res.status(200).send('oke berhasil')
})

// member
router.post('/member', MemberController.memberPost)
router.get('/member', MemberController.getMember)
router.get('/member/:id', MemberController.getMemberById)
router.put('/member/:id', MemberController.UpdateMember )
module.exports = router