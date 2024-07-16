const postsService = require('./posts.service');

exports.getPost = (req, res) => {
    const post = postsService.getPostById(req.params.id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
};

exports.createPost = (req, res) => {
    const newPost = postsService.createPost(req.body);
    res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
    const updatedPost = postsService.updatePost(req.params.id, req.body);
    if (updatedPost) {
        res.json(updatedPost);
    } else {
        res.status(404).send('Post not found');
    }
};

exports.deletePost = (req, res) => {
    const success = postsService.deletePost(req.params.id);
    if (success) {
        res.send({ message: 'Post deleted successfully.' });
    } else {
        res.status(404).send('Post not found');
    }
};
