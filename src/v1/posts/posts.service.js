let posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

exports.getPostById = (id) => {
    return posts.find(p => p.id == id);
};

exports.createPost = (post) => {
    const newPost = { id: posts.length + 1, ...post };
    posts.push(newPost);
    return newPost;
};

exports.updatePost = (id, updatedPost) => {
    const postIndex = posts.findIndex(p => p.id == id);
    if (postIndex !== -1) {
        posts[postIndex] = { id, ...updatedPost };
        return posts[postIndex];
    }
    return null;
};

exports.deletePost = (id) => {
    const postIndex = posts.findIndex(p => p.id == id);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        return true;
    }
    return false;
};
