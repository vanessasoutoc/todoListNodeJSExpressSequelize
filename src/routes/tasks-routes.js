const express = require('express');
const router = express.Router();

const TaskCtrl = require('../controllers/task-ctrl');

router.get('/', TaskCtrl.list);
router.post('/', TaskCtrl.new);

module.exports = router;