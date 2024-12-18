const express = require('express');
const router = express.Router();
const taskRoutes = require('./task.routes');
const config = require('../config');

// Mount task routes at /tasks
router.use(`${config.api.prefix}/tasks`, taskRoutes);

module.exports = router;
