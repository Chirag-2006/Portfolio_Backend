const express = require('express');
const project = require('../controllers/project-controllers');
const router = express.Router();


// Get all projects
router.route('/project').get(project)

module.exports = router;