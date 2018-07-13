const express = require('express');
const router = express.Router();

const UserCtrl = require('../controllers/user-ctrl');

router.get('/users', UserCtrl.list);
router.post('/users', UserCtrl.new);

module.exports = router;