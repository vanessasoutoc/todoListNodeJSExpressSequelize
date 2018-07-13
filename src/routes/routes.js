const express = require('express');
const router = express.Router();

const TasksRoutes = require('./tasks-routes');
const UsersRoutes = require('./users-routes');

router.use('/tasks', TasksRoutes);
router.use('/users', UsersRoutes);


module.exports = router;