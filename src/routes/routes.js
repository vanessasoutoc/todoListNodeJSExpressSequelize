const express = require('express');
const router = express.Router();
const TaskCtrl = require('../controllers/task-ctrl');
const UserCtrl = require('../controllers/user-ctrl');


router.get('/tasks', TaskCtrl.list);
router.post('/tasks', TaskCtrl.new);
router.get('/users', UserCtrl.list);
router.post('/users', UserCtrl.new);


module.exports = router;