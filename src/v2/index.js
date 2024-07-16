const express = require('express');
const router = express.Router();

// Import เส้นทางของโมดูล users (ในตัวอย่างนี้สมมุติว่าเรามีโมดูล users เท่านั้นใน v2)
const usersRoutes = require('./users/users.routes');


// ใช้งานเส้นทางของโมดูล users
router.use('/users', usersRoutes);


module.exports = router;
