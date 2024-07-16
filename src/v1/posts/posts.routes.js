const express = require('express');
const router = express.Router();
const postsController = require('./posts.controller');

// กำหนดเส้นทางสำหรับโมดูล posts
router.get('/:id', postsController.getPost);
router.post('/', postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;
