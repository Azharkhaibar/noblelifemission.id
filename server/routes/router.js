const express = require('express')
const router = express.Router()
const MemberController = require('../controllers/membercontroller')
const AuthController = require('../controllers/authcontroller.js')
router.get('/test', (req, res) => {
    res.status(200).send('oke berhasil')
})

// member
router.post('/member', MemberController.memberPost)
router.get('/member', MemberController.getMember)
router.get('/member/:id', MemberController.getMemberById)
router.put('/member/:id', MemberController.UpdateMember )

router.post("/auth/register", AuthController.Register);
router.get("/auth/register", AuthController.getRegisterData);
router.get("/auth/register/:id", AuthController.getRegisterDataById);
router.put("/auth/register/:id", AuthController.updateRegisterData);
module.exports = router