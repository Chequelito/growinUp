const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', usersRoutes);

module.exports = router;
