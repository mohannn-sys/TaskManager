const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/task.controller');

router.post('/', TaskController.create);
router.get('/', TaskController.getAll);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

module.exports = router;
