const express = require('express');
const router = express.Router();

// Import เส้นทางของโมดูล users และ posts
const usersRoutes = require('./users/users.routes');
const postsRoutes = require('./posts/posts.routes');



// ใช้งานเส้นทางของโมดูลต่าง ๆ
router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);

const loginRoutes = require('../authenticate/routes');
router.use('/login', loginRoutes);

module.exports = router;
