let users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' }
];

exports.getUserById = (id) => {
    return users.find(u => u.id == id);
};

exports.createUser = (user) => {
    const newUser = { id: users.length + 1, ...user };
    users.push(newUser);
    return newUser;
};

exports.updateUser = (id, updatedUser) => {
    const userIndex = users.findIndex(u => u.id == id);
    if (userIndex !== -1) {
        users[userIndex] = { id, ...updatedUser };
        return users[userIndex];
    }
    return null;
};

exports.deleteUser = (id) => {
    const userIndex = users.findIndex(u => u.id == id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return true;
    }
    return false;
};
