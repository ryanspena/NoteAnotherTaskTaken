const notesRoutes = require('./notesRoutes.js');
const router = require('express').Router();

router.use(notesRoutes);

module.exports = router;
